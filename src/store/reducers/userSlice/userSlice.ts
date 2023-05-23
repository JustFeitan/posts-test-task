import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {reducers} from "@store/reducers";
import {User} from "@models/User";

interface UserState {
    user: User | null;
    isLoading: boolean;
    error: Error | null;
}

const initialState: UserState = {
    user: null,
    isLoading: false,
    error: null,
}


export const userSlice = createSlice({
        name: 'user',
        initialState,
        reducers: {
            setUser: (state, action: PayloadAction<User>) => {
                state.user = action.payload;
                state.isLoading = false;
            },
            setUserLoading: (state, action) => {
                state.isLoading = true;
            },
            setUserError: (state, action:PayloadAction<Error>) => {
                state.error = action.payload
                state.isLoading = false;
            },
            getUser: (state, action: PayloadAction<number>) => {

            },

        }
    }
)
