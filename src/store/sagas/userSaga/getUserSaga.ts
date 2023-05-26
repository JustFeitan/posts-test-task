import {
    isAxiosErrorResponse,
    isErrorWithMessage,
    toAxiosError,
} from "@helpers/isErrorWithMessage";
import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

import { postsActions } from "@store/reducers/postsSlice";
import { userActions } from "@store/reducers/userSlice";

import { userService } from "@services/userService";

import { User } from "@models/User";

export function* getUser({ payload: userId }: PayloadAction<number>) {
    try {
        yield put(userActions.setUserLoading());
        const userResponse: AxiosResponse<User[]> = yield call(
            userService.getUser,
            userId
        );
        yield put(userActions.setUser(...userResponse.data));
    } catch (e) {
        if (isErrorWithMessage(e)) {
            yield put(userActions.setUserError(e.message));
        }
    }
}

export function* watchGetUser() {
    yield takeLatest(userActions.getUser, getUser);
}
