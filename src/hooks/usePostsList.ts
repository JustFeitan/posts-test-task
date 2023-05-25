import {useAppSelector} from "@hooks/redux/useAppSelector";
import {useActions} from "@hooks/redux/useActions";
import {postsActions} from "@store/reducers/postsSlice";
import {useState} from "react";
import {QueryParams} from "@models";

export const usePostsList = () => {
    const postReducer = useAppSelector(state => state.postsReducer);
    const postActions = useActions(postsActions)
    const [queryParams, setQueryParams] = useState<QueryParams>({
        page: 1
    })

    return {postReducer, postActions, setQueryParams, queryParams}
}
