import {PayloadAction} from "@reduxjs/toolkit";
import {call, put, takeLatest} from "redux-saga/effects";
import {isErrorWithMessage, toAxiosError} from "@helpers/isErrorWithMessage";
import {commentsActions} from "@store/reducers/commentsSlice";
import {Post} from "@models/Post";
import {postsService} from "@services/postsService";
import {AxiosResponse} from "axios";
import {Comment} from "@models/Comment";


export function* getPostComments({payload: id}: PayloadAction<number>) {
    try {
        yield put(commentsActions.setCommentsLoading);
        const commentsResponse: AxiosResponse<Comment[]> = yield call(postsService.getCommentsByPostId, id);
        yield commentsActions.setComments(commentsResponse.data)
    } catch (e) {
        const AxiosError = toAxiosError(e);
        if (isErrorWithMessage(AxiosError.response!.data)) {
            yield put(commentsActions.setCommentsError(AxiosError.response!.data.message));
        }
    }
}

export function* watchGetPostComments() {
    yield takeLatest(commentsActions.getCommentsByPostId, getPostComments);
}
