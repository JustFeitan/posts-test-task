import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { reducers } from "@store/reducers";

import { User } from "@models/User";

export interface UserState {
    user: User | null;
    isLoading: boolean;
    error: Error | string | null;
}

const initialState: UserState = {
    user: null,
    isLoading: false,
    error: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            state.isLoading = false;
        },
        setUserLoading: (state) => {
            state.isLoading = true;
        },
        setUserError: (state, action: PayloadAction<Error | string | null>) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        getUser: (state, action: PayloadAction<number>) => {},
    },
});
