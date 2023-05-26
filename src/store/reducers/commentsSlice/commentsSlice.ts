import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Comment, CommentsData } from "@models";

export interface CommentsState {
    commentsData: CommentsData[];
}

const initialState: CommentsState = {
    commentsData: [],
};

export const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        setComments: (
            state,
            { payload: comments }: PayloadAction<Comment[]>
        ) => {
            state.commentsData = state.commentsData.map((commentData) =>
                commentData.postId === comments[0].postId
                    ? { ...commentData, comments: comments, isLoading: false }
                    : commentData
            );
        },
        setCommentsLoading: (
            state,
            { payload: postId }: PayloadAction<number>
        ) => {
            if (
                !state.commentsData.find(
                    (commentData) => commentData.postId === postId
                )
            ) {
                state.commentsData.push({
                    postId: postId,
                    comments: [],
                    isLoading: true,
                    error: "",
                });
            }
        },
        setCommentsError: (
            state,
            {
                payload: { error, postId },
            }: PayloadAction<{ postId: number; error: string }>
        ) => {
            state.commentsData = state.commentsData.map((commentData) =>
                commentData.postId === postId
                    ? { ...commentData, error: error, isLoading: false }
                    : commentData
            );
        },
        getCommentsByPostId: (state, action: PayloadAction<number>) => {},
    },
});
