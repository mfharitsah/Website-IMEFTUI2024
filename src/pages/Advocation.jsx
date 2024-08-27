import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import bg_kesma from "../assets/advocation/bg-kesma.svg";
import logo_kesma from "../assets/advocation/logo-kesma-ellipse.svg";
import BOP1 from "../assets/advocation/BOP/1.svg";
import BOP2 from "../assets/advocation/BOP/2.svg";
import BOP3 from "../assets/advocation/BOP/3.svg";
import BOP4 from "../assets/advocation/BOP/4.svg";
import BOP5 from "../assets/advocation/BOP/5.svg";
import BOP6 from "../assets/advocation/BOP/6.svg";
import BOP7 from "../assets/advocation/BOP/7.svg";
import B1 from "../assets/advocation/beasiswa/1.svg";
import B2 from "../assets/advocation/beasiswa/2.svg";

const Advocation = () => {
  const [activeCarousel, setActiveCarousel] = useState(null);
  const [swiper, setSwiper] = useState(null);

  const listMenuKesma = [
    {
      menu: "OA LINE KESMA IME",
      link: "https://line.me/R/ti/p/@dqj3476f",
    },
    {
      menu: "Advokasi Fasilitas FTUI",
      link: "https://docs.google.com/forms/d/e/1FAIpQLScFKR4maeEEcT-ZaXRt4SJBO7aH2Tg26gObpwq27HOoSGLIbw/viewform",
    },
    {
      menu: "Pendaftaran Donatur EEF 2024",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeS_w6nDktIolpQDrfWvbswy1HWxnpfDwg0mLRjmblke2Cjvg/viewform",
    },
    {
      menu: "Database Kesma IME 2024",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfh0J21wSFn3azXGLXUPZ5dysuJW4U1cteFG0GISUKHNJ6FhA/viewform",
    },
    {
      menu: "Cara Pembayaran BOP",
      link: "cara-pembayaran-bop",
    },
    {
      menu: "Tata Cara Daftar Beasiswa UI ",
      link: "tata-cara-beasiswa-ui",
    },
    {
      menu: "Surat Rekomendasi Beasiswa",
      link: "/advocation",
    },
    {
      menu: "Cara Transkrip Nilai",
      link: "/advocation",
    },
  ];

  const carouselData = {
    "cara-pembayaran-bop": {
      title: "Cara Pembayaran BOP",
      slides: [BOP1, BOP2, BOP3, BOP4, BOP5, BOP6, BOP7],
    },
    "tata-cara-beasiswa-ui": {
      title: "Tata Cara Daftar Beasiswa UI",
      slides: [B1, B2],
    },
  };

  const bgGradientStyleBlue = "bg-blue-1 bg-gradient-to-b from-blue to-blue-1 text-light";
  const hoverGradientStyleSun = "hover:bg-sun hover:bg-gradient-to-b hover:from-sun hover:to-sun-1 duration-500 hover:text-dark";

  useEffect(() => {
    if (swiper && activeCarousel) {
      swiper.slideTo(0, 0);
    }
  }, [activeCarousel, swiper]);

  const handleMenuClick = (link) => {
    if (carouselData[link]) {
      setActiveCarousel(link);
      setTimeout(() => {
        const element = document.getElementById("carousel-section");
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const handleClose = () => {
    setActiveCarousel(null);
    setTimeout(() => {
      const element = document.getElementById("advocation-menu");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="bg-[image:var(--image-url)] bg-cover bg-fixed min-h-screen" style={{ "--image-url": `url(${bg_kesma})` }}>
      <div id="advocation-menu" className="backdrop-blur-sm min-h-screen flex flex-col justify-center items-center p-4 md:p-8">
        <div className="kesma flex flex-col justify-center items-center mb-8">
          <img src={logo_kesma} className="w-20 md:w-28 mb-4" alt="Kesma Logo" />
          <p className="text-light font-semibold text-2xl md:text-3xl text-center drop-shadow-lg">Kesejahteraan Mahasiswa</p>
        </div>

        <div className="menus grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 justify-items-center w-full max-w-4xl">
          {listMenuKesma.map((menu, i) => (
            <div key={i} onClick={() => handleMenuClick(menu.link)} className="w-full">
              {menu.link.startsWith("http") ? (
                <a href={menu.link} target="_blank" rel="noopener noreferrer" className="block w-full">
                  <div
                    className={`${bgGradientStyleBlue} ${hoverGradientStyleSun} transform hover:scale-105 w-full p-3 md:p-4 rounded-xl bg-size-150 bg-pos-0 hover:bg-pos-100 hover:cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl`}
                  >
                    <p className="text-center text-lg md:text-xl lg:text-2xl font-semibold">{menu.menu}</p>
                  </div>
                </a>
              ) : (
                <div
                  className={`${bgGradientStyleBlue} ${hoverGradientStyleSun} transform hover:scale-105 w-full p-3 md:p-4 rounded-xl bg-size-150 bg-pos-0 hover:bg-pos-100 hover:cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl`}
                >
                  <p className="text-center text-lg md:text-xl lg:text-2xl font-semibold">{menu.menu}</p>
                </div>
              )}
            </div>
          ))}
          <div
            className={`${bgGradientStyleBlue} ${hoverGradientStyleSun} transform hover:scale-105 p-3 md:p-4 rounded-xl md:col-span-2 w-full bg-size-150 bg-pos-0 hover:bg-pos-100 hover:cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl`}
          >
            <p className="text-center text-lg md:text-xl lg:text-2xl font-semibold">Cara Membuat Surat Keterangan Aktif </p>
          </div>
        </div>
      </div>

      {activeCarousel && (
        <div id="carousel-section" className="min-h-screen bg-blue-900/90 backdrop-blur-sm flex flex-col items-center justify-start p-4 md:p-8 relative text-light">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 mt-16 animate-fadeInDown text-center">{carouselData[activeCarousel].title}</h1>
          <div className="w-full  md:w-5/6 lg:w-3/12 max-w-3xl mx-auto animate-fadeIn">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={1}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="mySwiper"
              pagination={{
                type: "fraction",
              }}
              navigation={true}
              loop={false}
              onSwiper={setSwiper}
            >
              {carouselData[activeCarousel].slides.map((slide, index) => (
                <SwiperSlide key={index} className="bg-white rounded-lg overflow-hidden shadow-xl">
                  <div className="aspect-w-16 aspect-h-9">
                    <img src={slide} alt={`Slide ${index + 1}`} className="transform scale-95  object-contain" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <button onClick={handleClose} className={`mt-2 px-6 py-3 rounded-full shadow-lg transition-colors duration-300 text-lg font-semibold transform hover:scale-105 hover:shadow-xl ${bgGradientStyleBlue} ${hoverGradientStyleSun}`}>
            Back to Menu
          </button>
        </div>
      )}
    </div>
  );
};

export default Advocation;
