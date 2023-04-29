import React from 'react';
import Header from "../Components/Header/Header";
import {Outlet} from "react-router-dom";

const MainLoyouts = () => {
    return (
        <div>
            <Header/>
            <Outlet/>

        </div>
    );
};

export default MainLoyouts;