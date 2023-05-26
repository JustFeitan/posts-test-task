import {Action} from "redux";
import {postsService} from '@services'
import {Post} from "@models";
import {runSaga} from "redux-saga";
import {AxiosResponse} from "axios";
import {postsActions} from "@store/reducers/postsSlice";
import {getPostsByTitleSearchSaga} from "@store/sagas/postsSaga/getPostsByTitleSearchSaga";
import clearAllMocks = jest.clearAllMocks;
import {getUserPostsByUserIdSaga} from "@store/sagas/postsSaga/getUserPostsByUserIdSaga";


jest.mock('axios')
describe('getUserPostsByUserIdSaga tests', () => {
    const dispatched: Action[] = []
    let response: Partial<AxiosResponse<Post[]>>;
    let responseWithError: Partial<AxiosResponse<Error>>;
    let fakeStore: any;
    let type: Action["type"];
    let getPagesArray = jest.fn(x => x);
    let pagesArray: number[];
    beforeAll(() => {
        type = postsActions.getPostsByTitleSearch.type;
        pagesArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        fakeStore = {dispatch: (action: Action) => dispatched.push(action)}

        responseWithError = {
            data: {
                name: 'test error',
                message: 'error message'
            }
        }
        response = {
            data: [
                {
                    "userId": 1,
                    "id": 1,
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                },
                {
                    "userId": 1,
                    "id": 2,
                    "title": "qui est esse",
                    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
                },
                {
                    "userId": 1,
                    "id": 3,
                    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
                },

            ],
            headers: {
                'x-total-count': 100
            }

        }
    })

    test('test success case', async () => {
        const spy = jest.spyOn(postsService, 'getUserPostsByUserId')
        spy.mockReturnValue(Promise.resolve(response as AxiosResponse<Post[]>))

        await runSaga(fakeStore, getUserPostsByUserIdSaga, {type: type, payload: {
            userId: 1,
            }}).toPromise()
        expect(spy).toBeCalledTimes(1);
        expect(dispatched.length).toEqual(3);
        expect(dispatched).toContainEqual(postsActions.setPostsLoading())
        expect(dispatched).toContainEqual(postsActions.setPosts(response.data))
        expect(dispatched).toContainEqual(postsActions.setPagesArray(pagesArray))

    })


    test('test error case', async () => {
        const spy = jest.spyOn(postsService, "getUserPostsByUserId")
        spy.mockReturnValue(Promise.reject(responseWithError as AxiosResponse<Error>))

        await runSaga(fakeStore, getUserPostsByUserIdSaga, {type: type, payload: {
                userId: 1,
            }}).toPromise()
        expect(spy).toBeCalledTimes(1);
        expect(dispatched.length).toEqual(2);
        expect(dispatched).toContainEqual(postsActions.setPostsLoading())
        expect(dispatched).toContainEqual(postsActions.setPostsError(responseWithError.data.message))

    })
    afterEach(() => {
        clearAllMocks();
        dispatched.length = 0;
    })

})
