import {takeLatest} from "redux-saga/effects";
import {userActions} from "@store/reducers/userSlice";

export function* getUser() {

}

export function* watchGetUser() {
    yield takeLatest(userActions.getUser, getUser)
}
