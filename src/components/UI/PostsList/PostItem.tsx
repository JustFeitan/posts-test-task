import React, {FC} from 'react';
import {Col, Row} from "react-bootstrap";
import AvatarIcon from "@components/UI/Icons/AvatarIcon";
import {Post} from "@models/Post";
import PostComments from "@components/PostComments";

interface PostItemProps {
    post: Post;
}

const PostItem: FC<PostItemProps> = ({post}) => {
    return (
        <Row className='border-bottom '>
            {/*Post module*/}
            <Row className='flex-nowrap my-1' xs={"auto"}>
                <Col className='d-flex align-items-center'>
                    <AvatarIcon/>
                </Col>
                <Col className='d-flex align-items-center'>
                    <h2 className='h5 m-0'>{post.title}</h2>
                </Col>
            </Row>
            <Row key={post.id}>
                <p className='mx-4 my-2'>{post.body}</p>
            </Row>
            {/*Post comments*/}
            <PostComments post={post}/>
        </Row>
    );
};

export default PostItem;
