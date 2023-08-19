import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, FreeMode, Mousewheel } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/scrollbar';

import s from './creatorsSlider.module.scss';
import './creatorsSlider.scss';

import UserBig from './UserBig';

const users: string[] = [
    require('../../images/userBig1.png'),
    require('../../images/userBig2.png'),
    require('../../images/userBig3.png'),
    require('../../images/userBig4.png'),
    require('../../images/userBig5.png'),
    require('../../images/userBig1.png'),
    require('../../images/userBig2.png'),
    require('../../images/userBig3.png'),
];

const CreatorsSlider = () => {
    return (
        <div className={s.creatorSlider}>

            <Swiper
                slidesPerView={'auto'}
                spaceBetween={17}
                freeMode={true}
                grabCursor={true}
                scrollbar={true}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Scrollbar, FreeMode, Mousewheel]}
                className="creators"
            >
                {Array.from({ length: 8 }).map((_, index) => (
                    <SwiperSlide>
                        <Link to='/profile'>
                            <UserBig image={users[index]} name='User Name' />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
}

export default CreatorsSlider;

/*
<Swiper
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                className='creators'
            >
                { {Array.from({ length: 8 }).map((_, index) => ( }
                <SwiperSlide>
                    { <UserBig image={users[index]} name='User Name' /> }


                    12321883812
                </SwiperSlide>
                <SwiperSlide>
                    {/* <UserBig image={users[index]} name='User Name' /> }


                    1232188381www2
                </SwiperSlide>
                <SwiperSlide>
                    {/* <UserBig image={users[index]} name='User Name' /> }


                    1232188381eeee2
                </SwiperSlide>
                <SwiperSlide>
                    {/* <UserBig image={users[index]} name='User Name' /> }


                    1232188381rrrr2
                </SwiperSlide>
                <SwiperSlide>
                    {/* <UserBig image={users[index]} name='User Name' /> }


                    1232188381tttt2
                </SwiperSlide>
                <SwiperSlide>
                    {/* <UserBig image={users[index]} name='User Name' /> }


                    1232188381yyy2
                </SwiperSlide>
                <SwiperSlide>
                    {/* <UserBig image={users[index]} name='User Name' /> }


                    1232188381uuuu2
                </SwiperSlide>
                <SwiperSlide>
                    {/* <UserBig image={users[index]} name='User Name' /> }


                    123218838iiii12
                </SwiperSlide>
                <SwiperSlide>
                    {/* <UserBig image={users[index]} name='User Name' /> }


                    123218838gggg12
                </SwiperSlide>
                {/* ))} }
            </Swiper>
*/