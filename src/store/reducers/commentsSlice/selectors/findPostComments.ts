import {AppStore} from "@store";

export const findPostComments = (state: Partial<AppStore>, postId: number) =>
    state?.commentsReducer?.commentsData?.find(commentData => commentData.postId === postId) || null
