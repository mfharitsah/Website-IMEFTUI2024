import React, { useState } from 'react';
import './activities.css';

import tw1 from '../assets/activities/tw1'
import tw2 from '../assets/activities/tw2'
import tw3a from '../assets/activities/tw3a'
import tw3b from '../assets/activities/tw3b'

const timelines = [
    { title: "Triwulan I", dateRange: "(Feb 2024 - Apr 2024)", activities: tw1, numCards: 10 },
    { title: "Triwulan II", dateRange: "(May 2024 - Jul 2024)", activities: tw2, numCards: 5 },
    { title: "Triwulan IIIA", dateRange: "(Aug 2024 - Oct 2024)", activities: tw3a, numCards: 5 },
    { title: "Triwulan IIIB", dateRange: "(Nov 2024 - Dec 2024)", activities: tw3b, numCards: 5 }
];

const ImageCard = ({ activity }) => {
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
    };

    return (
        <div
            className={`activity relative w-[20rem] h-[14rem] rounded-xl overflow-hidden transition-transform duration-300 ${isHovered ? 'hovered' : ''} ${isClicked ? 'clicked' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            <img
                src={activity.img}
                className="block w-full h-full object-cover"
                alt={activity.name}
            />
            <div className="overlay absolute flex flex-col justify-center align-center w-full h-full px-5">
                <p className="gl-text text-light text-center text-2xl font-bold drop-shadow-xl">
                    {activity.name}
                </p>
                {isClicked && (
                    <p className="description text-xs text-center mt-2">
                        {activity.desc}
                    </p>
                )}
            </div>
        </div>


    );
};


const ImageGrid = ({ numCards = 3, cardsPerRow = 3, activities = [] }) => {
    const rows = [];
    for (let i = 0; i < numCards; i += cardsPerRow) {
        const rowCards = activities.slice(i, i + cardsPerRow).map((activity, index) => (
            <ImageCard activity={activity} key={i + index} />
        ));
        rows.push(rowCards);
    }

    return (
        <>
            {rows.map((rowCards, rowIndex) => (
                <div key={rowIndex} className="flex gap-8 justify-center max-md:flex-col mb-6">
                    {rowCards}
                </div>
            ))}
        </>
    );
};


const TimelineSection = ({ title, dateRange, activities }) => {
    const textGradientStyle = "text-blue-1 text-opacity-0 bg-gradient-to-b from-blue to-blue-1 bg-clip-text inline-block";
    const cardsPerRow = 3;
    const numCards = activities.length;

    // Format title menjadi lowercase tanpa spasi
    const formattedTitle = 'tw' + title.slice(8).toLowerCase().replace(/\s+/g, '');
    console.log(formattedTitle);
    

    return (
        <main 
            className="flex flex-wrap gap-5 self-center w-full mb-10 max-md:max-w-full" 
            id={formattedTitle}
        >
            <div className="flex flex-col">
                <div className="flex z-10 shrink-0 bg-[#418CED] rounded-full h-[52px] w-[52px]" />
                <div className="flex shrink-0 self-center -mt-1 w-2.5 bg-[#418CED] h-full" />
            </div>
            <section className="flex flex-col grow shrink-0 self-start basis-0 w-fit max-md:max-w-full">
                <h2 className={`${textGradientStyle} self-start text-4xl font-bold ml-8`}>
                    {title}
                </h2>
                <div className="z-10 self-start -mt-1.5 text-base font-medium text-[#F2F4F8] ml-8">
                    {dateRange}
                </div>
                {
                    title === "Triwulan IIIB" ? (
                        <div className="mt-6 max-md:max-w-full flex justify-start mb-20">
                            <p className='text-light font-semibold text-4xl italic'>Coming Soon...</p>
                        </div>
                    ) : (
                        <div className="mt-6 max-md:max-w-full">
                            <ImageGrid numCards={numCards} cardsPerRow={cardsPerRow} activities={activities} />
                        </div>
                    )
                }
            </section>
        </main>
    );
};


function Activities() {
    return (
        <div className="flex flex-col pt-20 pl-16 max-md:pl-0 max-md:pt-24">
            <div className="flex overflow-hidden flex-col w-full max-md:max-w-full">
                {timelines.map((timeline, index) => (
                    <TimelineSection
                        key={index}
                        title={timeline.title}
                        dateRange={timeline.dateRange}
                        activities={timeline.activities}
                    />
                ))}
            </div>
        </div>
    );
}

export default Activities;
