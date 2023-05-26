import React, { FC, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

import PostsSorting from "@components/Posts/PostsSorting";
import SearchPostsInput from "@components/Posts/SearchPostsInput";
import PostsList from "@components/UI/PostsList/PostsList";
import UserCard from "@components/UI/UserCard";

import { useActions, useAppSelector } from "@hooks/redux";
import { usePostsList } from "@hooks";

import { userActions } from "@store/reducers/userSlice";
import { userSelector } from "@store/reducers/userSlice/selectors/userSelector";

import { SortingOrder } from "@models/SortingOrder";

import { AppRoutes } from "../routing/AppRoutes";

const UserProfile: FC = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const { getUser } = useActions(userActions);
  const { user, isLoading: isUserLoading } = useAppSelector(userSelector);

  const {
    postReducer: { posts, isLoading: isPostsLoading },
    postActions: { getUserPostsByUserId },
    queryParams,
    setQueryParams
  } = usePostsList();

  useEffect(() => {
    getUser(+userId);
  }, []);

  const handleSearchInputChange = (debouncedValue: string) => {
    setQueryParams((prevState) => ({ ...prevState, like: debouncedValue }));
    getUserPostsByUserId({
      userId: +userId,
      queryParams: { ...queryParams, like: debouncedValue }
    });
  };

  const handleSortChange = (sortBy: string, sortingOrder: SortingOrder) => {
    setQueryParams((prevState) => ({
      ...prevState,
      sort: sortBy,
      order: sortingOrder
    }));
    getUserPostsByUserId({
      userId: +userId,
      queryParams: { ...queryParams, sort: sortBy, order: sortingOrder }
    });
  };

  const goBackHandler = () => {
    navigate(AppRoutes.POSTS);
  };

  return (
    <Container className="my-2">
      <Button onClick={goBackHandler} className="btn-dark">
        Назад
      </Button>
      <UserCard
        isUserLoading={isUserLoading}
        user={user}
        userPosts={
          <>
            <h1 className="my-2 h5">{user?.name + " "} Posts:</h1>
            <SearchPostsInput
              onInputChange={handleSearchInputChange}
            />
            <PostsSorting onSortOrderChange={handleSortChange} />
            <PostsList posts={posts} isLoading={isPostsLoading} />
          </>
        }
      />
    </Container>
  );
};

export default UserProfile;
