import React, { useEffect } from 'react'
import { preLoaderAnim } from '../animations';

const Preloader = () => {

    const textGrandientStyle = "text-blue-1 text-opacity-0 bg-gradient-to-b from-blue to-blue-1 bg-clip-text inline-block";

    useEffect(() => {
        preLoaderAnim()
    }, []);

  return (
    <div className='preloader h-screen w-full bg-dark fixed z-30 flex justify-center items-center bottom-0 right-0 left-0 overflow-hidden'>
        <div id='3-nilai' className={`texts-container flex items-center justify-between gap-8 h-fit w-fit text-2xl lg:text-3xl font-semibold overflow-hidden ${textGrandientStyle}`}>
            <span>Adaptif,</span>
            <span>Progresif,</span>
            <span>Komprehensif</span>
        </div>
    </div>
  )
}

export default Preloader