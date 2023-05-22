import React, {FC, useEffect, useState} from 'react';
import {useAppSelector} from "@hooks/redux/useAppSelector";
import {postsActions} from "@store/reducers/postsSlice";
import {useActions} from "@hooks/redux/useActions";
import {Container} from "react-bootstrap";
import './Pagination.scss';
import AppPagination from "@components/AppPagination";
import PostsList from "@components/PostsList/PostsList";

const PostsPage: FC = () => {

    const [currentPage, setCurrentPage] = useState<number>(1);
    const {posts, pagesArray, isLoading} = useAppSelector(state => state.postsReducer);
    const {loadPosts} = useActions(postsActions)


    useEffect(() => {
        loadPosts({page: currentPage})
    }, [currentPage])

    const chooseCurrentPageHandler = (pageNumber: number) => {
        setCurrentPage(pageNumber)
    }

    return (
        <Container className='h-100 w-75 d-flex flex-column justify-content-center align-items-center'>
            <h1 className='my-2'>Posts</h1>
            <PostsList posts={posts} isLoading={isLoading}/>
            <AppPagination
                pagesArray={pagesArray}
                onPageClick={chooseCurrentPageHandler}
                currentPage={currentPage}
            />
        </Container>
    );
};

export default PostsPage;
