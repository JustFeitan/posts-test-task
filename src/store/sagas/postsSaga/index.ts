import {all, call, spawn} from "redux-saga/effects";
import {watchGetPostComments} from "@store/sagas/postsSaga/getPostsCommentsSaga";
import {watchGetUserPostsByUserIdSaga} from "@store/sagas/postsSaga/getUserPostsByUserIdSaga";
import {watchGetPostsByTitleSearchSaga} from "@store/sagas/postsSaga/getPostsByTitleSearchSaga";


export function* postsSaga() {
    const postsSagas = [
        watchGetPostComments,
        watchGetUserPostsByUserIdSaga,
        watchGetPostsByTitleSearchSaga
    ]

    yield all(
        postsSagas.map(postSaga => {
            return spawn(function* (){
                while (true) {
                    try {
                        yield call(postSaga);
                        break;
                    } catch (e) {
                        console.log(e)
                    }

                }
            })
        })
    )
}
