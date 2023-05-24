import React, {FC} from 'react';
import {Container} from "react-bootstrap";
import UserProfile from "@components/UserProfile";

const UserDetailsPage: FC = () => {

    return (
        <Container className='w-75 d-flex justify-content-center align-items-center'>
            <UserProfile/>
        </Container>
    );
};

export default UserDetailsPage;
