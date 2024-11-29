import { useState } from 'react'
import {useRoutes} from 'react-router-dom'
import Navbar from './components/navBar'
import WeaponPage from './pages/weapons/WeaponPage'
import Homepage from './pages/HomePage'
import './App.css'
import WeaponDetails from './pages/weapons/WeaponDetails'
import CreatePage from './pages/CreatePage'

function App() {  
  const routes = useRoutes([
    {
      path: '/',
      element: <Homepage></Homepage>
    },
    {      
      path: '/weapons',
      element: <WeaponPage />
    },
    {
      path: '/create',
      element: <CreatePage/>
    },
    {
      path: '/weapons/:weaponName',
      element: <WeaponDetails/>
    },    
  ])

  return (
    <>
    <Navbar></Navbar>
    {routes}
    </>
  )
}

export default App
