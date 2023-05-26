import React, { FC } from "react";
import { Container } from "react-bootstrap";

import MyProfileCard from "@components/UI/MyProfileCard";

const AboutMePage: FC = () => {
    return (
        <Container
            data-testid="about-me-page"
            className="d-flex justify-content-center align-items-center"
        >
            <MyProfileCard />
        </Container>
    );
};

export default AboutMePage;
