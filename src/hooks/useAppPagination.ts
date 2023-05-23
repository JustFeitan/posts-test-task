import {useEffect, useState} from "react";

export const useAppPagination = (initialPage?: number) => {
    const [currentPage, setCurrentPage] = useState<number>(initialPage || 1);

    const goToNextPage = () => {
        setCurrentPage(prevState => prevState + 1)
    }

    const goToPrevPage = () => {
        setCurrentPage(prevState => prevState + 1)
    }

    return {currentPage, setCurrentPage, goToPrevPage, goToNextPage}
}
