import React from 'react'

import bg_akpro from '../assets/academics/bg-akpro.svg'
import logo_akpro from '../assets/academics/logo-akpro-ellipse.svg'

const Academics = () => {

    const listMenuAkpro = [
        {
            menu: "DIKTAT",
            link: "https://line.me/R/ti/p/@dqj3476f"
        },
        {
            menu: "E-BOOK",
            link: "https://docs.google.com/forms/d/e/1FAIpQLScFKR4maeEEcT-ZaXRt4SJBO7aH2Tg26gObpwq27HOoSGLIbw/viewform"
        },
        {
            menu: "ASISTENSI",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSeS_w6nDktIolpQDrfWvbswy1HWxnpfDwg0mLRjmblke2Cjvg/viewform"
        },
        {
            menu: "Kurikulum DTE 2020/2024",
            link: "https://drive.google.com/drive/folders/1wBvajM8jH3j2CRkg93ZSCTeJ-e3op42Y"
        },
        {
            menu: "Grup WhatsApp Kelas Mata Kuliah DTE Semester Genap 2023/24",
            link: "https://docs.google.com/spreadsheets/d/1u0ZC9wlaI7bBxzZYd8olmVOxAiadc_3mskU98am0PGA/edit?usp=sharing"
        },
        {
            menu: "Kalender Akademik FTUI Semester Genap 2024 ",
            link: "https://drive.google.com/file/d/1EBbdXqifEOhR4xOkmbca2Ik8UJjKnAPT/view"
        },
    ]

    const bgGrandientStyleBlue = "bg-blue-1 bg-gradient-to-b from-blue to-blue-1 text-light";
    const hoverGrandientStyleSun = "hover:bg-sun hover:bg-gradient-to-b hover:from-sun hover:to-sun-1 duration-500 hover:text-dark";

  return (
    <div className='bg-[image:var(--image-url)] bg-cover'
        style={{'--image-url': `url(${bg_akpro})`}}
        >
        <div className='backdrop-blur-sm min-h-screen flex flex-col justify-center items-center py-20 lg:px-0'>
            <div className='akpro flex flex-col justify-center items-center'>
                <img src={logo_akpro} className='w-28' alt="" />
                <p className='text-light font-semibold text-3xl drop-shadow-lg'>Akademis dan Keprofesian</p>
            </div>

            <div className='menus grid grid-cols-1 gap-5 justify-items-center mt-10'>
                {
                    listMenuAkpro.map((menu, i) => (
                        <a href={menu.link}>
                            <div className={`${bgGrandientStyleBlue} ${hoverGrandientStyleSun} hover:scale-105 lg:w-[48rem] p-2 px-4 rounded-xl bg-size-150 bg-pos-0 hover:bg-pos-100 hover:cursor-pointer`}
                            >
                                <p className='text-center text-2xl font-semibold'>{menu.menu}</p>
                            </div>
                        </a>
                    ))
                }

            </div>
        </div>
    </div>
  )
}

export default Academics