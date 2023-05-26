import React, { FC } from "react";
import { Row } from "react-bootstrap";

import { Comment } from "@models";

interface CommentsListItem {
    comment: Comment;
}
const CommentsListItem: FC<CommentsListItem> = ({ comment }) => {
    return (
        <Row>
            <Row>
                <span className="fw-semibold">{comment.email}</span>
            </Row>
            <Row>
                <p> cl{comment.body}</p>
            </Row>
        </Row>
    );
};

export default CommentsListItem;
