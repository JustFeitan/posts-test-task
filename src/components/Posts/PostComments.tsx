import React, { FC, useEffect, useState } from "react";
import { Button, Collapse } from "react-bootstrap";

import CommentsList from "@components/UI/CommentsList/CommentsList";

import { usePostComments } from "@hooks/usePostComments";

import { Post } from "@models";

interface PostCommentsProps {
    post: Post;
}

const PostComments: FC<PostCommentsProps> = ({ post }) => {
    const [showComments, setShowComments] = useState<boolean>(false);
    const {
        currentPostComments,
        subscribeToPostCommentsUpdate,
        unSubscribeToPostCommentsUpdate,
    } = usePostComments(post);

    //subscribe on comments update
    useEffect(() => {
        if (!showComments) return;
        subscribeToPostCommentsUpdate();

        return () => {
            unSubscribeToPostCommentsUpdate();
        };
    }, [showComments]);

    return (
        <>
            <Button
                onClick={() => setShowComments((prevState) => !prevState)}
                aria-controls="example-collapse-text"
                aria-expanded={showComments}
                variant="light"
                className="dropdown-toggle w-auto m-2"
            >
                Комменатрии
            </Button>
            <Collapse in={showComments}>
                <div id="example-collapse-text">
                    <CommentsList currentPostComments={currentPostComments} />
                </div>
            </Collapse>
        </>
    );
};

export default PostComments;
