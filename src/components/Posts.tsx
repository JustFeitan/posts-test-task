import React, {FC} from 'react';
import PostsList from "@components/UI/PostsList/PostsList";
import AppPagination from "@components/AppPagination";
import {Container} from "react-bootstrap";
import {usePostsList} from "@hooks/usePostsList";
import {scrollToWindowTop} from "@helpers/scroll/scrollToWindowTop";

const Posts: FC = () => {

    const {postReducer: {posts, pagesArray, isLoading}, loadPosts} = usePostsList();

    const chooseCurrentPageHandler = (currentPage: number) => {
        loadPosts({page: currentPage})
        scrollToWindowTop();
    }

    return (
        <Container className='d-flex flex-column justify-content-center align-items-center'>
            <h1 className='my-2 h2'>Posts</h1>
            <PostsList posts={posts} isLoading={isLoading}/>
            <AppPagination
                pagesArray={pagesArray}
                onPageClick={chooseCurrentPageHandler}
            />
        </Container>
    );
};

export default Posts;
