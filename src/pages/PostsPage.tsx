import React, {FC} from 'react';
import {Container} from "react-bootstrap";
import './Pagination.scss';
import Posts from "@components/Posts/Posts";


const PostsPage: FC = () => {
    return (
        <Container className='w-75'>
            <Posts/>
        </Container>
    );
};

export default PostsPage;
