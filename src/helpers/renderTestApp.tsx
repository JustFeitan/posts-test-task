import React, {JSX} from "react";
import {AppStore, setStore} from "@store";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import AppRouter from "../routing/AppRouter";

interface renderTestAppOptions {
    route?: string;
    initialReduxState?: Partial<AppStore>;
}

export const renderTestApp = (
    component?: JSX.Element,
    params?: renderTestAppOptions
) => {
    const store = setStore(params?.initialReduxState)
    return render(
        <MemoryRouter initialEntries={[params.route || '/']}>
            <Provider store={store}>
                <AppRouter/>
            </Provider>
        </MemoryRouter>
    )
}
