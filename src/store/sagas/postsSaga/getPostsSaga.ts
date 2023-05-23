import {call, put, takeLatest} from "redux-saga/effects";
import {postsActions} from "@store/reducers/postsSlice";
import {AxiosResponse} from "axios";
import {postsService} from "@services/postsService";
import {Post,QueryParams} from "@models";
import {isErrorWithMessage, toAxiosError} from "@helpers/isErrorWithMessage";
import {getPagesArray, totalPagesCount} from "@helpers/pages";
import {PayloadAction} from "@reduxjs/toolkit";



export function* getPosts({payload: {page, limit}}: PayloadAction<QueryParams>) {
    try {
        yield put(postsActions.setPostsLoading());
        console.log(limit)
        const postsResposne: AxiosResponse<Post[]> = yield call(postsService.getPosts, page, limit);
        const totalPages = totalPagesCount(postsResposne.headers['x-total-count'], limit)
        const pagesArray = getPagesArray(totalPages)
        yield put(postsActions.setPosts(postsResposne.data));
        yield put(postsActions.setPagesArray(pagesArray));
    } catch (e) {
        const AxiosError = toAxiosError(e);
        if (isErrorWithMessage(AxiosError.response!.data)) {
            yield put(postsActions.setPostsError(AxiosError.response!.data.message));
        }
    }
}

export function* watchGetPosts() {
    yield takeLatest(postsActions.loadPosts, getPosts);
}
