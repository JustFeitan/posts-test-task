import React, {FC} from 'react';
import {Outlet} from "react-router-dom";
import {Container} from "react-bootstrap";
import Header from "../components/Header";

const Layout: FC = () => {
    return (
        <Container fluid className='p-0'>
            <Header/>
            <Container>
                <Outlet/>
            </Container>
        </Container>
    );
};

export default Layout;
