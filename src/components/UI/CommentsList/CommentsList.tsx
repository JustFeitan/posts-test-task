import React, { FC } from "react";
import { Stack } from "react-bootstrap";

import CommentsListItem from "@components/UI/CommentsList/CommentsListItem";
import Loader from "@components/UI/Loader";

import { CommentsData } from "@models";

interface CommentsListProps {
    currentPostComments: CommentsData;
}

const CommentsList: FC<CommentsListProps> = ({ currentPostComments }) => {
    return (
        <>
            {currentPostComments?.isLoading ? (
                <Loader />
            ) : (
                <Stack gap={2} className="mx-4 my-2">
                    {currentPostComments?.comments?.map((comment) => (
                        <CommentsListItem key={comment.id} comment={comment} />
                    ))}
                </Stack>
            )}
        </>
    );
};

export default CommentsList;
