import {AppStore} from "@store";

export const currentPageSelector = (state: Partial<AppStore>) => state?.postsReducer?.currentPage
