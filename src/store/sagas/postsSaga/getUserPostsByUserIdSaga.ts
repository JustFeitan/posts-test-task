import {call, put, takeLatest} from "redux-saga/effects";
import {postsActions} from "@store/reducers/postsSlice";
import {AxiosResponse} from "axios";
import {postsService} from "@services/postsService";
import {Post, UserPostsRequest} from "@models";
import {isErrorWithMessage, toAxiosError} from "@helpers/isErrorWithMessage";
import {PayloadAction} from "@reduxjs/toolkit";
import {getPagesArray, totalPagesCount} from "@helpers/pages";


export function* getUserPostsByUserIdSaga({payload: {userId, queryParams}}: PayloadAction<UserPostsRequest>) {
    try {
        yield put(postsActions.setPostsLoading());
        const postsResponse: AxiosResponse<Post[]> = yield call(postsService.getUserPostsByUserId, userId, queryParams);
        const totalPages = totalPagesCount(postsResponse.headers['x-total-count'], queryParams?.limit);
        const pagesArray = getPagesArray(totalPages)
        yield put(postsActions.setPosts(postsResponse?.data))
        yield put(postsActions.setPagesArray(pagesArray));
    } catch (e) {
        console.log(e)
        const AxiosError = toAxiosError(e);
        if (isErrorWithMessage(AxiosError.response?.data)) {
            yield put(postsActions.setPostsError(AxiosError.response?.data.message));
        }
    }
}

export function* watchGetUserPostsByUserIdSaga() {
    yield takeLatest(postsActions.getUserPostsByUserId, getUserPostsByUserIdSaga);
}
