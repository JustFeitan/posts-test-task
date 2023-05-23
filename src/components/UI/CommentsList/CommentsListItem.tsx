import React, {FC} from 'react';
import {Comment} from "@models/Comment";

interface CommentsListItem {
    comment: Comment;
}
const CommentsListItem: FC<CommentsListItem> = ({comment}) => {
    return (
        <div key={comment.id}>
            {comment.postId} <br/>
            {comment.email} <br/>
            {comment.body} <br/>
        </div>
    );
};

export default CommentsListItem;
