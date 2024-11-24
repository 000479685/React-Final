import { useState } from 'react'
import './App.css'
import { useRoutes } from 'react-router-dom'
import WeaponPage from './Pages/WeaponPage'
import MainPage from './Pages/MainPage'
import WeaponDetails from './Pages/WeaponDetails'

function App() {

  let element = useRoutes([
    {
      //go to home page
      path: '/',
      element: <MainPage />
    },
    {
      path: '/weapons',
      element: <WeaponPage />
    },
    {
      path: '/weapons/:weaponName',
      element: <WeaponDetails />
    },

  ]);
  return (
    <>
      {element}
    </>
  )
}

export default App
