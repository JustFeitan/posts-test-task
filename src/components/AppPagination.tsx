import React, {FC} from 'react';
import {Pagination} from "react-bootstrap";

interface PaginationProps {
    pagesArray: number[];
    onPageClick: (pageNumber: number) => void;
    currentPage: number;
}

const AppPagination: FC<PaginationProps> = ({pagesArray, onPageClick, currentPage}) => {
    return (
        <>
            {pagesArray && !!pagesArray.length &&
                <Pagination className='justify-content-around w-75'>
                    <Pagination.Prev/>
                    {
                        pagesArray.map(pageNumber =>
                            <Pagination.Item
                                onClick={() => onPageClick(pageNumber)}
                                key={pageNumber}
                                active={currentPage === pageNumber}

                            >
                                {pageNumber}
                            </Pagination.Item>
                        )
                    }
                    <Pagination.Next/>
                </Pagination>
            }
        </>
    );
};

export default AppPagination;
