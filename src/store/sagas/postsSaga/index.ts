import {watchGetPosts} from "@store/sagas/postsSaga/getPostsSaga";
import {all, call, spawn} from "redux-saga/effects";
import {watchGetPostComments} from "@store/sagas/postsSaga/getPostsCommentsSaga";


export function* postsSaga() {
    const postsSagas = [
        watchGetPosts,
        watchGetPostComments
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
