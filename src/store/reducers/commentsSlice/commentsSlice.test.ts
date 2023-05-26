import { CommentsState } from "@store/reducers/commentsSlice/commentsSlice";
import {
    commentsActions,
    commentsReducer,
} from "@store/reducers/commentsSlice/index";

import { Comment } from "@models";

describe("comments slice tests", () => {
    let initialCommentsSate: CommentsState;
    let afterLoadingCommentsSate: CommentsState;
    let afterSetCommentsMock: CommentsState;
    beforeAll(() => {
        initialCommentsSate = {
            commentsData: [],
        };
        afterLoadingCommentsSate = {
            commentsData: [
                {
                    postId: 1,
                    comments: [],
                    isLoading: true,
                    error: "",
                },
            ],
        };
        afterSetCommentsMock = {
            commentsData: [
                {
                    postId: 1,
                    comments: [
                        {
                            postId: 1,
                            body: "asdasd",
                            id: 1,
                            name: "Max",
                            email: "asd@gmail.com",
                        },
                        {
                            postId: 1,
                            body: "asdasd",
                            id: 2,
                            name: "Max",
                            email: "asd@gmail.com",
                        },
                    ],
                    isLoading: false,
                    error: "",
                },
            ],
        };
    });

    test("should return initial state", () => {
        expect(commentsReducer(undefined, { type: undefined })).toEqual(
            initialCommentsSate
        );
    });

    test("should handle setting comments loading", () => {
        expect(
            commentsReducer(
                initialCommentsSate,
                commentsActions.setCommentsLoading(1)
            )
        ).toEqual(afterLoadingCommentsSate);
    });

    test("should handle setting comments", () => {
        expect(
            commentsReducer(
                afterLoadingCommentsSate,
                commentsActions.setComments(
                    afterSetCommentsMock.commentsData[0].comments
                )
            )
        ).toEqual(afterSetCommentsMock);
    });

    test("should handle setting error", () => {
        afterSetCommentsMock.commentsData[0].error = "Error";
        expect(
            commentsReducer(
                afterSetCommentsMock,
                commentsActions.setCommentsError({ postId: 1, error: "Error" })
            )
        ).toEqual(afterSetCommentsMock);
    });

    test("should execute getCommentsByPostId for trigger saga", () => {
        expect(
            commentsReducer(
                initialCommentsSate,
                commentsActions.getCommentsByPostId(1)
            )
        ).toEqual(initialCommentsSate);
    });

    afterAll(() => {
        jest.clearAllMocks();
    });
});
