import React, {FC} from 'react';
import {Button, Row} from "react-bootstrap";
import {usePostSorting} from "@hooks/usePostSorting";
import {SortingOrder} from "@models/SortingOrder";

interface PostsSortingProps {
    onSortOrderChange: (sortBy: string, sortingOrder: SortingOrder) => void;
}

const PostsSorting: FC<PostsSortingProps> = ({onSortOrderChange}) => {

    const {sortPostsBy, sortingOrder} = usePostSorting(onSortOrderChange)

    const handleSortByTitle = () => {
        sortPostsBy('title')
    }

    return (
        <Row xs='auto' className='d-flex w-100 flex-nowrap align-items-center'>
            <span>Сортировка:</span>
            <Button
                className='w-25 btn-light d-flex justify-content-around'
                onClick={handleSortByTitle}
            >
                Заголовок
                {
                    sortingOrder === "ASC"
                        ? <i className="bi bi-sort-alpha-down"></i>
                        : <i className="bi bi-sort-alpha-up-alt"></i>
                }
            </Button>
        </Row>
    );
};

export default PostsSorting;
