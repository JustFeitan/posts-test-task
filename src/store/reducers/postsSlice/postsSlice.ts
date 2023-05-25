import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {Post, QueryParams, UserPostsRequest} from "@models";


interface PostsState {
    posts: Post[];
    pagesArray: number[] | null;
    isLoading: boolean;
    error: Error | null | string | object;
}

const initialState: PostsState = {
    posts: [],
    pagesArray: null,
    isLoading: false,
    error: null,
};

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setPosts: (state, {payload}: PayloadAction<Post[]>) => {
            state.posts = payload;
            state.isLoading = false;
        },
         setPagesArray: (state, {payload}: PayloadAction<number[]>) => {
            state.pagesArray = payload;
            state.isLoading = false;
        },

        setPostsLoading: (state) => {
            state.isLoading = true;
        },
        setPostsError: (state, action: PayloadAction<Error | null | string>) => {
            state.error = action.payload;
            state.isLoading = false;
        },
               loadPosts: (state, action: PayloadAction<QueryParams>) => {

        },
        getPostsByTitleSearch: (state, action: PayloadAction<QueryParams>) => {

        },
        getUserPostsByUserId: (state, action: PayloadAction<UserPostsRequest>) => {

        },

    },
});
