import React, { useEffect, useState } from 'react'
import './home.css'

import bg_landing from '../assets/main/hero-bg.svg'
import arrow1 from '../assets/main/arrow-1.svg'
import arrow2 from '../assets/main/arrow-2.svg'
import arrow3 from '../assets/main/arrow-3.svg'
import bg_1 from '../assets/main/elektro-bg-1.svg'
import bg_2 from '../assets/main/elektro-bg-2.svg'
import our from '../assets/main/our.png'
import bg_activities from '../assets/activities/bg.png'

import tw1 from '../assets/activities/tw1'
import tw2 from '../assets/activities/tw2'
import tw3a from '../assets/activities/tw3a'

import SwiperBidang from '../components/SwiperBidang'
import SwiperActivities from '../components/SwiperActivities'
import Preloader from '../components/Preloader'

// aos scroll effect
import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

    const [homeActivities, setHomeActivities] = useState([]);

    const textGrandientStyle = "text-blue-1 text-opacity-0 bg-gradient-to-b from-blue to-blue-1 bg-clip-text inline-block";
    const textGrandientStyleSun = "text-sun-1 text-opacity-0 bg-gradient-to-b from-sun to-sun-1 bg-clip-text inline-block";

    useEffect(() => {
        const allActivities = [
            ...tw1.filter((activity) => activity.unggulan),
            ...tw2.filter((activity) => activity.unggulan),
            ...tw3a.filter((activity) => activity.unggulan)
        ];

        setHomeActivities(allActivities);
    }, []);

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
                        <p className={`${textGrandientStyleSun} italic font-extrabold pr-3`}>PAGI</p>
                        <h1 className=''><span className={`${textGrandientStyle} italic font-extrabold pr-3`} >ELEKTRO!</span></h1>
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

            <div id="ime-ftui" className='ime w-full h-fit pt-20'>
                <div className='grid grid-cols-3 h-fit'>
                    <img data-aos="fade-right" src={bg_1} className='' alt="" />
                    <p data-aos="fade-down" className={`inline-block text-2xl leading-5 md:leading-none md:text-6xl ${textGrandientStyle} font-bold text-center `}>IME FTUI 2024</p>
                    <img data-aos="fade-left" src={bg_2} alt="" />
                </div>
                <p data-aos="fade-up" className='text-light text-sm md:text-center text-justify mx-20 md:mx-32 mt-4'>Ikatan Mahasiswa Elektro (IME FTUI) adalah lembaga eksekutif yang bergerak didalam lingkup wilayah Departemen Teknik Elektro Universitas Indonesia yang bertujuan untuk membina, mewadahi, dan melayani mahasiswa di Departemen Teknik Elektro Universitas Indonesia melalui 12 bidang yang terdapat di dalamnya.</p>
            </div>

            <div id='bidang' className='flex flex-col justify-center items-center lg:flex-row gap-10 lg:gap- mx-auto mb-36 md:mb-5 py-10 lg:px-24 h-fit'>
                <div data-aos="fade-right" id='slide-bidang' className='w-full md:w-3/5  gap-2'>

                    <SwiperBidang />
                </div>
                <div data-aos="fade-left" className='vismis w-5/6 h-64 md:h-fit md:w-1/2 flex flex-col justify-center items-center px-14 md:px-0 md:mr-20'>
                    <div data-aos="fade-left" className='visi w-full relative text-center cursor-pointer'>
                        <p className={` ${textGrandientStyle} vismisTitle text-7xl md:text-8xl font-bold`}>VISI</p>
                        <div name='' className='isi-visi absolute bg-light text-justify p-2 duration-500 ease-in-out overflow-hidden'>
                            <p className='text-dark text-xs xl:text-lg '>Terwujudnya IME FTUI yang berkomitmen dalam memberikan wadah pengembangan
                                secara <span className={`${textGrandientStyle} font-bold`}>komprehensif</span>  dan <span className={`${textGrandientStyle} font-bold`}>adaptif</span> dalam segala kondisi agar dapat menciptakan iklim IME FTUI yang <span className={`${textGrandientStyle} font-bold`}>progresif</span></p>
                        </div>
                    </div>
                    <div data-aos="fade-left" className='misi w-full relative text-center cursor-pointer'>
                        <div name='' className='isi-misi text-start absolute bg-light space-y-1 p-2 duration-500 ease-in-out overflow-hidden'>
                            <p className=''><span className={`nomor-misi ${textGrandientStyle} font-extrabold text-sm lg:text-base`}>1</span> Membangun internalisasi IME FTUI 2024 yang dapat mencapai keseimbangan antara profesionalitas dan kekeluargaan sehingga menciptakan iklim kerja IME FTUI yang optimal dan progresif untuk seluruh fungsionarisnya</p>
                            <p><span className={`nomor-misi ${textGrandientStyle} font-extrabold text-base`}>2</span> Mengoptimalkan pengembangan lembaga dan potensi individu pengurus secara evaluatif dan konstruktif agar menciptakan regenerasi yang unggul</p>
                            <p><span className={`nomor-misi ${textGrandientStyle} font-extrabold text-base`}>3</span> Mewadahi pembinaan dan pengembangan potensi warga Departemen Teknik Elektro sesuai minat, bakat, core competence DTE secara komprehensif dan
                                tepat</p>
                            <p><span className={`nomor-misi ${textGrandientStyle} font-extrabold text-base`}>4</span> Mempersiapkan warga Departemen Teknik Elektro yang bermutu dan kompeten dalam menghadapi dunia kampus dan persiapan pascakampus</p>
                            <p><span className={`nomor-misi ${textGrandientStyle} font-extrabold text-base`}>5</span> Membangun hubungan yang harmonis dengan stakeholder IME FTUI demi menciptakan hubungan timbal balik yang sinergis</p>
                        </div>
                        <p className={` ${textGrandientStyle} vismisTitle text-7xl md:text-8xl font-bold`}>MISI</p>
                    </div>
                </div>
            </div>

            <div className="our-activities bg-[image:var(--image-url)] bg-fixed h-fit xl:min-h-screen flex flex-col justify-center py-16 px-10 xl:px-36 mt-20 space-y-8"
                style={{ '--image-url': `url(${bg_activities})` }}
            >
                <div data-aos="fade-down" className="flex items-center h-fit gap-2">
                    <img src={our} className="w-4 h-10 md:h-14 xl:h-16 mt-2" alt="" />
                    <p className={`${textGrandientStyleSun} text-5xl md:text-7xl xl:text-8xl font-bold`}>Activities</p>
                </div>
                <div data-aos="fade-up" className="bg-light bg-opacity-10 p-5 rounded-2xl ring-1 ring-opacity-20 ring-light">
                    <SwiperActivities activities={homeActivities} />
                </div>
            </div>

            <div className="w-full h-fit flex flex-col justify-center p-10 px-20 lg:px-32 lg:min-h-screen">
                <p
                    data-aos="fade-right"
                    className={`w-full text-5xl md:text-7xl font-bold text-center lg:text-start ${textGrandientStyle}`}
                >
                    What We <span className={`${textGrandientStyleSun}`}>Offer</span>
                </p>
                <div
                    data-aos="fade-left"
                    className="w-full h-[32rem] py-10 grid grid-cols-1 lg:grid-cols-3 gap-y-8 gap-x-20 place-items-center"
                >
                    {/* Card 1 */}
                    <div className="rounded-3xl bg-blue w-full h-full flex flex-col justify-end p-6">
                        <div className="bg-light rounded-3xl p-1 cursor-pointer hover:scale-95 duration-200 shadow-lg flex justify-center">
                            <a href="/advocations" className="text-blue text-2xl font-bold text-center">
                                Advocation
                            </a>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="rounded-3xl bg-blue w-full h-full flex flex-col justify-end p-6">
                        <div className="bg-light rounded-3xl p-1 cursor-pointer hover:scale-95 duration-200 shadow-lg flex justify-center">
                            <a href="/academics" className="text-blue text-2xl font-bold text-center">
                                Academics
                            </a>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="rounded-3xl bg-blue w-full h-full flex flex-col justify-end p-6">
                        <div className="bg-light rounded-3xl p-1 cursor-pointer hover:scale-95 duration-200 shadow-lg flex justify-center">
                            <a href="/contacts" className="text-blue text-2xl font-bold text-center">
                                External Services
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Home