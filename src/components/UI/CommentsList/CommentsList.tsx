import React, {FC} from 'react';
import Loader from "@components/UI/Loader";
import {CommentsData} from "@models/CommentsData";

interface CommentsListProps {
    currentPostComments: CommentsData
}

const CommentsList:FC<CommentsListProps> = ({currentPostComments}) => {

    return (
        <>
            {
                currentPostComments?.isLoading
                    ? <Loader/>
                    : <>
                        {
                            currentPostComments?.comments?.map(comment =>
                                <div key={comment.id}>
                                    {comment.postId} <br/>
                                    {comment.email} <br/>
                                    {comment.body} <br/>
                                </div>
                            )
                        }
                    </>
            }
        </>
    );
};

export default CommentsList;
