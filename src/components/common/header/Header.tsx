import React, { useState, ChangeEvent, useEffect, useRef } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';

import Button from '../Button';

import logo from '../../../images/svg/logo.svg';

import style from './header.module.scss';
import buttonStyle from '../button.module.scss';

interface HeaderProps {
    auth: boolean;
}

const Header = (props: HeaderProps) => {
    const [searchInput, setSearchInput] = useState('');
    const location = useLocation();
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        const searchQuery = new URLSearchParams(location.search).get('q');
        if (searchQuery) {
            setSearchInput(searchQuery);
        }

        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Це забезпечить плавну анімацію прокрутки
        });

        if (location.pathname === '/search' && inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setSearchInput(inputValue);
    };

    return (
        <div className={style.header}>
            <Link to="/">
                <img src={logo} alt='' />
            </Link>
            <div className={style.header__search}>
                {/* <Link to="/search"> */}
                <input
                    type='text'
                    placeholder='Search for ...'
                    value={searchInput}
                    onChange={handleInputChange}
                    ref={inputRef}
                />
                {searchInput && <Navigate to={`/search?q=${searchInput}`} />}
                {/* </Link> */}
            </div>
            <Button name='Connect wallet' style={buttonStyle.button} />
        </div>
    );
}

export default Header;