import React from 'react'
import elipse from '../assets/footer/elipse.svg'

const Footer = () => {
  return (
    <div className='w-full min-h-80 bg-blue text-light p-14 '>
        <div className='flex flex-col justify-center items-center gap-4 md:items-start md:flex-row md:justify-between'>
            <div className='w-3/4 md:w-2/5 space-y-2'>
                <p className='text-center md:text-start text-3xl font-semibold drop-shadow-xl'>IME FTUI 2024</p>
                <p className='text-sm text-justify'>Dengan membawa tagline #Elevasi Potensi, kami memiliki sebuah misi, yaitu terwujudnya IME FTUI 2024 yang berkomitmen dalam memberikan wadah pengembangan secara <span className='font-bold italic'>KOMPREHENSIF</span> dan <span className='font-bold italic'>ADAPTIF</span> dalam segala kondisi agar dapat menciptakan iklim yang <span className='font-bold italic'>PROGRESIF</span></p>
            </div>
            <div className='w-1/3 space-y-2'>
                <p className='text-3xl font-semibold drop-shadow-xl pb-1'>Contact Info</p>
                <div className='flex gap-2'>
                    <img src={elipse} className='w-10' alt="" />
                    <div className='leading-3 my-auto'>
                        <p className='font-semibold'>Email :</p>
                        <p className='font-light italic text-sm'>imeftui@gmail.com</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <img src={elipse} className='w-10' alt="" />
                    <div className='pt-4'>
                        <p className='font-semibold leading-3'>Contact Person :</p>
                        <p className='font-light italic text-sm '>Muhammad Fahish Haritsah (+6282130227727)</p>
                        <p className='font-light italic text-sm leading-3'>Kania Aidilla Firka (+6281511930489)</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div className='bg-light h-1 mt-4'></div>
        <div className='w-full flex flex-col justify-center items-center gap-4 md:flex-row md:items-start md:justify-between pt-4 md:pt-2 px-4'>
            <div>
                <p className='text-center md:text-start text-xl font-semibold mb-1'>Our Social Media :</p>
                <div className='flex gap-2'>
                    <button className='border-2 border-light font-semibold text-xs md:text-base rounded-3xl px-2 md:px-4 hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FCB045] duration-200 bg-size-150 bg-pos-0 hover:bg-pos-100'>INSTAGRAM</button>
                    <button className='border-2 border-light font-semibold text-xs md:text-base rounded-3xl px-2 md:px-4 hover:bg-[#FF0000] hover:text-light hover:border-light duration-200'>YOUTUBE</button>
                    <button className='border-2 border-light text-xs md:text-base font-semibold rounded-3xl px-2 md:px-4 hover:bg-[#0077B5] hover:text-light duration-200'>LINKEDIN</button>

                </div>
            </div>
            <p className='font-light text-xs md:text-sm'>Copyright © Ikatan Mahasiswa Elektro FTUI 2024</p>
        </div>
    </div>
  )
}

export default Footer