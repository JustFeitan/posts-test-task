import React, { FC } from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

import Header from "@components/Header";

import "./Layout.scss";

const Layout: FC = () => {
    return (
        <Container fluid className="p-0">
            <Header />
            <Container className="main-container d-flex">
                <Outlet />
            </Container>
        </Container>
    );
};

export default Layout;
