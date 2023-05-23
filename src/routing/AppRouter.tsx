import React from 'react';
import {Route, Routes} from "react-router-dom";
import PostsPage from "../pages/PostsPage";
import AboutMePage from "../pages/AboutMePage";
import PostDetailPage from "../pages/PostDetailPage";
import Layout from "../pages/Layout/Layout";

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<PostsPage/>}/>
                <Route path='about-me' element={<AboutMePage/>}/>
                <Route path='my-posts' element={<PostDetailPage/>}/>
            </Route>
        </Routes>
    );
};

export default AppRouter;
