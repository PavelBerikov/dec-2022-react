import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import MainLayout from "./Loyaout/MainLayout";
import PostPage from "./Pages/PostPage";
import CommentPage from "./Pages/CommentPage";
import CatDogPage from "./Pages/CatDogPage";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'posts'}/>}/>
                <Route path={'posts'} element={<PostPage/>}/>
                <Route path={'comments'} element={<CommentPage/>}/>
                <Route path={'cats_dogs'} element={<CatDogPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;