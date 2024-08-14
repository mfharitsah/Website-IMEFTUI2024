import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const CarouselPage = ({ title, slides }) => {
    const swiperRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fadeIn');
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(swiperRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-600 flex flex-col items-center justify-center p-8">
            <h1 className="text-4xl font-bold text-white mb-8 animate-fadeInDown">{title}</h1>
            <div ref={swiperRef} className="w-full max-w-4xl opacity-0">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    navigation={true}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <img src={slide.image} alt={slide.title} className="w-full h-auto" />
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                                <h2 className="text-xl font-semibold">{slide.title}</h2>
                                <p>{slide.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export const CaraPembayaranBOP = () => {
    const slides = [
        { image: '/path/to/bop-image1.jpg', title: 'Langkah 1: Login', description: 'Login ke akun mahasiswa Anda' },
        { image: '/path/to/bop-image2.jpg', title: 'Langkah 2: Pilih Menu', description: 'Pilih menu Pembayaran BOP' },
        { image: '/path/to/bop-image3.jpg', title: 'Langkah 3: Pilih Metode', description: 'Pilih metode pembayaran yang diinginkan' },
        { image: '/path/to/bop-image4.jpg', title: 'Langkah 4: Konfirmasi', description: 'Konfirmasi dan selesaikan pembayaran' },
    ];

    return <CarouselPage title="Cara Pembayaran BOP" slides={slides} />;
};

export const TataCaraBeasiswaUI = () => {
    const slides = [
        { image: '/path/to/beasiswa-image1.jpg', title: 'Langkah 1: Cek Persyaratan', description: 'Periksa persyaratan beasiswa yang ditawarkan' },
        { image: '/path/to/beasiswa-image2.jpg', title: 'Langkah 2: Siapkan Dokumen', description: 'Siapkan semua dokumen yang diperlukan' },
        { image: '/path/to/beasiswa-image3.jpg', title: 'Langkah 3: Isi Formulir', description: 'Isi formulir pendaftaran dengan teliti' },
        { image: '/path/to/beasiswa-image4.jpg', title: 'Langkah 4: Submit', description: 'Submit aplikasi dan tunggu pengumuman' },
    ];

    return <CarouselPage title="Tata Cara Daftar Beasiswa UI" slides={slides} />;
};