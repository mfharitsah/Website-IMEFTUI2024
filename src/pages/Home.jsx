import React, { useEffect } from 'react'
import './home.css'

import bg_landing from '../assets/main/hero-bg.svg'
import arrow1 from '../assets/main/arrow-1.svg'
import arrow2 from '../assets/main/arrow-2.svg'
import arrow3 from '../assets/main/arrow-3.svg'
import bg_1 from '../assets/main/elektro-bg-1.svg'
import bg_2 from '../assets/main/elektro-bg-2.svg'
import our from '../assets/main/our.png'
import bg_activities from '../assets/activities/bg.png'

import SwiperBidang from '../components/SwiperBidang'
import SwiperActivities from '../components/SwiperActivities'
import Preloader from '../components/Preloader'

// aos scroll effect
import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

    const textGrandientStyle = "text-blue-1 text-opacity-0 bg-gradient-to-b from-blue to-blue-1 bg-clip-text inline-block";
    const textGrandientStyleSun = "text-sun-1 text-opacity-0 bg-gradient-to-b from-sun to-sun-1 bg-clip-text inline-block";

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className='font-sf-pro'>

            <Preloader />

            <div className='bg-landing bg-[image:var(--image-url)] bg-opacity-5 w-full h-screen relative overflow-hidden bg-cover bg-no-repeat bg-fixed flex flex-col justify-center items-center gap-20'
                style={{ '--image-url': `url(${bg_landing})` }}
                data-aos="fade-down"
            >

                <div className='h-fit flex flex-col'>
                    <p className='text-light text-xs md:text-lg italic tracking-wider'>Sambut salam hangat dari kami...</p>
                    <div className='text-5xl md:text-7xl lg:text-9xl flex tracking-wide gap-2 md:gap-6 '>
                        <p  className={`${textGrandientStyleSun} italic font-bold pr-3`}>PAGI</p>
                        <h1 className=''><span className={`${textGrandientStyle} italic font-bold pr-3`} >ELEKTRO!</span></h1>
                    </div>
                </div>

                <a href="#ime-ftui" className='absolute bottom-20'>
                    <div className='w-full h-full flex flex-col items-center cursor-pointer'>
                        <img src={arrow3} alt="" className='w-12 md:w-24' />
                        <img src={arrow1} alt="" className='w-12 md:w-24' />
                        <img src={arrow2} alt="" className='w-12 md:w-24' />
                    </div>
                </a>

            </div>

            <div id="ime-ftui" className='ime w-full h-fit mt-8'>
                <div className='grid grid-cols-3 h-fit'>
                    <img data-aos="fade-right" src={bg_1} className='' alt="" />
                    <p data-aos="fade-down" className={`inline-block text-2xl leading-5 md:leading-none md:text-6xl ${textGrandientStyle} font-bold text-center `}>IME FTUI 2024</p>
                    <img data-aos="fade-left" src={bg_2} alt="" />
                </div>
                <p data-aos="fade-up" className='text-light text-sm md:text-center text-justify mx-20 md:mx-32 mt-4'>Ikatan Mahasiswa Elektro (IME FTUI) adalah lembaga eksekutif yang bergerak didalam lingkup wilayah Departemen Teknik Elektro Universitas Indonesia yang bertujuan untuk membina, mewadahi, dan melayani mahasiswa di Departemen Teknik Elektro Universitas Indonesia melalui 12 bidang yang terdapat di dalamnya.</p>
            </div>

            <div id='bidang' className='flex flex-col justify-center items-center lg:flex-row gap-10 lg:gap-0 my-10 mx-auto py-10 lg:px-24 h-fit'>
                <div data-aos="fade-right" id='slide-bidang' className='w-full md:w-3/5  gap-2'>

                    <SwiperBidang />
                </div>
                <div data-aos="fade-left" className='vismis w-5/6 h-64 md:h-fit md:w-2/5 flex flex-col justify-center items-center px-14 md:px-0'>
                    <div data-aos="fade-left" className='visi w-full relative text-center cursor-pointer'>
                        <p className={` ${textGrandientStyle} text-7xl md:text-8xl font-bold`}>VISI</p>
                        <div name='' className='isi-visi absolute bg-light text-justify p-2 duration-500 ease-in-out overflow-hidden'>
                            <p className='text-dark text-xs '>Terwujudnya IME FTUI yang berkomitmen dalam memberikan wadah pengembangan
                                secara komprehensif dan adaptif dalam segala kondisi agar dapat menciptakan iklim IME FTUI yang progresif</p>
                        </div>
                    </div>
                    <div data-aos="fade-left" className='misi w-full relative text-center cursor-pointer'>
                        <div name='' className='isi-misi absolute bg-light space-y-1 p-2 duration-500 ease-in-out overflow-hidden'>
                            <p className=''>Membangun internalisasi IME FTUI 2024 yang dapat mencapai keseimbangan antara profesionalitas dan kekeluargaan sehingga menciptakan iklim kerja IME FTUI yang optimal dan progresif untuk seluruh fungsionarisnya</p>
                            <p>Mengoptimalkan pengembangan lembaga dan potensi individu pengurus secara evaluatif dan konstruktif agar menciptakan regenerasi yang unggul</p>
                            <p>Mewadahi pembinaan dan pengembangan potensi warga Departemen Teknik Elektro sesuai minat, bakat, core competence DTE secara komprehensif dan
                                tepat</p>
                            <p>Mempersiapkan warga Departemen Teknik Elektro yang bermutu dan kompeten dalam menghadapi dunia kampus dan persiapan pascakampus</p>
                            <p>Membangun hubungan yang harmonis dengan stakeholder IME FTUI demi menciptakan hubungan timbal balik yang sinergis</p>
                        </div>
                        <p className={` ${textGrandientStyle} text-7xl md:text-8xl font-bold`}>MISI</p>
                    </div>
                </div>
            </div>

            <div className='our-activities bg-[image:var(--image-url)] bg-fixed h-fit py-16 px-10 xl:px-36 mt-20 space-y-8'
                style={{ '--image-url': `url(${bg_activities})` }}
            >
                <div data-aos="fade-down" className='flex items-center h-fit gap-2'>
                    <img src={our} className='w-4 h-10 md:h-14 mt-2' alt="" />
                    <p className={`${textGrandientStyleSun} text-5xl md:text-7xl font-bold`}>ACTIVITIES</p>
                </div>
                <div data-aos="fade-up" className='bg-light bg-opacity-10 p-5 rounded-2xl ring-1 ring-opacity-20 ring-light'>
                    <SwiperActivities />
                </div>

            </div>

            <div className='w-full h-fit p-10 md:px-14'>
                <p data-aos="fade-right" className={`w-full text-5xl md:text-7xl font-semibold text-center lg:text-start ${textGrandientStyleSun}`}>Our <span className={`${textGrandientStyle}`}>Benefits</span> </p>
                <div data-aos="fade-left" className='w-full h-fit py-10 grid grid-cols-1 lg:grid-cols-3 place-items-center items-center gap-8'>
                    <div className='rounded-3xl bg-blue w-80 h-[26rem] flex flex-col justify-end p-6'>
                        <div className='bg-light rounded-3xl p-1 cursor-pointer hover:scale-95 duration-200 shadow-lg'>
                            <p className='text-blue text-2xl font-bold text-center'>Advocation</p>
                        </div>
                    </div>
                    <div className='rounded-3xl bg-blue w-80 h-[26rem] flex flex-col justify-end p-6'>
                        <div className='bg-light rounded-3xl p-1 cursor-pointer hover:scale-95 duration-200 shadow-lg'>
                            <p className='text-blue text-2xl font-bold text-center'>Academics</p>
                        </div>
                    </div>
                    <div className='rounded-3xl bg-blue w-80 h-[26rem] flex flex-col justify-end p-6'>
                        <div className='bg-light rounded-3xl p-1 cursor-pointer hover:scale-95 duration-200 shadow-lg'>
                            <p className='text-blue text-2xl font-bold text-center'>Competitions</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Home