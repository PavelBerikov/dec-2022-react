import React from 'react';
import Albums from "../../Components/Albums/Albums";
import {Outlet} from "react-router-dom";

const AlbumPage = () => {
    return (
        <div>
            <Albums/>
            <Outlet/>
        </div>
    );
};

export default AlbumPage;