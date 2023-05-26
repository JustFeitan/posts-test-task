import React, { FC } from "react";
import { Container } from "react-bootstrap";

import Posts from "@components/Posts/Posts";

const PostsPage: FC = () => {
    return (
        <Container data-testid="posts-page" className="w-75">
            <Posts />
        </Container>
    );
};

export default PostsPage;
