import React from 'react';
import s from './navigation.module.css';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className={s.nav}>
            <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            <NavLink exact to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
            <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
            <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
        </nav>
    );
};

export default Navigation;
