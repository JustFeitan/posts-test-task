import {AppStore} from "@store";

export const commentsSelector = (state: Partial<AppStore>) => state?.commentsReducer?.comments
