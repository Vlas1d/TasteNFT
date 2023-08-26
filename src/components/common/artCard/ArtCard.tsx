import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import UserSmall from './UserSmall';
import Sold from '../Sold';
import Timer from '../Timer';
import ArtDropMenu from './ArtDropMenu';

import style from './artCard.module.scss';

interface ArtCardProps {
    artImage: string;
    userImage: string;
    status?: string;
}

const ArtCard = (props: ArtCardProps) => {
    const avatar = props.userImage;
    const location = useLocation();

    const [myArt, setMyArt] = useState(false);

    useEffect(() => {
        if (location.pathname === '/profile') {
            setMyArt(true);
        }
    }, []);

    let artStatus: string;
    if (props.status) {
        artStatus = props.status;
    }
    else {
        artStatus = 'Approved';
    }

    return (
        <>
            <div className={style.artCard}>
                {!myArt ? (<UserSmall image={avatar} name='User Name' />) : <>
                    <div
                        className={style.artCard__status}
                        style={artStatus === 'Approved' ? { color: '#86D084' }
                            : artStatus === 'On moderation' ? { color: '#FFBA09' }
                                : artStatus === 'Declined' ? { color: '#FF5E54' } : {}}
                    >{artStatus}</div>
                </>}

                <img src={props.artImage} alt='art' />
                <div className={style.artCard__data}>
                    <Link to="/artwork"><h3>WFH - art name</h3></Link>
                    <div className={style.artCard__sold}>
                        <span>Sold for:</span>
                        <Sold sold='1,5M' />
                    </div>
                    <div className={style.artCard__endTime}>
                        <span>Ending in:</span>
                        <Timer targetTime={new Date('2023-08-25T18:00:00')} />
                    </div>
                </div>
                {myArt ?
                    (<><div className={style.artCard__drop}>
                        <ArtDropMenu />
                    </div></>) : <></>}
            </div>
        </>
    );
}

export default ArtCard;