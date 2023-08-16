import React from 'react';

import Sold from '../../common/Sold';
import Timer from '../../common/Timer';
import Button from '../../common/Button';

import style from './currentBid.module.scss';
import buttonStyle from '../../common/button.module.scss';

const CurrentBid = () => {
    return (
        <div className={style.currentBid}>
            <div className={style.currentBid__bid}>
                <span>Current Bid:</span>
                <span><Sold sold='1,5M' /><span>(1308.54$)</span></span>
            </div>
            <div className={style.currentBid__time}>
                <span>Auction ending in:</span>
                <Timer targetTime={new Date('2023-08-15T18:00:00')} />
            </div>
            <div className={style.currentBid__button}>
                <Button name='Place a bid' style={buttonStyle.button} />
            </div>
        </div>
    );
}

export default CurrentBid;