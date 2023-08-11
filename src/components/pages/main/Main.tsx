import React, { useState } from 'react';

import Header from '../../common/header/Header';
import UserMiddle from '../../common/UserMiddle';
import ArtCard from '../../common/artCard/ArtCard';
import UserBig from '../../common/UserBig';

import avatar from '../../../images/small/user1.png';
import art from '../../../images/artCard/art1.jpg';
import bigAvatar from '../../../images/userBig1.png';

const Main = () => {
    return (
        <>
            <Header />
            <UserMiddle name='User Name' />
            <ArtCard artImage={art} userImage={avatar} />
            <UserBig image={bigAvatar} name='User Name' />
        </>
    );
}

export default Main;