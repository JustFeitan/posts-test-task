import React, {FC} from 'react';
import {Col, Container, Row, Spinner, Stack} from "react-bootstrap";
import AvatarIcon from "@components/UI/Icons/AvatarIcon";
import {Post} from "@models/Post";
import PostItem from "@components/PostsList/PostItem";

interface PostsListProps {
    posts: Post[];
    isLoading: boolean
}

const PostsList: FC<PostsListProps> = ({posts, isLoading}) => {
    return (
        <>
            {isLoading
                ? <Row className='h-75 d-flex justify-content-center align-items-center'>
                    <Spinner
                        role='status'
                        animation='border'
                        variant='primary'
                    />
                </Row>
                : <Stack gap={3} className='py-2'>
                    {posts.map(post =>
                       <PostItem key={post.id} post={post}/>
                    )}
                </Stack>
            }
        </>
    );
};

export default PostsList;
