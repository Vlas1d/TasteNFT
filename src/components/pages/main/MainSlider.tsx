import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/effect-cards';
import 'swiper/scss/pagination';

import slide1 from '../../../images/slide1.png'
import slide2 from '../../../images/slide2.png'
import slide3 from '../../../images/slide3.png'
import slide4 from '../../../images/slide4.png'

import style from './mainSlider.module.scss';
import './mainSlider.scss';

// import required modules
import { EffectCards, Pagination } from 'swiper/modules';


const MainSlider = () => {
    return (
        <div>
            <Swiper
                grabCursor={true}
                effect={'cards'}
                slidesPerView={'auto'}
                centeredSlides={true}

                cardsEffect={{
                    slideShadows: false, // Вимикаємо тіні на слайдах
                    rotate: false,
                    perSlideOffset: 29,
                }}

                pagination={{
                    clickable: true,
                }}

                modules={[EffectCards, Pagination]}
                className='mainSlider swiper'
            >
                <SwiperSlide><img src={slide1} alt={slide1} /></SwiperSlide>
                <SwiperSlide><img src={slide2} alt={slide2} /></SwiperSlide>
                <SwiperSlide><img src={slide3} alt={slide3} /></SwiperSlide>
                <SwiperSlide><img src={slide4} alt={slide4} /></SwiperSlide>
            </Swiper>
        </div>

    );
}

export default MainSlider;
/*
creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [-50, 0, -100],
                    },
                    next: {
                        translate: [117, 0, -100],
                    },

                }}
                */