import React from 'react';

import UserSmall from './UserSmall';
import Sold from '../Sold';
import Timer from '../Timer';

import style from './artCard.module.scss';

interface ArtCardProps {
    artImage: string;
    userImage: string;
}

const ArtCard = (props: ArtCardProps) => {
    const avatar = props.userImage;

    return (
        <div className={style.artCard}>
            <UserSmall image={avatar} name='User Name' />
            <img src={props.artImage} alt='art' />
            <div className={style.artCard__data}>
                <h3>WFH - art name</h3>
                <div className={style.artCard__sold}>
                    <span>Sold for:</span>
                    <Sold sold='1,5M' />
                </div>
                <div className={style.artCard__endTime}>
                    <span>Ending in:</span>
                    <Timer targetTime={new Date('2023-08-15T18:00:00')} />
                </div>
            </div>
        </div>
    );
}

export default ArtCard;