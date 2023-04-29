import React from 'react';
import {useNavigate} from "react-router-dom";
import css from './Header.module.css'

const Header = () => {
    const navigator = useNavigate();
    return (
        <div className={css.Header}>

            <button onClick={() => navigator('todos')}>Todo</button>
            <button onClick={() => navigator('albums')}>Albums</button>
            <button onClick={() => navigator('comments')}>Comments</button>

        </div>
    );
};

export default Header;