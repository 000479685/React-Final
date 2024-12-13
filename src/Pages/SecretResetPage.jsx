import React from "react"
import weapons from '../data/Weapons.json'
import enemies from '../data/enemies.json'
import characters from '../data/CharacterData.json'
import { collection, deleteDoc, addDoc } from "firebase/firestore"
import { db } from "../firebaseConfig"
import { Button } from "@mui/material"

const weaponsToExport = weapons.weapons
const enemiesToExport = enemies.enemies
const charactersToExport = characters

const SecretResetPage = () =>
{
    const weaponsCollectionReference = collection(db, "weapons");
    const enemiesCollectionReference = collection(db, "enemies");
    const charactersCollectionReference = collection(db, "characters");

    const clearWeaponCollection = async () => 
    {
        
    }

    const handleCreateWeapons = async () =>
    {
        try
        {
            // console.log(weapons)
            // console.log(weapons[0], weapons[1])
            // console.log(typeof(weapons), weapons.size)
            // console.log(weapons.weapons[9])

            // console.log(weaponsCollectionReference)
            // if(weaponsCollectionReference.doc('uid').get())
            // {
            // await deleteDoc(weaponsCollectionReference)
            // }

            

            for(let weapon of weaponsToExport)
            {
                console.log(weapon)
                await addDoc(weaponsCollectionReference, weapon)
            }
        }
        catch (error)
        {
            console.log(error)
        }
    }

    const handleCreateEnemies = async () =>
    {
        try
        {
            for(let enemy of enemiesToExport)
            {
                console.log(enemy)
                await addDoc(enemiesCollectionReference, enemy)
            }
        }
        catch (error)
        {
            console.log(error)
        }
    }

    const handleCreateCharacters = async () =>
    {
        try
        {
            for(let character of charactersToExport)
            {
                console.log(character)
                await addDoc(charactersCollectionReference, character)
            }
        }
        catch (error)
        {
            console.log(error)
        }
    }


    return (    
        <>
            <Button onClick={handleCreateWeapons} variant="outlined">Reset Weapons</Button>
            <Button onClick={handleCreateEnemies} variant="outlined">Reset Enemies</Button>
            <Button onClick={handleCreateCharacters} variant="outlined">Reset characters</Button>
        </>
    )
}

export default SecretResetPage