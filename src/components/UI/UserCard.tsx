import React, {FC, JSX} from 'react';
import {User} from "@models";
import Loader from "@components/UI/Loader";
import {Card} from "react-bootstrap";
import AvatarIcon from "@components/UI/Icons/AvatarIcon";
import PostsList from "@components/UI/PostsList/PostsList";

interface UserProfileProps {
    isUserLoading: boolean;
    user: User;
    userPosts: JSX.Element
}

const UserCard: FC<UserProfileProps> = ({user, isUserLoading, userPosts}) => {
    return (
        <Card style={{width: '100%'}} className='p-4 my-3 d-flex align-items-center'>

            {
                isUserLoading
                    ? <Loader/>
                    :
                    <>
                        <Card.Header style={{width: '100%'}} className='d-flex flex-column'>
                            <AvatarIcon size={136}/>
                            <Card.Title className='my-2'>
                                {user?.name}
                                <span className=' mx-2 fs-6 fw-normal'>
                                    @{user?.username}
                                </span>
                            </Card.Title>

                            <Card.Subtitle className='fs-6 fw-normal'>
                                Email: {user?.email}
                            </Card.Subtitle>
                        </Card.Header>
                        <Card.Body style={{width: '100%'}}>
                            {userPosts}
                        </Card.Body>
                    </>
            }
        </Card>
    );
};

export default UserCard;
