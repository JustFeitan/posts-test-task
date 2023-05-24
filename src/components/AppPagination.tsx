import React, {FC, useEffect} from 'react';
import {Pagination} from "react-bootstrap";
import {useAppPagination} from "@hooks/useAppPagination";

interface PaginationProps {
    pagesArray: number[];
    onPageClick: (currentPage: number) => void;
}

const AppPagination: FC<PaginationProps> = ({pagesArray, onPageClick,}) => {

    const {currentPage, setCurrentPage, goToPrevPage, goToNextPage} = useAppPagination();

    useEffect(() => {
        onPageClick(currentPage);
    }, [currentPage])
    console.log(pagesArray)
    return (
        <Pagination className='justify-content-around w-75 m-2'>
            {
                !pagesArray && null
            }
            {pagesArray && !!pagesArray.length &&
                <>
                    <Pagination.Prev
                        onClick={() => goToPrevPage()}
                    />
                    {
                        pagesArray.map(pageNumber =>
                            <Pagination.Item
                                onClick={() => setCurrentPage(pageNumber + 1)}
                                key={pageNumber}
                                active={currentPage === pageNumber + 1}

                            >
                                {pageNumber + 1}
                            </Pagination.Item>
                        )
                    }
                    <Pagination.Next
                        onClick={() => goToNextPage()}
                    />
                </>
            }

        </Pagination>

    );
};

export default AppPagination;
