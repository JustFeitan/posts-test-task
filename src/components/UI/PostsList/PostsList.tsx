import React, {FC} from 'react';
import {Container, Stack} from "react-bootstrap";
import {Post} from "@models";
import Loader from "@components/UI/Loader";
import PostItem from "@components/UI/PostsList/PostItem";

interface PostsListProps {
    posts: Post[];
    isLoading: boolean
}

const PostsList: FC<PostsListProps> = ({posts, isLoading}) => {
    return (
        <Container className='min-vh-100'>
            {isLoading
                ? <Loader/>
                : <Stack gap={3} className='py-2'>
                    {posts.map(post =>
                        <PostItem key={post.id} post={post}/>
                    )}
                </Stack>
            }
        </Container>
    );
};

export default PostsList;
