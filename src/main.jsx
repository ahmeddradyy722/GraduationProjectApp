import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Prediction from './pages/Prediction.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import Sign from './pages/Sign.jsx'

import { 
  createBrowserRouter ,
  RouterProvider,
  Route,
 } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/prediction',
    element: <Prediction/>,
  },
  {
    path: '/services',
    element: <Services/>,
  },
  {
    path:'/contact',
    element:<Contact/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Sign/>
  },
],
{
  basename: '/SugaPredict'  
}
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
