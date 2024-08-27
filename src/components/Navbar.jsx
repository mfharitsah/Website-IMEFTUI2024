import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from "framer-motion"
import { Link } from 'react-router-dom'
import { LogoIME } from './LogoIME'
import burger from '../assets/navbar/burger-bar.png'
import close from '../assets/navbar/close.png'

const Navbar = () => {

    const menus = [
        "Home",
        "Activities",
        "Advocation",
        "Academics",
        "Contacts"
    ]

    const hoverGradientStyle = "hover:text-opacity-0 hover:bg-gradient-to-b hover:from-blue hover:to-blue-1 hover:bg-clip-text hover:inline-block"


    const burgerStyle =
    "burger-item w-8 h-1 mb-1 bg-light ease-in-out duration-150 ";

    const { scrollY } = useScroll()
    const opacityOff = useTransform(scrollY, [0, 540], ["#00000000", "#000000"]);

    let [open, setOpen] = useState(false)
    let closeMenu = () => setOpen(false)

return (
    <motion.nav 
        className="navigation-bar fixed top-0 z-20 w-screen h-20 px-10 md:px-16 flex items-center justify-between  text-light"
        style={{
            backgroundColor: opacityOff,
        }}
        >
            <LogoIME 
                style={""}
            />
            <div
                className={"nav-links duration-300 bg-dark bg-opacity-60 md:bg-opacity-0 absolute py-20 md:static  md:min-h-fit min-h-screen left-0 md:w-auto w-full flex items-center px-5 justify-center " + (open ? "top-0 " : "-top-[1000%]")}>
                <ul className={ "flex md:flex-row flex-col items-center md:items-center md:gap-[4vw] gap-8 "}>
                {
                    menus.map((menu, i) => (
                        <li key={i} onClick={closeMenu}>
                            <a className={`${hoverGradientStyle} text-light duration-300 text-2xl md:text-lg `} href={menu.toLowerCase()}>{menu}</a>
                        </li>
                    ))
                }
                </ul>
            </div>
            <div
                id="navigation-burger"
                onClick={() => setOpen(!open)}
                className="cursor-pointer md:hidden z-10"
            >
                <div className={burgerStyle + (open && "relative rotate-45 top-2 ")} />
                <div className={burgerStyle + (open && "relative rotate-45 ")} />
                <div
                className={
                    burgerStyle + "mb-0 " + (open && "relative -rotate-45 bottom-2 ")
                }
                />
            </div>
    </motion.nav>
  )
}

export default Navbar