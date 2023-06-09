import { isErrorWithMessage, toAxiosError } from "@helpers/isErrorWithMessage";
import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { call, put, takeEvery } from "redux-saga/effects";

import { commentsActions } from "@store/reducers/commentsSlice";

import { postsService } from "@services/postsService";

import { Comment } from "@models";

export function* getPostComments({ payload: id }: PayloadAction<number>) {
    try {
        yield put(commentsActions.setCommentsLoading(id));
        const commentsResponse: AxiosResponse<Comment[]> = yield call(
            postsService.getCommentsByPostId,
            id
        );
        yield put(commentsActions.setComments(commentsResponse.data));
    } catch (e) {
        if (isErrorWithMessage(e)) {
            yield put(
                commentsActions.setCommentsError({
                    postId: id,
                    error: e.data.message,
                })
            );
        }
    }
}

export function* watchGetPostComments() {
    yield takeEvery(commentsActions.getCommentsByPostId, getPostComments);
}
