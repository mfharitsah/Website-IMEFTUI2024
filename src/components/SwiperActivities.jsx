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

    const [activitiesClicked, setActivitiesClicked] = useState(false);

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
            // autoplay={{
            //     delay: 2000,
            //     disableOnInteraction: false,
            // }}
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
                <div onClick={() => setActivitiesClicked(true)} onMouseLeave={() => setActivitiesClicked(false)} className='group activity relative w-fit h-fit mx-auto rounded-xl overflow-hidden cursor-pointer'>
                    <img src={gl} className='bg-cover block' alt="" />
                    <div className={`overlay absolute flex flex-col justify-center items-center bottom-[-40%] ${activitiesClicked && 'bg-blue pt-10'} group-hover:bottom-0 duration-500 ease-out w-full h-full `}>
                        <p className='gl-text text-light text-center text-3xl font-semibold drop-shadow-xl group-hover:text-4xl '>Grand Launching</p>
                        <div className={`w-full h-0 flex items-center overflow-hidden duration-300  ${activitiesClicked && "h-full"}`}>
                                <p className='text-light text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem veritatis accusantium autem eius dolor deserunt enim tenetur ratione iste. Provident sed suscipit tempora incidunt non distinctio tenetur vitae corporis excepturi. lorem lorem lorem lorem lorem</p>
                            </div>
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