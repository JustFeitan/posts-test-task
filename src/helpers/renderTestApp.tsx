/**@jest-environment jsdom
 *
 */
import { render } from "@testing-library/react";
import React, { JSX } from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

import { AppStore, setStore } from "@store";

import AppRouter from "../routing/AppRouter";

interface renderTestAppOptions {
    route?: string;
    initialReduxState?: Partial<AppStore>;
}

export const renderTestApp = (
    component?: JSX.Element | null,
    params?: renderTestAppOptions
) => {
    const store = setStore(params?.initialReduxState);
    return render(
        <MemoryRouter initialEntries={[params.route || "/"]}>
            <Provider store={store}>
                <AppRouter />
            </Provider>
        </MemoryRouter>
    );
};
