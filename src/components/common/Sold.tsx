import React from 'react';

import logo from '../../images/svg/smallLogo.svg';

import style from './sold.module.scss';

interface SoldProps {
    sold: string;
}

const Sold = (props: SoldProps) => {
    return (
        <div className={style.sold}>
            <img src={logo} alt='logo' />
            <span>{props.sold}</span>
        </div>
    );
}

export default Sold;