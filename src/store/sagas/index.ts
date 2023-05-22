import { all, call, spawn } from "redux-saga/effects";
import {postsSaga} from "@store/sagas/postsSaga";

export default function* rootSaga() {
    const sagas = [postsSaga];

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
