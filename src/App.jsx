import React from 'react'
import './App.css'
import Navbar from './components/Navbar'

import bg from "./assets/main/hero-bg.png"
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <ScrollRestoration />
        <Navbar />
      <Outlet />
        <Footer />
    </>
  )
}

export default App
