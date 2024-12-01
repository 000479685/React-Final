import { useState } from 'react'
import {useRoutes} from 'react-router-dom'
import Navbar from './components/navBar'
import WeaponPage from './pages/weapons/WeaponPage'
import Homepage from './pages/HomePage'
import './App.css'
import { useRoutes } from 'react-router-dom'
import WeaponPage from './Pages/WeaponPage'
import MainPage from './Pages/MainPage'

function App() {  
  const routes = useRoutes([
    {
      path: '/',
      element: <Homepage></Homepage>
    },
    {
      //productdetails Page
      path: '/weapons',
      element: <WeaponPage />
    },

  ]);
  return (
    <>
    <Navbar></Navbar>
    {routes}
    </>
  )
}

export default App
