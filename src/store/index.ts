import {configureStore} from "@reduxjs/toolkit";
import {reducers} from "./reducers";


export const setStore = (preloadedState = {}) => {
    return configureStore({
        reducer: reducers,
    })
}

const store = setStore({});
export type AppStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
