import React, { useRef, useState } from 'react';
import '../../../style.scss';
import s from './search.module.scss';
import b from '../../common/button.module.scss';

import DropList from '../../common/dropList/DropList';
import ArtCard from '../../common/artCard/ArtCard';
import CreatorsSlider from '../../common/CreatorsSlider';
import Button from '../../common/Button';
//-------------

//-------components
import Header from '../../common/header/Header';

const arts: string[] = [
    require('../../../images/artCard/art1.jpg'),
    require('../../../images/artCard/art2.jpg'),
    require('../../../images/artCard/art3.jpg'),
    require('../../../images/artCard/art4.jpg'),
];
const avatars: string[] = [
    require('../../../images/small/user1.png'),
    require('../../../images/small/user2.png'),
    require('../../../images/small/user3.png'),
    require('../../../images/small/user4.png'),
];

const Search = () => {
    return (
        <>
            <div className={s.header}>
                <Header auth={false} />
            </div>
            <div className='wrapper'>
                <div className={`${s.search} container`}>
                    <div className={s.search__filters}>
                        <DropList name='Recently added' />
                        <DropList name='Auctions' />
                    </div>
                    <div className={s.search__items}>
                        {Array.from({ length: 4 }).map((_, index) => (
                            <ArtCard artImage={arts[index]} userImage={avatars[index]} key={arts[index]} />
                        ))}
                    </div>
                    <Button name='Show all' style={b.button} />
                </div>
                <div className={s.slider}>
                    <CreatorsSlider />
                </div>
            </div>
        </>
    );
}

export default Search;