import logo from "../assets/navbar/logo-ime.svg"

import React from 'react'

export const LogoIME = ({style}) => {
  return (
    <div className={`flex gap-1 items-center ${style}`}>
                <div className='flex-col leading-3'>
                    <p className='text-md '>Ikatan Mahasiswa</p>
                    <p className='text-xl font-bold'>Elektro FTUI</p>
                </div>
                <img className="w-12 cursor-pointer" src={logo} alt="Logo IME FTUI"/>
            </div>
  )
}
