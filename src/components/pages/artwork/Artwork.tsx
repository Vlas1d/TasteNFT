import React, { useState } from 'react';

//-------styles
import '../../../style.scss';
import a from './artwork.module.scss';
import b from '../../common/button.module.scss';
//-------------

//-------components
import Header from '../../common/header/Header';
import CurrentBid from './CurrentBid';
import UserMiddle from '../../common/UserMiddle';
import Bid from '../../common/Bid';
import ArtCard from '../../common/artCard/ArtCard';

//-------images
import art from '../../../images/art.jpg';

import externalLink from '../../../images/svg/external-link.svg';
import share from '../../../images/svg/share.svg';
import menuVertical from '../../../images/svg/menu-vertical.svg';

const arts: string[] = [
    require('../../../images/artCard/art1.jpg'),
    require('../../../images/artCard/art2.jpg'),
    require('../../../images/artCard/art3.jpg'),
    require('../../../images/artCard/art4.jpg'),
    require('../../../images/artCard/art5.jpg'),
    require('../../../images/artCard/art6.jpg'),
    require('../../../images/artCard/art7.jpg'),
    require('../../../images/artCard/art8.jpg'),
];
const avatars: string[] = [
    require('../../../images/small/user1.png'),
    require('../../../images/small/user2.png'),
    require('../../../images/small/user3.png'),
    require('../../../images/small/user4.png'),
    require('../../../images/small/user5.png'),
    require('../../../images/small/user6.png'),
    require('../../../images/small/user7.png'),
    require('../../../images/small/user8.png'),
];

const Artwork = () => {
    return (
        <>
            <div className={a.header}>
                <Header />
            </div>
            <div className='wrapper'>
                <div className={`${a.art} container`}>
                    <img src={art} alt={art} />
                    <div className={a.art__bid}>
                        <CurrentBid />
                    </div>
                </div>
                <div className={`${a.bid} container`}>
                    <div className={a.bid__user}>
                        <UserMiddle name='User Name' />
                        <h1>WFH - art name</h1>
                        <div className={`${a.bid__description} copy`}>
                            <span>Copy:</span> 2 of 10
                        </div>
                        <div className={a.bid__description}>
                            <span>Description: </span>The iconic meme that became a viral Internet sensation and an indispensable part of the gachimuchi music genre. This was taken when I was very young and in my full "performance" attire. That part of me now "lives" on platforms like Twitch, YouTube, and Bilibili (B 站). The iconic meme that became a viral Internet sensation and an indispensable part of the gachimuchi music genre. This was taken when I was very young and in my full "performance" attire. That part of me now "lives" on platforms like Twitch, YouTube, and Bilibili (B 站).
                        </div>
                        <div className={a.bid__links}>
                            <a href='#'><img src={externalLink} alt={externalLink} /></a>
                            <a href='#'><img src={share} alt={share} /></a>
                            <a href='#'><img src={menuVertical} alt={menuVertical} /></a>
                        </div>
                    </div>
                    <div className={a.bid__bids}>
                        <span>Activity</span>
                        <div>
                            {Array.from({ length: 8 }).map(() => (
                                <Bid />
                            ))}
                        </div>
                    </div>
                </div>
                <div className={`${a.arts} container`}>
                    <span>Feature works</span>
                    <div className={a.arts__items}>
                        {Array.from({ length: 8 }).map((_, index) => (
                            <ArtCard artImage={arts[index]} userImage={avatars[index]} key={arts[index]} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Artwork;