import { useState } from 'react'
import './App.css'
import { useRoutes } from 'react-router-dom'
import WeaponPage from './Pages/WeaponPage'
import MainPage from './Pages/MainPage'

function App() {

  let element = useRoutes([
    {
      //go to home page
      path: '/',
      element: <MainPage />
    },
    {
      //productdetails Page
      path: '/weapons',
      element: <WeaponPage />
    },

  ]);
  return (
    <>
      {element}
    </>
  )
}

export default App
