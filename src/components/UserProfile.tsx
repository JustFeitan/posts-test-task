import React, {FC, useEffect} from 'react';
import {Button, Container} from "react-bootstrap";
import PostsList from "@components/UI/PostsList/PostsList";
import {usePostsList} from "@hooks/usePostsList";
import {useNavigate, useParams} from "react-router-dom";
import {useActions} from "@hooks/redux/useActions";
import {userActions} from "@store/reducers/userSlice";
import {useAppSelector} from "@hooks/redux/useAppSelector";
import UserCard from "@components/UI/UserCard";
import {AppRoutes} from "../routing/AppRoutes";
import PostsSorting from "@components/Posts/PostsSorting";
import SearchPostsInput from "@components/Posts/SearchPostsInput";
import {SortingOrder} from "@models/SortingOrder";


const UserProfile: FC = () => {

    const {userId} = useParams();
    const navigate = useNavigate()

    const {getUser} = useActions(userActions);
    const {user, isLoading: isUserLoading} = useAppSelector(state => state.userReducer);

    const {
        postReducer: {posts, isLoading: isPostsLoading,},
        postActions: {getUserPostsByUserId},
        queryParams,
        setQueryParams
    } = usePostsList()

    console.log(isPostsLoading);
    useEffect(() => {

        getUser(+userId);
    }, [])

    const handleSearchInputChange = (debouncedValue: string) => {
        setQueryParams(prevState => ({...prevState, like: debouncedValue}))
        getUserPostsByUserId({
            userId: +userId,
            queryParams: {...queryParams, like: debouncedValue}
        })
    }

    const handleSortChange = (sortBy: string, sortingOrder: SortingOrder) => {
        setQueryParams(prevState => ({...prevState, sort: sortBy, order: sortingOrder}))
        getUserPostsByUserId({
            userId: +userId,
            queryParams: {...queryParams, sort: sortBy, order: sortingOrder}
        })
    }

    const goBackHandler = () => {
        navigate(AppRoutes.POSTS)
    }

    return (
        <Container className='my-2'>
            <Button onClick={goBackHandler} className='btn-dark'>
                Назад
            </Button>
            <UserCard
                isUserLoading={isUserLoading}
                user={user}
                userPosts={
                    <>
                        <h1 className='my-2 h5'>
                            {user?.name + ' '} Posts:
                        </h1>
                        <SearchPostsInput onInputChange={handleSearchInputChange}/>
                        <PostsSorting onSortOrderChange={handleSortChange}/>
                        <PostsList posts={posts} isLoading={isPostsLoading}/>
                    </>
                }
            />

        </Container>
    );
};

export default UserProfile;
