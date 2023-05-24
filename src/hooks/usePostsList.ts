import {useAppSelector} from "@hooks/redux/useAppSelector";
import {useActions} from "@hooks/redux/useActions";
import {postsActions} from "@store/reducers/postsSlice";

export const usePostsList = () => {
    const postReducer = useAppSelector(state => state.postsReducer);
    const postActions = useActions(postsActions)
    return {postReducer, postActions}
}
