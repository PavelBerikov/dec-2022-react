import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import MainLoyouts from "./Loyouts/MainLoyouts";
import TodoPage from "./Pages/TodoPage/TodoPage";
import AlbumPage from "./Pages/AlbumPage/AlbumPage";
import CommentPage from "./Pages/CommentPage/CommentPage";
import Post from "./Components/Post/Post";

const App = () => {
    return (
        <Routes>
          <Route path={'/'} element={<MainLoyouts/>}>
            <Route index element={<Navigate to={'todos'}/>}/>
            <Route path={'todos'} element={<TodoPage/>}/>
            <Route path={'albums'} element={<AlbumPage/>}/>
              <Route path={'comments'} element={<CommentPage/>}>
                  <Route path={':postId'} element={<Post/>}/>
              </Route>
          </Route>

        </Routes>
    );
};

export default App;