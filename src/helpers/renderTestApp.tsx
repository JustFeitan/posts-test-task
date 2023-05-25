/**@jest-environment jsdom
 *
 */
import React, {JSX} from "react";
import {AppStore, setStore} from "@store";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import AppRouter from "../routing/AppRouter";
import {render} from "@testing-library/react";

interface renderTestAppOptions {
    route?: string;
    initialReduxState?: Partial<AppStore>;
}

export const renderTestApp = (
    component?: JSX.Element | null,
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
