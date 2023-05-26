import React, { FC, useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

import ProfileHeader from "@components/UI/ProfileHeader";

import { AppRoutes } from "../routing/AppRoutes";

const Header: FC = () => {
    const [showOffCanvas, setShowOffCanvas] = useState<boolean>(false);
    const handleCloseOffCanvas = () => setShowOffCanvas(false);
    const handleShowOffCanvas = () => setShowOffCanvas(true);

    return (
        <Container fluid className="bg-light p-4">
            <Navbar bg="light" expand={false} className="mb-3">
                <Container fluid>
                    <Navbar.Brand
                        className="fs-2"
                        as={Link}
                        to={AppRoutes.POSTS}
                    >
                        Posts test task
                    </Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls={`offcanvasNavbar-expand-false`}
                        onClick={handleShowOffCanvas}
                    />
                    <Navbar.Offcanvas
                        show={showOffCanvas}
                        onHide={handleCloseOffCanvas}
                        id={`offcanvasNavbar-expand-false`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-false`}
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title
                                id={`offcanvasNavbarLabel-expand-false`}
                            >
                                <ProfileHeader />
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link
                                    as={Link}
                                    to={AppRoutes.POSTS}
                                    onClick={handleCloseOffCanvas}
                                    className="btn btn-light my-1"
                                >
                                    Список постов
                                </Nav.Link>
                                <Nav.Link
                                    onClick={handleCloseOffCanvas}
                                    as={Link}
                                    to={AppRoutes.ABOUT_ME}
                                    className="btn btn-light my-1"
                                >
                                    Обо мне
                                </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;
