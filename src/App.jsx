import { useState } from 'react'
import {useRoutes} from 'react-router-dom'
import Navbar from './components/Navbar'
import WeaponPage from './Pages/weapons/WeaponPage'
import Homepage from './pages/HomePage'
import './App.css'
import MainPage from './Pages/MainPage'
import WeaponDetails from './Pages/weapons/WeaponDetails';
import CreatePage from './pages/CreatePage'
import EnemiesHomePage from './pages/enemies/EnemiesHomePage'
import SignInPage from './Pages/SignInPage'
import SignupPage from './pages/SignupPage'
import MainPage from './pages/MainPage'
import NoteButton from './components/NoteButton'
import EnemiesCard from './pages/enemies/EnemiesCard'
import EnemySearchResults from './pages/enemies/EnemySearchResults'
import SecretResetPage from './pages/SecretResetPage'

function App() {  
  const routes = useRoutes([
    {
      path: '/',
      element: <Homepage />
    },
    {
      path: '/home',
      element: <Homepage></Homepage>
    },
    {
      path: '/main',
      element: <MainPage></MainPage>
    },
    {
      path: 'secret',
      element: <SecretResetPage></SecretResetPage>
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
      path: '/weapons/:weaponName',
      element: <WeaponDetails/>
    }, 
    {
      path: '/create',
      element: <CreatePage/>
    },   
    {
      path: '/enemies',
      element: <EnemiesHomePage/>
    },
    {
      path: '/enemies/:enemyName',
      element: <EnemiesCard></EnemiesCard>
    },
    {
      path: '/enemySearchResults',
      element: <EnemySearchResults></EnemySearchResults>
    }
  ])

  return (
    <>
    <Navbar></Navbar>
    <NoteButton></NoteButton>
    {routes}
    </>
  )
}

export default App
