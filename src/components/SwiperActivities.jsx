import React, { useState } from 'react';
import './swiperActivities.css'
import activities from '../assets/activities/activities'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Scrollbar, FreeMode } from 'swiper/modules';

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
                {activities
                    .filter(activity => activity.unggulan)
                    .map((activity, index) => (
                        <SwiperSlide key={index}>
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
        <div className="flex flex-col w-[426px] items-center justify-center max-md:ml-0 max-md:w-full">
            <div className={`activity relative w-fit h-fit rounded-xl overflow-hidden ${isHovered ? 'hovered' : ''} ${isClicked ? 'clicked' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
            >
                <img src={content.img} className="bg-cover block" alt="" />
                <div className="overlay absolute flex justify-center align-center w-full h-full">
                    <p className="gl-text text-light text-center text-3xl font-semibold drop-shadow-xl">{content.name}</p>
                    {isClicked && <p className="description text-center">{content.desc}</p>}
                </div>
            </div>
        </div>
    )
}

export default SwiperActivities;
