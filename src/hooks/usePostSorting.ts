import { useEffect, useState } from "react";

import { SortingOrder } from "@models/SortingOrder";

export const usePostSorting = (
    onSortOrderChange: (sortBy: string, sortingOrder: SortingOrder) => void
) => {
    const [sortingOrder, setSortingOrder] = useState<SortingOrder | null>(null);
    const [sortBy, setSortBy] = useState<string | null>(null);

    useEffect(() => {
        onSortOrderChange(sortBy, sortingOrder);
        //postActions.getPostsByTitleSearch({...queryParams, sort: sortBy, order: sortingOrder, page: 1})
    }, [sortingOrder]);

    const sortPostsBy = (sortBy: string) => {
        setSortBy(sortBy);
        console.log("work");
        console.log(sortingOrder);
        if (sortingOrder === "ASC") {
            setSortingOrder("DESC");
        } else {
            setSortingOrder("ASC");
        }
    };

    return { sortBy, sortingOrder, sortPostsBy };
};
