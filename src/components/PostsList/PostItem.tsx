import React, {FC, useEffect, useState} from 'react';
import {Button, Col, Collapse, Row} from "react-bootstrap";
import AvatarIcon from "@components/UI/Icons/AvatarIcon";
import {Post} from "@models/Post";
import {useAppSelector} from "@hooks/redux/useAppSelector";
import {useActions} from "@hooks/redux/useActions";
import {commentsActions} from "@store/reducers/commentsSlice";

interface PostItemProps {
    post: Post;
}

const PostItem: FC<PostItemProps> = ({post}) => {

    const [showComments, setShowComments] = useState<boolean>(false);
    const {comments, isLoading} = useAppSelector(state => state.commentsReducer);
    const {getCommentsByPostId} = useActions(commentsActions)

    useEffect(() => {
        if(!showComments) return;
        console.log(showComments)
        getCommentsByPostId(post.id)
    }, [showComments])
    console.log(comments)
    return (
        <Row className='border-bottom '>
            <Row className='my-1' xs={"auto"}>
                <Col className='d-flex align-items-center'>
                    <AvatarIcon/>
                </Col>
                <Col>
                    <h2 className='h4'>{post.title}</h2>
                </Col>

            </Row>
            <Row key={post.id}>
                <p>{'\t'}{post.body}</p>
            </Row>
            <Button
                onClick={() => setShowComments(prevState => !prevState)}
                aria-controls="example-collapse-text"
                aria-expanded={showComments}
            >
                Комменатрии
            </Button>
            <Collapse in={showComments}>
                <div id="example-collapse-text">
                    {
                        isLoading
                            ? <div>Loading...</div>
                            : <>
                                {
                                    comments.map(comment =>
                                        <div key={comment.id}>
                                            {comment.id} <br/>
                                            {comment.email} <br/>
                                            {comment.body} <br/>
                                        </div>
                                    )
                                }
                            </>
                    }
                </div>
            </Collapse>
        </Row>
    );
};

export default PostItem;
