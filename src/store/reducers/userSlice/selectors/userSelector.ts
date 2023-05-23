import {AppStore} from "@store";

export const userSelector = (state: Partial<AppStore>) => state.userReducer.user
