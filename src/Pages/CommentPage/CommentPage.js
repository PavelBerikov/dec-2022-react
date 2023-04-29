import React from 'react';
import Comments from "../../Components/Comments/Comments";
import {Outlet} from "react-router-dom";

const CommentPage = () => {
    return (
        <div>
            <Outlet/>
            <hr/>
            <Comments/>
        </div>
    );
};

export default CommentPage;