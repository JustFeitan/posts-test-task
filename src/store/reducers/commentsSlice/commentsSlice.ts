import {QueryParams} from "@models/QueryParams";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Comment} from "@models/Comment";
import {Post} from "@models/Post";


interface CommentsState {
    comments: Comment[];
    isLoading: boolean;
    error: string;
}

const initialState: CommentsState = {
    comments: [],
    isLoading: false,
    error: "",
};

export const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        setComments: (state, action: PayloadAction<Comment[]>) => {
            state.comments = action.payload
            state.isLoading = false;
        },
        setCommentsLoading: (state) => {
            state.isLoading = true;
        },
        setCommentsError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        getCommentsByPostId: (state, action: PayloadAction<number>) => {

        },

    },
});
