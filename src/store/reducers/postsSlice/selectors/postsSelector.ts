import {AppStore} from "@store";

export const postsSelector = (state: Partial<AppStore>) => state?.postsReducer?.posts
