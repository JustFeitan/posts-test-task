import React, {FC} from 'react';
import {Container} from "react-bootstrap";
import UserProfile from "@components/UserProfile";

const UserDetailsPage: FC = () => {

    return (
        <Container data-testid='user-details-page' className='w-75 d-flex justify-content-center'>
            <UserProfile/>
        </Container>
    );
};

export default UserDetailsPage;
