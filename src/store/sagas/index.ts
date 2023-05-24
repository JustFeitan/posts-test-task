import { all, call, spawn } from "redux-saga/effects";
import {postsSaga} from "@store/sagas/postsSaga";
import {userSaga} from "@store/sagas/userSaga";

export default function* rootSaga() {
    const sagas = [
        postsSaga,
        userSaga,
    ];

    yield all(
        sagas.map((saga) => {
            return spawn(function* () {
                while (true) {
                    try {
                        yield call(saga);
                        break;
                    } catch (e) {
                        console.log(e);
                    }
                }
            });
        })
    );
}
