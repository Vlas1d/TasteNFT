import React, { useRef, useState } from 'react';
import '../../../style.scss';
import s from './search.module.scss';
import b from '../../common/button.module.scss';
//-------------

//-------components
import Header from '../../common/header/Header';

const Search = () => {
    return (
        <>
            <div className={s.header}>
                <Header auth={false} />
            </div>
        </>
    );
}

export default Search;