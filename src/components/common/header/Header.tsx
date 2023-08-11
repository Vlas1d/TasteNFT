import React from 'react';

import Button from '../Button';

import logo from '../../../images/svg/logo.svg';

import style from './header.module.scss';
import buttonStyle from '../button.module.scss';

const Header = () => {
    return (
        <div className={style.header}>
            <img src={logo} alt='' />
            <div className={style.header__search}>
                <input placeholder='Search for ...'></input>
            </div>
            <Button name='Connect wallet' style={buttonStyle.button} />
        </div>
    );
}

export default Header;