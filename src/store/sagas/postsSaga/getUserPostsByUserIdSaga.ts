import { isErrorWithMessage, toAxiosError } from "@helpers/isErrorWithMessage";
import { getPagesArray, totalPagesCount } from "@helpers/pages";
import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

import { postsActions } from "@store/reducers/postsSlice";

import { postsService } from "@services/postsService";

import { Post, UserPostsRequest } from "@models";

export function* getUserPostsByUserIdSaga({
    payload: { userId, queryParams },
}: PayloadAction<UserPostsRequest>) {
    try {
        yield put(postsActions.setPostsLoading());
        const postsResponse: AxiosResponse<Post[]> = yield call(
            postsService.getUserPostsByUserId,
            userId,
            queryParams
        );
        const totalPages = totalPagesCount(
            postsResponse.headers["x-total-count"],
            queryParams?.limit
        );
        const pagesArray = getPagesArray(totalPages);
        yield put(postsActions.setPosts(postsResponse?.data));
        yield put(postsActions.setPagesArray(pagesArray));
    } catch (e) {
        if (isErrorWithMessage(e)) {
            yield put(postsActions.setPostsError(e.data.message));
        }
    }
}

export function* watchGetUserPostsByUserIdSaga() {
    yield takeLatest(
        postsActions.getUserPostsByUserId,
        getUserPostsByUserIdSaga
    );
}
