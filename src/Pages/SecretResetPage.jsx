import React from "react"
import weapons from '../data/Weapons.json'
import enemies from '../data/enemies.json'
import { collection, deleteDoc, addDoc } from "firebase/firestore"
import { db } from "../firebaseConfig"
import { Button } from "@mui/material"

const weaponsToExport = weapons.weapons
const enemiestoExport = enemies.enemies

const SecretResetPage = () =>
{
    const weaponsCollectionReference = collection(db, "weapons");
    const enemiesCollectionReference = collection(db, "enemies");

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
            for(let enemy of enemiestoExport)
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


    return (    
        <>
            <Button onClick={handleCreateWeapons} variant="outlined">Reset Weapons</Button>
            <Button onClick={handleCreateEnemies} variant="outlined">Reset Enemies</Button>
        </>
    )
}

export default SecretResetPage