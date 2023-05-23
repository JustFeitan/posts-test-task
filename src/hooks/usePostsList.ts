import {useAppSelector} from "@hooks/redux/useAppSelector";
import {useActions} from "@hooks/redux/useActions";
import {postsActions} from "@store/reducers/postsSlice";

export const usePostsList = () => {
    const postReducer = useAppSelector(state => state.postsReducer);
    const {loadPosts} = useActions(postsActions)
    return {postReducer, loadPosts}
}
