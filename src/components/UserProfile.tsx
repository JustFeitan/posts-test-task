import React, {FC, useEffect} from 'react';
import {Container} from "react-bootstrap";
import PostsList from "@components/UI/PostsList/PostsList";
import {usePostsList} from "@hooks/usePostsList";
import {useParams} from "react-router-dom";
import {useActions} from "@hooks/redux/useActions";
import {userActions} from "@store/reducers/userSlice";
import {useAppSelector} from "@hooks/redux/useAppSelector";
import UserCard from "@components/UI/UserCard";


const UserProfile: FC = () => {

    const {userId} = useParams();
    const {getUser} = useActions(userActions);
    const {user, isLoading: isUserLoading} = useAppSelector(state => state.userReducer);

    const {
        postReducer: {posts, isLoading: isPostsLoading, pagesArray},
        postActions: {getUserPostsByUserId}
    } = usePostsList()


    useEffect(() => {
        getUser(+userId);
        getUserPostsByUserId({userId: +userId})
    }, [userId])


    return (
        <Container>
            <UserCard
                isUserLoading={isUserLoading}
                user={user}
                userPosts={
                    <>
                        <h1 className='my-2 h5'>
                            {user?.name + ' '} Posts:
                        </h1>
                        <PostsList posts={posts} isLoading={isPostsLoading}/>
                    </>
                }
            />

        </Container>
    );
};

export default UserProfile;
