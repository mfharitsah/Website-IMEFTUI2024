import React, { useState } from 'react';
import './swiperActivities.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Scrollbar, FreeMode } from 'swiper/modules';

const SwiperActivities = ({ activities }) => {

    return (
        <>
            <Swiper
                breakpoints={{
                    0: {
                        slidesPerView: 1, // 1 slide untuk layar kecil
                    },
                    700: {
                        slidesPerView: 2, // 2 slide untuk layar >= 700px
                    },
                    1000: {
                        slidesPerView: 3,
                    }
                }}
                centeredSlides={true}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                scrollbar={{
                    hide: true,
                }}
                modules={[Autoplay, Scrollbar, FreeMode]}
                className='mySwiper w-full h-auto rounded-2xl drop-shadow-2xl'
            >
                {activities.map((activity, index) => (
                    <SwiperSlide key={index} className=''>
                        <SlideContent content={activity} />
                    </SwiperSlide>
                ))
                }
            </Swiper>
        </>
    )
}

const SlideContent = ({ content }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);

        if (isClicked) {
            setIsClicked(false);
        }
    };

    const handleClick = () => {
        setIsClicked(true);
    }

    return (
        <div className="flex flex-col w-fit max-md:ml-0 max-md:w-full px-5">
            <div
                className={`activity relative w-[16rem] lg:w-[20rem] h-60 lg:h-64 rounded-xl overflow-hidden ${isHovered ? 'hovered' : ''} ${isClicked ? 'clicked' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
            >
                <img
                    src={content.img}
                    className="w-full h-full object-cover"
                    alt={content.name}
                />
                <div className="overlay absolute flex justify-center align-center w-full h-full px-3">
                    <p className="gl-text text-light text-center text-2xl font-bold drop-shadow-xl group-hover:text-3xl">{content.name}</p>
                    {isClicked && <p className="description text-center text-xs">{content.desc}</p>}
                </div>
            </div>

        </div>
    )
}

export default SwiperActivities;
