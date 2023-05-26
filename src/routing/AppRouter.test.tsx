import { renderTestApp } from "@helpers/renderTestApp";
import React from "react";

describe("Routing test", () => {
    test("Redirection to not founded page", () => {
        const { getByText } = renderTestApp(null, {
            route: "/asdasdasd12312",
        });
        expect(getByText("Страница не найдена.")).toBeInTheDocument();
    });

    test("Routing to posts page", () => {
        const { getByTestId } = renderTestApp(null, {
            route: "/",
        });
        expect(getByTestId("posts-page")).toBeInTheDocument();
    });

    test("Routing to about me page", () => {
        const { getByTestId } = renderTestApp(null, {
            route: "/about-me",
        });
        expect(getByTestId("about-me-page")).toBeInTheDocument();
    });
    test("Routing to user details page", () => {
        const { getByTestId } = renderTestApp(null, {
            route: "/users/1",
        });
        expect(getByTestId("user-details-page")).toBeInTheDocument();
    });
});
