import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {Post, QueryParams} from "@models";


interface PostsState {
    posts: Post[];
    pagesArray: number[];
    isLoading: boolean;
    error: string;
}

const initialState: PostsState = {
    posts: [],
    pagesArray: [],
    isLoading: false,
    error: "",
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
        setPostsError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        loadPosts: (state, action: PayloadAction<QueryParams>) => {

        },

    },
});
