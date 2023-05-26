import { useEffect, useState } from "react";

export const useAppPagination = (
    onPageClick: (currentPage: number) => void,
    pagesArray: number[]
) => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const goToNextPage = () => {
        if (pagesArray.length === currentPage) {
            setCurrentPage(1);
            return;
        }
        setCurrentPage((prevState) => prevState + 1);
    };

    const goToPrevPage = () => {
        if (currentPage === 1) {
            setCurrentPage(pagesArray.length);
            return;
        }
        setCurrentPage((prevState) => prevState - 1);
    };

    useEffect(() => {
        onPageClick(currentPage);
    }, [currentPage]);

    return { currentPage, setCurrentPage, goToPrevPage, goToNextPage };
};
