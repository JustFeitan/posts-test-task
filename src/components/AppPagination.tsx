import React, {FC, useEffect} from 'react';
import {Pagination} from "react-bootstrap";
import {useAppPagination} from "@hooks/useAppPagination";

interface PaginationProps {
    isPageLoading?: boolean;
    currentPageActive: number;
    pagesArray: number[];
    onPageClick: (currentPage: number) => void;
}

const AppPagination: FC<PaginationProps> = ({pagesArray, onPageClick, currentPageActive, isPageLoading}) => {

    const {setCurrentPage, goToPrevPage, goToNextPage} = useAppPagination(onPageClick, pagesArray);

    useEffect(() => {
        setCurrentPage(currentPageActive)
    }, [currentPageActive])

    return (
        <Pagination className='justify-content-around w-75 m-2'>
            {!!pagesArray?.length && !isPageLoading
                ? <>
                    <Pagination.Prev
                        onClick={() => goToPrevPage()}
                    />
                    {
                        pagesArray.map(pageNumber =>
                            <Pagination.Item
                                onClick={() => setCurrentPage(pageNumber + 1)}
                                key={pageNumber}
                                active={currentPageActive === pageNumber + 1}

                            >
                                {pageNumber + 1}
                            </Pagination.Item>
                        )
                    }
                    <Pagination.Next
                        onClick={() => goToNextPage()}
                    />
                </>
                : null
            }

        </Pagination>

    );
};

export default AppPagination;
