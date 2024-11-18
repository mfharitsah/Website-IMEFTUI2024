import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Advocation from './pages/Advocation.jsx'
import Academics from './pages/Academics.jsx'
import Activites from './pages/Activites.jsx'
import { CaraPembayaranBOP, TataCaraBeasiswaUI } from './components/Carousel.jsx'
import Contacts from './pages/Contacts.jsx'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/advocations",
        element: <Advocation />
      },
      {
        path: "/academics",
        element: <Academics />
      },
      {
        path: "/activities",
        element: <Activites />
      },
      {
        path: "/contacts",
        element: <Contacts />
      },
      {
        path: "/advocation/cara-pembayaran-bop",
        element: <CaraPembayaranBOP />
      },
      {
        path: "/advocation/tata-cara-beasiswa-ui",
        element: <TataCaraBeasiswaUI />
      }
    ],
  },
  {
    path: "/",
    element: <Navigate to="/home" />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)