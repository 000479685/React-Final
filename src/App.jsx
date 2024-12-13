import { useState } from 'react'
import {useRoutes} from 'react-router-dom'
import Navbar from './components/Navbar'
import WeaponPage from './pages/weapons/WeaponPage'
import Homepage from './pages/HomePage'
import './App.css'
import MainPage from './pages/MainPage'
import WeaponDetails from './Pages/weapons/WeaponDetails';
import CreatePage from './pages/CreatePage'
import EnemiesHomePage from './pages/enemies/EnemiesHomePage'
import SignupPage from './pages/SignupPage'
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
