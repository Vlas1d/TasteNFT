import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/effect-creative';
import 'swiper/css/pagination';

import slide1 from '../../../images/slide1.png'
import slide2 from '../../../images/slide2.png'
import slide3 from '../../../images/slide3.png'
import slide4 from '../../../images/slide4.png'

import style from './mainSlider.module.scss';
import './mainSlider.scss';

// import required modules
import { EffectCreative } from 'swiper/modules';


const MainSlider = () => {
    return (
        <>
            <Swiper
                slidesPerView={'auto'}
                //centeredSlides={true}
                freeMode={true}
                grabCursor={true}
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [-50, 0, -100],
                    },
                    next: {
                        translate: [117, 0, -100],
                    },
                }}
                modules={[EffectCreative]}
                //className={style.swiper}
                className='swiper'

            >
                <SwiperSlide><img src={slide1} alt={slide1} /></SwiperSlide>
                <SwiperSlide><img src={slide2} alt={slide2} /></SwiperSlide>
                <SwiperSlide><img src={slide3} alt={slide3} /></SwiperSlide>
                <SwiperSlide><img src={slide4} alt={slide4} /></SwiperSlide>
            </Swiper>
        </>

    );
}

export default MainSlider;