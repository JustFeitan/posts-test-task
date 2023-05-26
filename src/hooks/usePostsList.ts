import { useState } from "react";

import { useActions } from "@hooks/redux/useActions";
import { useAppSelector } from "@hooks/redux/useAppSelector";

import { postsActions } from "@store/reducers/postsSlice";

import { QueryParams } from "@models";

export const usePostsList = () => {
    const postReducer = useAppSelector((state) => state.postsReducer);
    const postActions = useActions(postsActions);
    const [queryParams, setQueryParams] = useState<QueryParams>({
        page: 1,
    });

    return { postReducer, postActions, setQueryParams, queryParams };
};
