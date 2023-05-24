import {call, put, takeLatest} from "redux-saga/effects";
import {userActions} from "@store/reducers/userSlice";
import {PayloadAction} from "@reduxjs/toolkit";
import {AxiosResponse} from "axios";
import {User} from "@models/User";
import {userService} from "@services/userService";

export function* getUser({payload: userId}: PayloadAction<number>) {
    yield put(userActions.setUserLoading());
    const userResponse: AxiosResponse<User[]> = yield call(userService.getUser, userId);
    yield put(userActions.setUser(...userResponse.data))
}

export function* watchGetUser() {
    yield takeLatest(userActions.getUser, getUser)
}
