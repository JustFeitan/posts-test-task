import React, {FC} from 'react';
import {Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas} from "react-bootstrap";

const Header: FC = () => {
    return (
        <Container fluid className='bg-light p-4'>
                    <Navbar bg="light" expand={false} className="mb-3">
                        <Container fluid>
                            <Navbar.Brand href="/">Posts test task</Navbar.Brand>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-false`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-false`}
                                placement="start"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                                        Offcanvas
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-end flex-grow-1 pe-3">
                                        <Nav.Link href="about-me">Home</Nav.Link>
                                        <Nav.Link href="my-posts">Link</Nav.Link>
                                    </Nav>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
        </Container>
    );
};

export default Header;
