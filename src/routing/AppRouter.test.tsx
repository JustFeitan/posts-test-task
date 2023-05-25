import {renderTestApp} from "@helpers/renderTestApp";
import React from "react";

describe('Routing test', () => {

    test('Redirection to not founded page', () => {
        const {getByTestId} = renderTestApp(null, {
            route: '/asdasdasd12312'
        })
        expect(getByTestId('not-founded-page')).toBeInTheDocument();
    })
})
