import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootSaga from "@store/sagas";

import { reducers } from "./reducers";

const sagaMiddleware = createSagaMiddleware();

export const setStore = (preloadedState = {}) => {
    return configureStore({
        reducer: reducers,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware().concat(sagaMiddleware);
        },
    });
};

export const store = setStore({});
sagaMiddleware.run(rootSaga);
export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
