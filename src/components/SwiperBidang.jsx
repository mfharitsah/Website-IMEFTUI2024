import React, { useRef, useState } from 'react';
import arrow from '../assets/main/arrow.svg'

// import all bidang
import bidangs from '../assets/bidang/index'

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper.css'

import { Autoplay, Navigation } from 'swiper/modules';


const SwiperBidang = () => {

  return (
    <>
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper rounded-3xl w-[20rem] md:w-[28rem]"
        >
            {
                bidangs.map((bidang, i) => (
                <SwiperSlide className='' key={i}>
                    <div name='bidang' className='bidang relative'>
                        <img src={bidang.unhover} className='bidang-unhover' alt="" />
                        <img src={bidang.hover} className='bidang-hover absolute' alt="" />
                    </div>
                </SwiperSlide>
            ))
            }
        
            <img src={arrow} className='swiper-button-prev w-2 cursor-pointer' alt="" />
            <img src={arrow} className='swiper-button-next rotate-180 w-2 cursor-pointer' alt="" />

        </Swiper>
        
    </>
  )
}

export default SwiperBidang