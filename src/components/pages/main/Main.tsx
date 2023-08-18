import React, { useState } from 'react';

//-------styles
import '../../../style.scss';
import m from './main.module.scss';
import b from '../../common/button.module.scss';
//-------------

//-------components
import Header from '../../common/header/Header';
import UserMiddle from '../../common/UserMiddle';
import ArtCard from '../../common/artCard/ArtCard';
import UserBig from '../../common/UserBig';
import Bid from '../../common/Bid';
import CurrentBid from '../artwork/CurrentBid';
import MainSlider from './MainSlider';
import Sold from '../../common/Sold';
import Button from '../../common/Button';
import DropList from '../../common/dropList/DropList';
import CreatorsSlider from '../../common/CreatorsSlider';
//------------------

//-------images
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
]
import bigAvatar from '../../../images/userBig1.png';
//-------------

const Main = () => {
    return (
        <>
            <div className={m.header}>
                <Header />
            </div>
            <div className='wrapper'>
                <div className={`${m.main} container`}>
                    <div className={m.main__info}>
                        <UserMiddle name='User Name' />
                        <h1>WFH - art name</h1>
                        <div className={m.main__description}>
                            <span>Description: </span> The iconic meme that became a viral Internet sensation and an indispensable part of the gachimuchi music genre. This was taken when I was very young and in my full "performance" attire. That part of me now "lives" on platforms like Twitch, YouTube, and Bilibili (B 站).
                        </div>
                        <div className={m.main__panel}>
                            <span>Sold for: </span><Sold sold='1,5M' />
                            <Button name='View' style={b.button} />
                            <div className={m.main__links}>
                                <a href='#'><img src={externalLink} alt={externalLink} /></a>
                                <a href='#'><img src={share} alt={share} /></a>
                                <a href='#'><img src={menuVertical} alt={menuVertical} /></a>
                            </div>
                        </div>
                    </div>
                    <div className={m.main__slider}>
                        <MainSlider />
                    </div>
                </div>
                <div className={`${m.arts} container`}>
                    <div className={m.arts__filters}>
                        <DropList name='Recently added' />
                        <DropList name='Auctions' />
                    </div>
                    <div className={m.arts__items}>
                        {Array.from({ length: 8 }).map((_, index) => (
                            <ArtCard artImage={arts[index]} userImage={avatars[index]} key={arts[index]} />
                        ))}
                    </div>
                </div>
                <div className={`${m.creators} container`}>
                    <h1>Featured creators</h1>
                    <CreatorsSlider />
                </div>
            </div>
        </>
    );
}

export default Main;