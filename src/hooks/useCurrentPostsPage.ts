import {useAppSelector} from "@hooks/redux/useAppSelector";
import {currentPageSelector} from "@store/reducers/postsSlice/selectors/currentPageSelector";
import {useActions} from "@hooks/redux/useActions";
import {postsActions} from "@store/reducers/postsSlice";

export const useCurrentPostsPage = () => {
    const currentPage = useAppSelector(currentPageSelector);
    const {setCurrentPage} = useActions(postsActions)
    return {currentPage, setCurrentPage}
}
