import React, { useState } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { LogoIME } from './LogoIME';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menus = [
        { name: "Home", link: "home", isDropdown: false },
        { name: "Activities", link: "activities", isDropdown: true },
        { name: "Advocations", link: "advocations", isDropdown: false },
        { name: "Academics", link: "academics", isDropdown: false },
        { name: "Contacts", link: "contacts", isDropdown: false },
    ];

    const dropdownItems = [
        { name: "Triwulan I", link: "twi" },
        { name: "Triwulan II", link: "twii" },
        { name: "Triwulan IIIA", link: "twiiia" },
        { name: "Triwulan IIIB", link: "twiiib" },
    ];

    const hoverGradientStyle = "hover:text-opacity-0 hover:bg-gradient-to-b hover:from-blue hover:to-blue-1 hover:bg-clip-text hover:inline-block";
    const burgerStyle = "burger-item w-8 h-1 mb-1 bg-light ease-in-out duration-150 ";

    const { scrollY } = useScroll();
    const opacityOff = useTransform(scrollY, [0, 540], ["#00000000", "#000000"]);

    const [open, setOpen] = useState(false);

    const closeMenu = () => setOpen(false);

    return (
        <motion.nav
            className="navigation-bar fixed top-0 z-20 w-screen h-20 px-10 md:px-16 flex items-center justify-between text-light"
            style={{
                backgroundColor: opacityOff,
            }}
        >
            <LogoIME style={""} />
            <div
                className={`nav-links duration-300 bg-dark bg-opacity-60 md:bg-opacity-0 absolute py-20 md:static md:min-h-fit min-h-screen left-0 md:w-auto w-full flex items-center px-5 justify-center ${open ? "top-0" : "-top-[1000%]"
                    }`}
            >
                <ul className="nav-list flex md:flex-row flex-col items-center md:items-center md:gap-[4vw] gap-5">
                    {menus.map((menu, i) => (
                        <li
                            key={i}
                            className={`relative px-3 ${menu.isDropdown ? "group" : ""}`}
                        >
                            <Link
                                className={`${hoverGradientStyle} nav-item pb-2 text-light font-semibold duration-300 text-2xl md:text-lg cursor-pointer`}
                                to={menu.link}
                                smooth={true}
                                duration={500} // Animasi scroll
                                offset={-80} // Offset untuk navbar tetap
                                onClick={closeMenu}
                            >
                                {menu.name}
                            </Link>

                            {menu.isDropdown && (
                                <ul className="dropdown-menu w-28">
                                    {dropdownItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                className="text-sm font-semibold py-2 hover:text-white cursor-pointer"
                                                to={`activities#${item.link}`}
                                                smooth={true}
                                                duration={500}
                                                offset={-80}
                                                onClick={closeMenu}
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div
                id="navigation-burger"
                onClick={() => setOpen(!open)}
                className="cursor-pointer md:hidden z-10"
            >
                <div className={`${burgerStyle} ${open && "relative rotate-45 top-2"}`} />
                <div className={`${burgerStyle} ${open && "relative rotate-45"}`} />
                <div className={`${burgerStyle} mb-0 ${open && "relative -rotate-45 bottom-2"}`} />
            </div>
        </motion.nav>
    );
};

export default Navbar;
