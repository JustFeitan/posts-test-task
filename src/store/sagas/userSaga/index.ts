import { all, call, spawn } from "redux-saga/effects";

import { watchGetUser } from "@store/sagas/userSaga/getUserSaga";

export function* userSaga() {
    const userSagas = [watchGetUser];

    yield all(
        userSagas.map((userSaga) => {
            return spawn(function* () {
                while (true) {
                    try {
                        yield call(userSaga);
                        break;
                    } catch (e) {
                        console.log(e);
                    }
                }
            });
        })
    );
}
