import React from 'react';
import s from './header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://www.8host.com/blog/wp-content/themes/wp-8host-new/images/logo-8host.png' />
        </header>
    );
};

export default Header;
