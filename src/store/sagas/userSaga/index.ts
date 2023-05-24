import {watchGetUser} from "@store/sagas/userSaga/getUserSaga";
import {all, call, spawn} from "redux-saga/effects";

export function* userSaga() {
    const userSagas = [
        watchGetUser
    ]

    yield all(
        userSagas.map(userSaga => {
            return spawn(function* () {
                while (true) {
                    try {
                        yield call(userSaga);
                        break;
                    } catch (e) {
                        console.log(e);
                    }
                }
            })
        })
    )
}
