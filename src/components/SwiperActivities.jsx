import React, { useRef, useState } from 'react';
import './swiperActivities.css'

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Scrollbar, FreeMode } from 'swiper/modules';

import gl from '../assets/activities/gl.png'

const SwiperActivities = () => {
  return (
    <>
        <Swiper
            breakpoints={{
                0: {
                    slidesPerView: 1
                },
                700: {
                  slidesPerView: 2,
                },
              }}
            centeredSlides={false}
            spaceBetween={80}
            loop={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            scrollbar={{
                hide: true,
              }}
            modules={[Autoplay, Scrollbar, FreeMode]}
            className='mySwiper rounded-2xl drop-shadow-2xl'
         >
            <SwiperSlide>
                <div className='activity relative w-fit h-fit mx-auto rounded-xl overflow-hidden'>
                    <img src={gl} className='bg-cover block' alt="" />
                    <div className='overlay absolute flex justify-center items-center w-full h-full'>
                        <p className='gl-text text-light text-center text-3xl font-semibold drop-shadow-xl'>Grand Launching</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='activity relative w-fit h-fit mx-auto rounded-xl overflow-hidden'>
                    <img src={gl} className='bg-cover block' alt="" />
                    <div className='overlay absolute flex justify-center items-center w-full h-full'>
                        <p className='gl-text text-light text-center text-3xl font-semibold drop-shadow-xl'>Grand Launching</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='activity relative w-fit h-fit mx-auto rounded-xl overflow-hidden'>
                    <img src={gl} className='bg-cover block' alt="" />
                    <div className='overlay absolute flex justify-center items-center w-full h-full'>
                        <p className='gl-text text-light text-center text-3xl font-semibold drop-shadow-xl'>Grand Launching</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='activity relative w-fit h-fit mx-auto rounded-xl overflow-hidden'>
                    <img src={gl} className='bg-cover block' alt="" />
                    <div className='overlay absolute flex justify-center items-center w-full h-full'>
                        <p className='gl-text text-light text-center text-3xl font-semibold drop-shadow-xl'>Grand Launching</p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </>
  )
}

export default SwiperActivities