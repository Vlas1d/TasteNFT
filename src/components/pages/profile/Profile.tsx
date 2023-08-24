import React, { useState } from 'react';

//-------styles
import '../../../style.scss';
import p from './profile.module.scss';
import b from '../../common/button.module.scss';
//-------------

//-------components
import Header from '../../common/header/Header';
import UserMiddle from '../../common/UserMiddle';
import ArtCard from '../../common/artCard/ArtCard';

//-------images
import externalLink from '../../../images/svg/external-link.svg';
import share from '../../../images/svg/share.svg';
import menuVertical from '../../../images/svg/menu-vertical.svg';

import twitch from '../../../images/svg/twitch.svg';
import insta from '../../../images/svg/instagram.svg';
import twitter from '../../../images/svg/twitter.svg';
import onlyf from '../../../images/svg/onlyfans.svg';

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

const Profile = () => {
    return (
        <>
            <div className={p.header}>
                <Header auth={true} />
            </div>
            <div className='wrapper'>
                <div className={`${p.user} container`}>
                    <div className={p.user__data}>
                        <UserMiddle name='User Name' />
                        <div className={p.user__followers}>
                            <span>234</span> Followers
                        </div>
                        <div className={p.user__following}>
                            <span>15</span> Following
                        </div>
                        <div className={p.user__links}>
                            <a href='#'><img src={externalLink} alt={externalLink} /></a>
                            <a href='#'><img src={share} alt={share} /></a>
                            <a href='#'><img src={menuVertical} alt={menuVertical} /></a>
                        </div>
                    </div>
                    <div className={p.user__social}>
                        <a href='#'><img src={twitch} alt={twitch} />Twitch</a>
                        <a href='#'><img src={insta} alt={insta} />Instagram</a>
                        <a href='#'><img src={twitter} alt={twitter} />Twitter</a>
                        <a href='#'><img src={onlyf} alt={onlyf} />OnlyFans</a>
                    </div>
                    <div className={p.user__description}>
                        <span>Description: </span>The iconic meme that became a viral Internet sensation and an indispensable part of the gachimuchi music genre. This was taken when I was very young and in my full "performance" attire. That part of me now "lives" on platforms like Twitch, YouTube, VK (ВКонта́кте), and Bilibili (B 站). The iconic meme that became a viral Internet sensation and an indispensable part of the gachimuchi music genre. This was taken when I was very young and in my full "performance" attire. That part of me now "lives" on platforms like Twitch, YouTube, and Bilibili (B 站).
                    </div>
                </div>
                <div className={`${p.arts} container`}>
                    <div className={p.arts__filter}>
                        <a className='selected' href=''>Created</a>
                        <a href='#'>Collected</a>
                        <a href='#'>Bids</a>
                    </div>
                    <div className={p.arts__items}>
                        {Array.from({ length: 8 }).map((_, index) => (
                            <ArtCard artImage={arts[index]} userImage={avatars[index]} key={arts[index]} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;