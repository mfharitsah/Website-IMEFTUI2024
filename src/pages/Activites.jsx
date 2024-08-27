import React, { useState } from 'react';
import gl from '../assets/activities/gl.png';
import './activities.css';

const timelines = [
    { title: "Triwulan 1", dateRange: "(Feb 2024 - Apr 2024)", numCards: 9 },
    { title: "Triwulan 2", dateRange: "(May 2024 - Jul 2024)", numCards: 5 }
];

const ImageGrid = ({ numCards = 3, cardsPerRow = 3 }) => {
    const rows = [];
    for (let i = 0; i < numCards; i += cardsPerRow) {
        const rowCards = Array.from({ length: Math.min(cardsPerRow, numCards - i) }, (_, j) => (
            <ImageCard key={i + j} />
        ));
        rows.push(rowCards);
    }

    return (
        <>
            {rows.map((rowCards, rowIndex) => (
                <div key={rowIndex} className="flex gap-5 justify-center max-md:flex-col mb-6">
                    {rowCards}
                </div>
            ))}
        </>
    );
};


const ImageCard = () => {
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
                <img src={gl} className="bg-cover block" alt="" />
                <div className="overlay absolute flex justify-center align-center w-full h-full">
                    <p className="gl-text text-light text-center text-3xl font-semibold drop-shadow-xl">Grand Launching</p>
                    {isClicked && <p className="description text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut bibendum nisi, in facilisis leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut bibendum nisi, in facilisis leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut bibendum nisi, in facilisis leo.</p>}
                </div>
            </div>
        </div>
    );
};

const TimelineSection = ({ title, dateRange, numCards }) => {
    const textGradientStyle = "text-blue-1 text-opacity-0 bg-gradient-to-b from-blue to-blue-1 bg-clip-text inline-block";
    const cardsPerRow = 3;

    return (
        <main className="flex flex-wrap gap-5 self-center w-full mb-10 max-md:max-w-full">
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
                <div className="mt-6 max-md:max-w-full">
                    <ImageGrid numCards={numCards} cardsPerRow={cardsPerRow} />
                </div>
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
                            numCards={timeline.numCards}
                        />
                    ))}
            </div>
        </div>
    );
}

export default Activities;
