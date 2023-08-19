import React, { useState } from 'react';

import s from './artDropMenu.module.scss';

import dropMenu from '../../../images/svg/menu-vertical-black.svg';
import dropMenuActive from '../../../images/svg/menu-vertical.svg';

import time_ from '../../../images/svg/time.svg';
import edit_ from '../../../images/svg/edit.svg';
import delete_ from '../../../images/svg/delete.svg';

const ArtDropMenu = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={s.dropMenu}>
            <div className={`${s.dropMenu__button} ${isMenuOpen ? s.openedMenu : s.closedMenu}`} onClick={toggleMenu}>
                {isMenuOpen ?
                    (<img src={dropMenuActive} alt="dropMenu" />) :
                    (<img src={dropMenu} alt="dropMenu" />)}
            </div>
            {isMenuOpen && (
                <div className={s.dropMenu__menu}>
                    <div className={s.dropMenu__menuItem}>
                        <img src={time_} alt="time_" />
                    </div>
                    <div className={s.dropMenu__menuItem}>
                        <img src={edit_} alt="edit_" />
                    </div>
                    <div className={s.dropMenu__menuItem}>
                        <img src={delete_} alt="delete_" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default ArtDropMenu;