import { useState } from 'react'
import {useRoutes} from 'react-router-dom'
import Navbar from './components/Navbar'
import WeaponPage from './pages/weapons/WeaponPage'
import Homepage from './pages/HomePage'
import './App.css'
import MainPage from './Pages/MainPage'
import WeaponDetails from './Pages/weapons/WeaponDetails';
import CreatePage from './pages/CreatePage'

function App() {  
  const routes = useRoutes([
    {
      path: '/',
      element: <Homepage />
    },
    {
      //productdetails Page
      path: '/weapons',
      element: <WeaponPage />
    },
    {
      path: '/weapons/:weaponName',
      element: <WeaponDetails/>
    }, 
    {
      path: '/create',
      element: <CreatePage/>
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
