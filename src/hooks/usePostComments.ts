import {useAppSelector} from "@hooks/redux/useAppSelector";
import {findPostComments} from "@store/reducers/commentsSlice/selectors/findPostComments";
import {useActions} from "@hooks/redux/useActions";
import {commentsActions} from "@store/reducers/commentsSlice";
import {Post} from "@models";
import {useRef} from "react";

export const usePostComments = (post: Post) => {
    const currentPostComments = useAppSelector(state => findPostComments(state, post.id));
    const {getCommentsByPostId} = useActions(commentsActions);
    const intervalId = useRef<ReturnType<typeof setInterval>>()

    const subscribeToPostCommentsUpdate = () => {
        getCommentsByPostId(post.id);
        intervalId.current = setInterval(() => {
            getCommentsByPostId(post.id);
        }, 2000)
    }
    const unSubscribeToPostCommentsUpdate = () => {
        clearInterval(intervalId.current)
    }

    return {currentPostComments, subscribeToPostCommentsUpdate, unSubscribeToPostCommentsUpdate}
}
