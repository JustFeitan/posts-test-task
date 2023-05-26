import {Action} from "redux";
import {postsService} from '@services'
import {Comment, Post} from "@models";
import {runSaga} from "redux-saga";
import {AxiosResponse} from "axios";
import {postsActions} from "@store/reducers/postsSlice";
import {getPostsByTitleSearchSaga} from "@store/sagas/postsSaga/getPostsByTitleSearchSaga";
import clearAllMocks = jest.clearAllMocks;
import {commentsActions} from "@store/reducers/commentsSlice";
import {getPostComments} from "@store/sagas/postsSaga/getPostsCommentsSaga";


jest.mock('axios')
describe('getPostsCommentsSaga tests', () => {
    const dispatched: Action[] = []
    let response: Partial<AxiosResponse<Comment[]>>;
    let responseWithError: Partial<AxiosResponse<Error>>;
    let fakeStore: any;
    let type: Action["type"];
    beforeAll(() => {
        type = commentsActions.getCommentsByPostId.type;
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
                    "postId": 1,
                    "id": 1,
                    "name": "id labore ex et quam laborum",
                    "email": "Eliseo@gardner.biz",
                    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
                },
                {
                    "postId": 1,
                    "id": 2,
                    "name": "quo vero reiciendis velit similique earum",
                    "email": "Jayne_Kuhic@sydney.com",
                    "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
                },
                {
                    "postId": 1,
                    "id": 3,
                    "name": "odio adipisci rerum aut animi",
                    "email": "Nikita@garfield.biz",
                    "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
                },
                {
                    "postId": 1,
                    "id": 4,
                    "name": "alias odio sit",
                    "email": "Lew@alysha.tv",
                    "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
                },
                {
                    "postId": 1,
                    "id": 5,
                    "name": "vero eaque aliquid doloribus et culpa",
                    "email": "Hayden@althea.biz",
                    "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
                },
            ],
            headers: {
                'x-total-count': 100
            }

        }
    })

    test('test success case', async () => {
        const spy = jest.spyOn(postsService, "getCommentsByPostId")
        spy.mockReturnValue(Promise.resolve(response as AxiosResponse<Comment[]>))

        await runSaga(fakeStore, getPostComments, {type: type, payload: 1}).toPromise()
        expect(spy).toBeCalledTimes(1);
        expect(dispatched.length).toEqual(2);
        expect(dispatched).toContainEqual(commentsActions.setCommentsLoading(1))
        expect(dispatched).toContainEqual(commentsActions.setComments(response.data))

    })


    test('test error case', async () => {
        const spy = jest.spyOn(postsService, "getCommentsByPostId")
        spy.mockReturnValue(Promise.reject(responseWithError as AxiosResponse<Error>))

        await runSaga(fakeStore, getPostComments, {type: type, payload: 1}).toPromise()
        expect(spy).toBeCalledTimes(1);
        expect(dispatched.length).toEqual(2);
        expect(dispatched).toContainEqual(commentsActions.setCommentsLoading(1))
        expect(dispatched).toContainEqual(commentsActions.setCommentsError({
            postId: 1,
            error: responseWithError.data.message
        }))

    })
    afterEach(() => {
        clearAllMocks();
        dispatched.length = 0;
    })

})
