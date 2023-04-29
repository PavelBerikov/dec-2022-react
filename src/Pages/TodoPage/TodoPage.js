import React from 'react';
import Todos from "../../Components/Todos/Todos";
import {Outlet} from "react-router-dom";

const TodoPage = () => {
    return (
        <div>
            <Todos/>
            <Outlet/>
            
        </div>
    );
};

export default TodoPage;