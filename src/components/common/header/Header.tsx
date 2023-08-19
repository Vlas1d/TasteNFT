import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';

import logo from '../../../images/svg/logo.svg';

import style from './header.module.scss';
import buttonStyle from '../button.module.scss';

interface HeaderProps {
    auth: boolean;
}

const Header = (props: HeaderProps) => {
    return (
        <div className={style.header}>
            <Link to="/">
                <img src={logo} alt='' />
            </Link>
            <div className={style.header__search}>
                <input placeholder='Search for ...'></input>
            </div>
            <Button name='Connect wallet' style={buttonStyle.button} />
        </div>
    );
}

export default Header;