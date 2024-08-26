import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

import bg from "./assets/main/hero-bg.png"
import { Outlet, ScrollRestoration, useLocation, useOutlet } from 'react-router-dom'
import Footer from './components/Footer'
import AnimatedOutlet from './AnimatedOutlet'
import { AnimatePresence } from 'framer-motion'

function App() {

  const location = useLocation();
  const element = useOutlet();

  return (
    <>
      <ScrollRestoration />
      <Navbar />
      {/* <AnimatePresence mode='wait' initial={true}>
        <Outlet key={location.pathname} location={location} />
      </AnimatePresence> */}
      {/* <Outlet /> */}
      < AnimatedOutlet />
      {/* <AnimatePresence mode="wait" initial={true}>
            {element && React.cloneElement(element, { key: location.pathname, location: location })}
        </AnimatePresence> */}
      <Footer />
    </>
  )
}

export default App
