import {PayloadAction} from "@reduxjs/toolkit";
import {call, put, takeEvery} from "redux-saga/effects";
import {isErrorWithMessage, toAxiosError} from "@helpers/isErrorWithMessage";
import {commentsActions} from "@store/reducers/commentsSlice";
import {postsService} from "@services/postsService";
import {AxiosResponse} from "axios";
import {Comment} from "@models/Comment";


export function* getPostComments({payload: id}: PayloadAction<number>) {
    try {
        yield put(commentsActions.setCommentsLoading(id));
        const commentsResponse: AxiosResponse<Comment[]> = yield call(postsService.getCommentsByPostId, id);
        yield put(commentsActions.setComments(commentsResponse.data));
    } catch (e) {
        const AxiosError = toAxiosError(e);
        if (isErrorWithMessage(AxiosError.response!.data)) {

            yield put(commentsActions.setCommentsError({
                postId: id,
                error: AxiosError.response!.data.message
            }));
        }
    }
}

export function* watchGetPostComments() {
    yield takeEvery(commentsActions.getCommentsByPostId, getPostComments);
}
