import { AxiosResponse } from "axios";
import { Action } from "redux";
import { runSaga } from "redux-saga";

import { userActions } from "@store/reducers/userSlice";
import { getUser } from "@store/sagas/userSaga/getUserSaga";

import { userService } from "@services";

import { User } from "@models";

import clearAllMocks = jest.clearAllMocks;
import mock = jest.mock;

const axios = require("axios");

jest.mock("axios");

describe("getUserSaga tests", () => {
    const dispatched: Action[] = [];
    let response: Partial<AxiosResponse<User[]>>;
    let responseWithError: Partial<AxiosResponse<Error>>;
    let fakeStore: any;

    beforeAll(() => {
        fakeStore = {
            dispatch: (action: Action) => dispatched.push(action),
        };
        responseWithError = {
            data: {
                name: "test error",
                message: "error message",
            },
        };
        response = {
            data: [
                {
                    id: 1,
                    name: "Leanne Graham",
                    username: "Bret",
                    email: "Sincere@april.biz",
                    address: {
                        street: "Kulas Light",
                        suite: "Apt. 556",
                        city: "Gwenborough",
                        zipcode: "92998-3874",
                        geo: {
                            lat: "-37.3159",
                            lng: "81.1496",
                        },
                    },
                    phone: "1-770-736-8031 x56442",
                    website: "hildegard.org",
                    company: {
                        name: "Romaguera-Crona",
                        catchPhrase: "Multi-layered client-server neural-net",
                        bs: "harness real-time e-markets",
                    },
                },
            ],
        };
    });

    test("test success case", async () => {
        const type = userActions.getUser.type;
        const spy = jest.spyOn(userService, "getUser");
        spy.mockReturnValue(Promise.resolve(response as AxiosResponse<User[]>));

        await runSaga(fakeStore, getUser, {
            type: type,
            payload: 1,
        }).toPromise();
        expect(spy).toBeCalledTimes(1);
        expect(dispatched.length).toEqual(2);
        expect(dispatched).toContainEqual(userActions.setUserLoading());
        expect(dispatched).toContainEqual(
            userActions.setUser(...response.data)
        );
    });

    test("test error case", async () => {
        const type = userActions.getUser.type;
        const spy = jest.spyOn(userService, "getUser");
        spy.mockReturnValue(
            Promise.reject(responseWithError as AxiosResponse<Error>)
        );

        await runSaga(fakeStore, getUser, {
            type: type,
            payload: 1,
        }).toPromise();
        expect(spy).toBeCalledTimes(1);
        console.log(dispatched);
        expect(dispatched.length).toEqual(2);
        expect(dispatched).toContainEqual(userActions.setUserLoading());
        expect(dispatched).toContainEqual(
            userActions.setUserError(responseWithError.data.message)
        );
    });
    afterEach(() => {
        clearAllMocks();
        dispatched.length = 0;
    });
});
