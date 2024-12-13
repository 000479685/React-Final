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
import MainPage from './pages/MainPage'
import NoteButton from './components/NoteButton'
import EnemiesCard from './pages/enemies/EnemiesCard'
import EnemySearchResults from './pages/enemies/EnemySearchResults'
import SecretResetPage from './pages/SecretResetPage'
import CharacterHomePage from './pages/characters/CharacterHomePage'
import CharacterDetailsPage from './pages/characters/CharacterDetailsPage'
import CharactersPage from './pages/characters/CharacterPage'

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
    {
      path: '/enemies/:enemyName',
      element: <EnemiesCard></EnemiesCard>
    },
    {
      path: '/enemySearchResults',
      element: <EnemySearchResults></EnemySearchResults>
    },
    {
      path: '/characters_home',
      element: <CharacterHomePage></CharacterHomePage>
    },
    {
      path: '/characters',
      element: <CharactersPage></CharactersPage>
    },
    {
      path: '/characters/:characterId',
      element: <CharacterDetailsPage></CharacterDetailsPage>
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
