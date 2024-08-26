import React from 'react'

import bg_akpro from '../assets/academics/bg-akpro.svg'
import logo_akpro from '../assets/academics/logo-akpro-ellipse.svg'
import preHover2024 from '../assets/academics/2024noText.svg'
import preHover2023 from '../assets/academics/2023noText.svg'
import preHover2022 from '../assets/academics/2022noText.svg'
import preHover2021 from '../assets/academics/2021noText.svg'
import { useState } from "react";

// Modal component
const Modal = ({ isVisible, onClose, title, options }) => {
    const bgGrandientStyleBlue = "bg-blue-1 bg-gradient-to-b from-blue to-blue-1 text-light";
    const hoverGrandientStyleSun = "hover:bg-sun hover:bg-gradient-to-b hover:from-sun hover:to-sun-1 duration-500 hover:text-dark";
    const textGrandientStyle = "text-blue-1 text-opacity-0 bg-gradient-to-b from-blue to-blue-1 bg-clip-text inline-block";
    const textGrandientStyleSun = "text-sun-1 text-opacity-0 bg-gradient-to-b from-sun to-sun-1 bg-clip-text inline-block";
    if (!isVisible) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-[#000000] bg-opacity-75 flex justify-center items-center z-50 text-light font-bold text-xl"
        onClick={handleOverlayClick}>
            <div className="bg-[#000000] rounded-xl p-6 w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 max-w-4xl mx-auto">
                
                <div className="flex flex-col space-y-4">
                    {options.map((option, index) => (
                        <button
                            key={index}
                            className={`${bgGrandientStyleBlue} ${hoverGrandientStyleSun} hover:scale-105 w-full p-2 rounded-xl bg-size-150 bg-pos-0 hover:bg-pos-100 hover:cursor-pointer`}
                            onClick={() => {
                                window.open(option.href, '_blank');
                                onClose();
                            }}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
                
            </div>
        </div>
    );
};

const Academics = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', options: [] });

    const listMenuAkpro = [
        {
            menu: "DIKTAT",
            href: "#diktat"
        },
        {
            menu: "E-BOOK",
            href: null, // set to null to trigger modal
            options: [
                { label: "Teknik Elektro", href: "https://drive.google.com/drive/folders/1nk9dlEfRVETynjKiiBkA22SWrrvX6cfL?usp=drive_link" },
                { label: "Teknik Komputer", href: "https://drive.google.com/drive/folders/1UYX90559Lkl5YuN5U2PhmiQaZRbywdZl?usp=drive_link" },
                { label: "Teknik Biomedik", href: "https://drive.google.com/drive/folders/1WOlOR54OCc-0FCJH9RXOaWBfCUZj6oPn?usp=drive_link" }
            ]
        },
        {
            menu: "ASISTENSI",
            href: null, // set to null to trigger modal
            options: [
                { label: "Jadwal Asistensi", href: "https://docs.google.com/spreadsheets/d/1BxPJqDDuSPyqrGVqOYhWC1-dMC5qGycFYtRMFCMe6Po/edit#gid=0" },
                { label: "MS Teams Asistensi", href: "https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fteam%2F19%3A932da41e60ce4990b4a7ddb12595ba11%40thread.tacv2%2Fconversations%3FgroupId%3D758f46dc-16ba-4126-8911-ba1ff46af09b%26tenantId%3D485d0c2a-b3bc-407c-98fb-825408258656&type=team&deeplinkId=497d5ecc-f490-41f0-b20a-7ba0a869665b&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true#" },
                { label: "Rekaman Asistensi Terbaru", href: "https://www.youtube.com/@akademisdankeprofesianime2024" }
            ]
        },
        {
            menu: "Kurikulum DTE 2020/2024",
            href: "https://drive.google.com/drive/folders/1wBvajM8jH3j2CRkg93ZSCTeJ-e3op42Y "
        },
        {
            menu: "Grup WhatsApp Kelas Mata Kuliah DTE Semester Genap 2023/24",
            href: "https://docs.google.com/spreadsheets/d/1u0ZC9wlaI7bBxzZYd8olmVOxAiadc_3mskU98am0PGA/edit?usp=sharing"
        },
        {
            menu: "Kalender Akademik FTUI Semester Genap 2024 ",
            href: "https://drive.google.com/file/d/1EBbdXqifEOhR4xOkmbca2Ik8UJjKnAPT/view"
        },
    ]

    const handleMenuClick = (menu) => {
        if (menu.href) {
            window.location.href = menu.href;
        } else {
            setModalContent({ title: menu.menu, options: menu.options });
            setModalVisible(true);
        }
    };

    const bgGrandientStyleBlue = "bg-blue-1 bg-gradient-to-b from-blue to-blue-1 text-light";
    const hoverGrandientStyleSun = "hover:bg-sun hover:bg-gradient-to-b hover:from-sun hover:to-sun-1 duration-500 hover:text-dark";
    const textGrandientStyle = "text-blue-1 text-opacity-0 bg-gradient-to-b from-blue to-blue-1 bg-clip-text inline-block";
    const textGrandientStyleSun = "text-sun-1 text-opacity-0 bg-gradient-to-b from-sun to-sun-1 bg-clip-text inline-block";

  return (
    <div className='bg-[image:var(--image-url)] bg-cover'
        style={{'--image-url': `url(${bg_akpro})`}}
        >
        <div className='backdrop-blur-sm min-h-screen flex flex-col justify-center items-center py-20 lg:px-0'>
            <div className='akpro flex flex-col justify-center items-center mb-6'>
                <img src={logo_akpro} className='w-24 md:w-28 lg:w-32' alt="" />
                <p className='text-light font-semibold mt-6 text-3xl drop-shadow-lg'>Akademis dan Keprofesian</p>
            </div>

            <div className='menus grid grid-cols-1 gap-5 justify-items-center mt-6'>
                {
                    listMenuAkpro.map((menu, i) => (
                        <div key={i} onClick={() => handleMenuClick(menu)}>
                        <div className={`${bgGrandientStyleBlue} ${hoverGrandientStyleSun} hover:scale-105 lg:w-[48rem] p-2 px-4 rounded-xl bg-size-150 bg-pos-0 hover:bg-pos-100 hover:cursor-pointer`}>
                            <p className='text-center text-2xl font-semibold'>{menu.menu}</p>
                        </div>
                    </div>
                    ))
                }
        </div>
        </div>
        <div id="diktat" className='bagianDiktat w-full min-h-screen bg-[#000000] pt-20 pb-24'>
            <div className='flex justify-center items-center mb-8'>
                <div className='judulDiktat rounded-full px-8 sm:px-16 border-4 border-blue flex justify-center items-center'>
                    <p className={`${textGrandientStyle} font-bold text-3xl sm:text-3xl text-center py-0.5`}>
                        Diktat
                    </p>
                </div>
            </div>

            <div id='pilihanDiktat' className='pilihanDiktat grid grid-cols-1 sm:grid-cols-2 gap-8 font-bold text-light justify-items-center mx-auto w-[90%] mt-10 mb-10'>
                <div className='relative group bg-[image:var(--image-url)] bg-cover bg-center h-[200px] sm:h-[343px] w-full mx-auto rounded-xl overflow-hidden'
                        style={{'--image-url': `url(${preHover2024})`}}>
                        <p className='absolute inset-0 flex justify-center items-center text-6xl sm:text-9xl transition-opacity duration-500 group-hover:opacity-0'>
                            2024
                        </p>
                        <div className='absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1 sm:gap-3 px-2 py-1 sm:py-0.5 justify-center items-center w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-100 text-[#000000] font-bold overflow-hidden'>
                            <a className='bg-sun bg-gradient-to-b from-sun to-sun-1 w-full h-full text-black py-1 sm:py-2 px-2 sm:px-4 rounded-2xl flex justify-center items-center text-xl sm:text-4xl transition-transform duration-500 hover:scale-x-105 hover:scale-y-110 hover:cursor-pointer'
                                href='https://drive.google.com/drive/folders/1bE6JUYYlC_lNMDxZfdhzWqC0U6t8EpsN?usp=drive_link'>
                                UTS Ganjil
                            </a>
                            <a className='bg-sun bg-gradient-to-b from-sun to-sun-1 w-full h-full text-black py-1 sm:py-2 px-2 sm:px-4 rounded-2xl flex justify-center items-center text-xl sm:text-4xl transition-transform duration-500 hover:scale-x-105 hover:scale-y-110 hover:cursor-pointer'
                            href='https://drive.google.com/drive/folders/1KHCsUPx3M7PBf5qSzHVoFP6d7-ChyKX5?usp=drive_link'>
                                UAS Ganjil
                            </a>
                            <a className='bg-sun bg-gradient-to-b from-sun to-sun-1 w-full h-full text-black py-1 sm:py-2 px-2 sm:px-4 rounded-2xl flex justify-center items-center text-xl sm:text-4xl transition-transform duration-500 hover:scale-x-105 hover:scale-y-110 hover:cursor-pointer'
                            href='https://drive.google.com/drive/folders/1J69kdwxFxQmjDh14RoohF6nqL3NeQRsJ?usp=drive_link'>
                                UTS Genap
                            </a>
                            <a className='bg-sun bg-gradient-to-b from-sun to-sun-1 w-full h-full text-black py-1 sm:py-2 px-2 sm:px-4 rounded-2xl flex justify-center items-center text-xl sm:text-4xl transition-transform duration-500 hover:scale-x-105 hover:scale-y-110 hover:cursor-pointer'
                            href='https://drive.google.com/drive/folders/1hMShSh43DSSTnMNuezwPWWKOMyWlVGeH?usp=drive_link'>
                                UAS Genap
                            </a>
                        </div>
                    </div>
                    <div className='relative group bg-[image:var(--image-url)] bg-cover h-[200px] sm:h-[343px] w-full mx-auto rounded-xl overflow-hidden'
                        style={{'--image-url': `url(${preHover2023})`}}>
                        <p className='absolute inset-0 flex justify-center items-center text-6xl sm:text-9xl transition-opacity duration-500 group-hover:opacity-0'>
                            2023
                        </p>
                        <div className='absolute inset-0 grid grid-cols-2 grid-rows-2 gap-3 px-2 py-0.5 justify-center items-center w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-100 text-[#000000] font-bold overflow-hidden'>
                            <a className='bg-sun bg-gradient-to-b from-sun to-sun-1 w-full h-full text-black py-1 sm:py-2 px-2 sm:px-4 rounded-2xl flex justify-center items-center text-xl sm:text-4xl transition-transform duration-500 hover:scale-x-105 hover:scale-y-110 hover:cursor-pointer'
                                href='https://drive.google.com/drive/folders/1HoMqjwAl6TDcFHtKkpQwSOGrn-OGTh9M?usp=drive_link'>
                                UTS Ganjil
                            </a>
                            <a className='bg-sun bg-gradient-to-b from-sun to-sun-1 w-full h-full text-black py-1 sm:py-2 px-2 sm:px-4 rounded-2xl flex justify-center items-center text-xl sm:text-4xl transition-transform duration-500 hover:scale-x-105 hover:scale-y-110 hover:cursor-pointer'
                            href='https://drive.google.com/drive/folders/1pmecpsBnDlt_-Hww7wAVZ4XAxZqapx_n?usp=drive_link'>
                                UAS Ganjil
                            </a>
                            <a className='bg-sun bg-gradient-to-b from-sun to-sun-1 w-full h-full text-black py-1 sm:py-2 px-2 sm:px-4 rounded-2xl flex justify-center items-center text-xl sm:text-4xl transition-transform duration-500 hover:scale-x-105 hover:scale-y-110 hover:cursor-pointer'
                            href='https://drive.google.com/drive/folders/1rS_4LOUdoBOcRwd64eTapgOvKvFn0Dfh?usp=drive_link'>
                                UTS Genap
                            </a>
                            <a className='bg-sun bg-gradient-to-b from-sun to-sun-1 w-full h-full text-black py-1 sm:py-2 px-2 sm:px-4 rounded-2xl flex justify-center items-center text-xl sm:text-4xl transition-transform duration-500 hover:scale-x-105 hover:scale-y-110 hover:cursor-pointer'
                            href='https://drive.google.com/drive/folders/1E0wYWIPIDxygKQ8pFvCFb96ET0iziWyc?usp=drive_link'>
                                UAS Genap
                            </a>
                        </div>
                    </div>
                    <div className='relative group bg-[image:var(--image-url)] bg-cover h-[200px] sm:h-[343px] w-full mx-auto rounded-xl overflow-hidden'
                        style={{'--image-url': `url(${preHover2022})`}}>
                        <p className='absolute inset-0 flex justify-center items-center text-6xl sm:text-9xl transition-opacity duration-500 group-hover:opacity-0'>
                            2022
                        </p>
                        <div className='absolute inset-0 grid grid-cols-2 grid-rows-2 gap-3 px-2 py-0.5 justify-center items-center w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-100 text-[#000000] font-bold overflow-hidden'>
                            <a className='bg-sun bg-gradient-to-b from-sun to-sun-1 w-full h-full text-black py-1 sm:py-2 px-2 sm:px-4 rounded-2xl flex justify-center items-center text-xl sm:text-4xl transition-transform duration-500 hover:scale-x-105 hover:scale-y-110 hover:cursor-pointer'
                                href='https://drive.google.com/drive/folders/1HoMqjwAl6TDcFHtKkpQwSOGrn-OGTh9M?usp=drive_link'>
                                UTS Ganjil
                            </a>
                            <a className='bg-sun bg-gradient-to-b from-sun to-sun-1 w-full h-full text-black py-1 sm:py-2 px-2 sm:px-4 rounded-2xl flex justify-center items-center text-xl sm:text-4xl transition-transform duration-500 hover:scale-x-105 hover:scale-y-110 hover:cursor-pointer'
                            href='https://drive.google.com/drive/folders/1pmecpsBnDlt_-Hww7wAVZ4XAxZqapx_n?usp=drive_link'>
                                UAS Ganjil
                            </a>
                            <a className='bg-sun bg-gradient-to-b from-sun to-sun-1 w-full h-full text-black py-1 sm:py-2 px-2 sm:px-4 rounded-2xl flex justify-center items-center text-xl sm:text-4xl transition-transform duration-500 hover:scale-x-105 hover:scale-y-110 hover:cursor-pointer'
                            href='https://drive.google.com/drive/folders/1rS_4LOUdoBOcRwd64eTapgOvKvFn0Dfh?usp=drive_link'>
                                UTS Genap
                            </a>
                            <a className='bg-sun bg-gradient-to-b from-sun to-sun-1 w-full h-full text-black py-1 sm:py-2 px-2 sm:px-4 rounded-2xl flex justify-center items-center text-xl sm:text-4xl transition-transform duration-500 hover:scale-x-105 hover:scale-y-110 hover:cursor-pointer'
                            href='https://drive.google.com/drive/folders/1E0wYWIPIDxygKQ8pFvCFb96ET0iziWyc?usp=drive_link'>
                                UAS Genap
                            </a>
                        </div>
                    </div>
                    <div className='relative group bg-[image:var(--image-url)] bg-cover h-[200px] sm:h-[343px] w-full mx-auto rounded-xl overflow-hidden'
                        style={{'--image-url': `url(${preHover2021})`}}>
                        <p className='absolute inset-0 flex justify-center items-center text-6xl sm:text-9xl transition-opacity duration-500 group-hover:opacity-0'>
                            2021
                        </p>
                        <div className='absolute inset-0 grid grid-cols-2 grid-rows-2 gap-3 px-2 py-0.5 justify-center items-center w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-100 text-[#000000] font-bold overflow-hidden'>
                            <a className='bg-sun bg-gradient-to-b from-sun to-sun-1 w-full h-full text-black py-1 sm:py-2 px-2 sm:px-4 rounded-2xl flex justify-center items-center text-xl sm:text-4xl transition-transform duration-500 hover:scale-x-105 hover:scale-y-110 hover:cursor-pointer'
                                href='https://drive.google.com/drive/folders/1HoMqjwAl6TDcFHtKkpQwSOGrn-OGTh9M?usp=drive_link'>
                                UTS Ganjil
                            </a>
                            <a className='bg-sun bg-gradient-to-b from-sun to-sun-1 w-full h-full text-black py-1 sm:py-2 px-2 sm:px-4 rounded-2xl flex justify-center items-center text-xl sm:text-4xl transition-transform duration-500 hover:scale-x-105 hover:scale-y-110 hover:cursor-pointer'
                            href='https://drive.google.com/drive/folders/1pmecpsBnDlt_-Hww7wAVZ4XAxZqapx_n?usp=drive_link'>
                                UAS Ganjil
                            </a>
                            <a className='bg-sun bg-gradient-to-b from-sun to-sun-1 w-full h-full text-black py-1 sm:py-2 px-2 sm:px-4 rounded-2xl flex justify-center items-center text-xl sm:text-4xl transition-transform duration-500 hover:scale-x-105 hover:scale-y-110 hover:cursor-pointer'
                            href='https://drive.google.com/drive/folders/1rS_4LOUdoBOcRwd64eTapgOvKvFn0Dfh?usp=drive_link'>
                                UTS Genap
                            </a>
                            <a className='bg-sun bg-gradient-to-b from-sun to-sun-1 w-full h-full text-black py-1 sm:py-2 px-2 sm:px-4 rounded-2xl flex justify-center items-center text-xl sm:text-4xl transition-transform duration-500 hover:scale-x-105 hover:scale-y-110 hover:cursor-pointer'
                            href='https://drive.google.com/drive/folders/1E0wYWIPIDxygKQ8pFvCFb96ET0iziWyc?usp=drive_link'>
                                UAS Genap
                            </a>
                        </div>
                    </div>
            </div>
    </div>
        <Modal
                isVisible={isModalVisible}
                onClose={() => setModalVisible(false)}
                title={modalContent.title}
                options={modalContent.options}
            />
    </div>
    
  )
}

export default Academics