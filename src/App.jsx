import { useState } from 'react'
import {useRoutes} from 'react-router-dom'
import Navbar from './components/navBar'
import WeaponPage from './pages/weapons/WeaponPage'
import Homepage from './pages/HomePage'
import './App.css'
import WeaponDetails from './pages/weapons/WeaponDetails'
import CreatePage from './pages/CreatePage'
import EnemiesHomePage from './pages/enemies/EnemiesHomePage'
import SignInPage from './pages/SignInPage'
import SignupPage from './pages/SignupPage'

function App() {  
  const routes = useRoutes([
    {
      path: '/',
      element: <Homepage></Homepage>
    },
    {
      path: '/home',
      element: <Homepage></Homepage>
    },
    {
      path: '/signin',
      element: <SignInPage></SignInPage>
    },
    {
      path: '/signup',
      element: <SignupPage></SignupPage>
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
    {
      path: '/enemies',
      element: <EnemiesHomePage/>
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
