import React from 'react'
import bg_kesma from '../assets/advocation/bg-kesma.svg'
import logo_kesma from '../assets/advocation/logo-kesma-ellipse.svg'

const Advocation = () => {

    const listMenuKesma = [
        {
            menu: "OA LINE KESMA IME",
            link: "https://line.me/R/ti/p/@dqj3476f"
        },
        {
            menu: "Advokasi Fasilitas FTUI",
            link: "https://docs.google.com/forms/d/e/1FAIpQLScFKR4maeEEcT-ZaXRt4SJBO7aH2Tg26gObpwq27HOoSGLIbw/viewform"
        },
        {
            menu: "Pendaftaran Donatur EEF 2024",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSeS_w6nDktIolpQDrfWvbswy1HWxnpfDwg0mLRjmblke2Cjvg/viewform"
        },
        {
            menu: "Database Kesma IME 2024",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSfh0J21wSFn3azXGLXUPZ5dysuJW4U1cteFG0GISUKHNJ6FhA/viewform"
        },
        {
            menu: "Cara Pembayaran BOP",
            link: "/advocation"
        },
        {
            menu: "Tata Cara Daftar Beasiswa UI ",
            link: "/advocation"
        },
        {
            menu: "Surat Rekomendasi Beasiswa",
            link: "/advocation"
        },
        {
            menu: "Cara Transkrip Nilai",
            link: "/advocation"
        },
    ]

    const bgGrandientStyleBlue = "bg-blue-1 bg-gradient-to-b from-blue to-blue-1 text-light";
    const hoverGrandientStyleSun = "hover:bg-sun hover:bg-gradient-to-b hover:from-sun hover:to-sun-1 duration-500 hover:text-dark";

  return (
    <div className='bg-[image:var(--image-url)] bg-cover'
        style={{'--image-url': `url(${bg_kesma})`}}
        >
        <div className='backdrop-blur-sm min-h-screen flex flex-col justify-center items-center'>
            <div className='kesma flex flex-col justify-center items-center'>
                <img src={logo_kesma} className='w-28' alt="" />
                <p className='text-light font-semibold text-3xl drop-shadow-lg'>Kesejahteraan Mahasiswa</p>
            </div>

            <div className='menus grid grid-cols-1 lg:grid-cols-2 gap-5 justify-items-center mt-10'>
                {
                    listMenuKesma.map((menu, i) => (
                        <a href={menu.link}>
                            <div className={`${bgGrandientStyleBlue} ${hoverGrandientStyleSun} hover:scale-105 w-[28rem] p-2 px-4 rounded-xl bg-size-150 bg-pos-0 hover:bg-pos-100 hover:cursor-pointer`}
                            >
                                <p className='text-center text-2xl font-semibold'>{menu.menu}</p>
                            </div>
                        </a>
                    ))
                }
                <div className={`${bgGrandientStyleBlue} ${hoverGrandientStyleSun} hover:scale-105 p-2 px-4 rounded-xl lg:col-span-2 lg:w-full bg-size-150 bg-pos-0 hover:bg-pos-100 hover:cursor-pointer`}>
                    <p className='text-center text-2xl font-semibold'>Cara Membuat Surat Keterangan Aktif </p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Advocation