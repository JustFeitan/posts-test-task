import React, {FC, useEffect} from 'react';
import PostsList from "@components/UI/PostsList/PostsList";
import AppPagination from "@components/AppPagination";
import {Container} from "react-bootstrap";
import {usePostsList} from "@hooks/usePostsList";
import {scrollToWindowTop} from "@helpers/scroll/scrollToWindowTop";
import SearchPostsInput from "@components/Posts/SearchPostsInput";
import PostsSorting from "@components/Posts/PostsSorting";
import {SortingOrder} from "@models/SortingOrder";


const Posts: FC = () => {


    const {
        postReducer: {posts, pagesArray, isLoading},
        postActions: {getPostsByTitleSearch},
        queryParams,
        setQueryParams
    } = usePostsList();


    const chooseCurrentPageHandler = (currentPage: number) => {
        setQueryParams(prevState => ({...prevState, page: currentPage}))
        getPostsByTitleSearch({...queryParams, page: currentPage})
        scrollToWindowTop();
    }


    const handleSortChange = (sortBy: string, sortingOrder: SortingOrder) => {
        setQueryParams(prevState => ({...prevState, sort: sortBy, order: sortingOrder, page: 1}))
        getPostsByTitleSearch({...queryParams, sort: sortBy, order: sortingOrder, page: 1})
    }

    const handleSearchInputChange = (debouncedValue: string) => {
        setQueryParams(prevState => ({...prevState, like: debouncedValue}))
        getPostsByTitleSearch({...queryParams, like: debouncedValue})
    }

    return (
        <Container className='d-flex flex-column align-items-center'>
            <h1 className='my-2 h2'>Posts</h1>

            <SearchPostsInput onInputChange={handleSearchInputChange}/>

            <PostsSorting onSortOrderChange={handleSortChange}/>

            <PostsList posts={posts} isLoading={isLoading}/>
            <AppPagination
                isPageLoading={isLoading}
                currentPageActive={queryParams?.page}
                pagesArray={pagesArray}
                onPageClick={chooseCurrentPageHandler}
            />
        </Container>
    );
};

export default Posts;
