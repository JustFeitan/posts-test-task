import {findPostComments} from "@store/reducers/commentsSlice/selectors/findPostComments";
import {commentsReducer} from "@store/reducers/commentsSlice";

describe('find post comments selectors test', function () {
    test('with empty state', () => {
        expect(findPostComments({}, 1)).toEqual(null)
    })

    test('with filled state', () => {
        const commentsReducerMock: ReturnType<typeof commentsReducer> = {
            commentsData: [
                {
                    postId: 1,
                    comments: [],
                    isLoading: false,
                    error: ''
                },
            ]
        }
        expect(findPostComments({commentsReducer: commentsReducerMock}, 1)).toEqual({
            postId: 1,
            comments: [],
            isLoading: false,
            error: ''
        },)
    })
});
