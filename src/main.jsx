import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Advocation from './pages/Advocation.jsx'
import Academics from './pages/Academics.jsx'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/advocation",
        element: <Advocation />
      },
      {
        path: "/academics",
        element: <Academics />
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
