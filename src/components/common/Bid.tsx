import React from 'react';

import Sold from './Sold';

import user from '../../images/small/userBid.png';
import link from '../../images/svg/external-link.svg';

import style from './bid.module.scss';

const Bid = () => {
    return (
        <div className={style.bid}>
            <img src={user} alt={user} />
            <div className={style.bid__text}>
                <h3>Bid placed by 0x6FC0...14A4</h3>
                <span>May 19, 2021 at 2:27pm</span>
            </div>
            <div className={style.bid__end}>
                <Sold sold='1,5M' />
                <span>(1308.54$)</span>
                <button><img src={link} alt={link} /></button>
            </div>
        </div>
    );
}

export default Bid;