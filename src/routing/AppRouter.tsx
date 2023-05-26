import React from "react";
import { Route, Routes } from "react-router-dom";

import AboutMePage from "../pages/AboutMePage";
import Layout from "../pages/Layout/Layout";
import NotFoundPage from "../pages/NotFoundPage";
import PostsPage from "../pages/PostsPage";
import UserDetailsPage from "../pages/UserDetailsPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<PostsPage />} />
                <Route path="about-me" element={<AboutMePage />} />
                <Route path="users/:userId" element={<UserDetailsPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
};

export default AppRouter;
