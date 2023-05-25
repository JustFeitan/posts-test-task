import React, {FC, JSX} from 'react';
import {User} from "@models";
import Loader from "@components/UI/Loader";
import {Card} from "react-bootstrap";
import AvatarIcon from "@components/UI/Icons/AvatarIcon";

interface UserProfileProps {
    isUserLoading: boolean;
    user: User;
    userPosts: JSX.Element
}

const UserCard: FC<UserProfileProps> = ({user, isUserLoading, userPosts}) => {

    if (isUserLoading && !user) {
        return <Loader/>
    }
    console.log(isUserLoading)
    return (
        <Card style={{width: '100%'}} className='p-4 my-3 d-flex align-items-center'>
            {
                isUserLoading
                    ? <Loader/>
                    : <>
                        {
                            user && user.name
                                ? <>
                                    <Card.Header style={{width: '100%'}} className='d-flex flex-column'>
                                        <AvatarIcon size={136}/>
                                        <Card.Title className='my-2'>
                                            {user?.name}
                                            <span
                                                className=' mx-2 fs-6 fw-normal'
                                            >
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
                                : <h3 className='fs-4 text-center'>Пользователь не найден</h3>
                        }

                    </>
            }
        </Card>
    );
};

export default UserCard;
