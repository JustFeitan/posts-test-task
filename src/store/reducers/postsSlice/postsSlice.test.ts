import {PostsState} from "@store/reducers/postsSlice/postsSlice";
import {postsActions, postsReducer} from "@store/reducers/postsSlice/index";
import {Post} from "@models";

describe('comments slice tests', () => {
    let initialPostsSate: PostsState;
    let postsMock: Post[];
    beforeAll(() => {
        initialPostsSate = {
            posts: null,
            isLoading: false,
            error: null,
            pagesArray: null
        }
        postsMock = [
            {
                title: 'asd',
                userId: 1,
                body: 'asddsdsddsa',
                id: 1
            },
            {
                title: 'asd',
                userId: 2,
                body: 'asddsdsddsa',
                id: 2
            }
        ]
    })

    test('should return initial state', () => {
        expect(postsReducer(undefined, {type: undefined}))
            .toEqual(initialPostsSate)
    })

    test('should handle setting posts loading', () => {
        expect(postsReducer(initialPostsSate, postsActions.setPostsLoading))
            .toEqual({...initialPostsSate, isLoading: true})
    })

    test('should handle setting posts', () => {
        expect(postsReducer(initialPostsSate, postsActions.setPosts(postsMock)))
            .toEqual({...initialPostsSate, posts: postsMock})
    })

    test('should handle setting posts error', () => {
        expect(postsReducer(initialPostsSate, postsActions.setPostsError('Error')))
            .toEqual({...initialPostsSate, error: 'Error'})
    })

    test('should handle setting posts pagesArray', () => {
        expect(postsReducer(initialPostsSate, postsActions.setPagesArray([1, 2, 3])))
            .toEqual({...initialPostsSate, pagesArray: [1, 2, 3]})
    })

    test('should execute getPostsByTitleSearch for trigger saga', () => {
        expect(postsReducer(initialPostsSate, postsActions.getPostsByTitleSearch({page: 1}))).toEqual(initialPostsSate)
    })

    test('should execute getPostsByTitleSearch for trigger saga', () => {
        expect(postsReducer(initialPostsSate, postsActions.getUserPostsByUserId({
            userId: 1,
            queryParams: {page: 1}
        }))).toEqual(initialPostsSate)
    })

    afterAll(() => {
        jest.clearAllMocks()
    })
})
