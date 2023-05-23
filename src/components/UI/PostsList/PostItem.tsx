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
                <Col>
                    <h2 className='h5'>{post.title}</h2>
                </Col>
            </Row>
            <Row key={post.id}>
                <p>{post.body}</p>
            </Row>
            {/*Post comments*/}
            <PostComments post={post}/>
        </Row>
    );
};

export default PostItem;
