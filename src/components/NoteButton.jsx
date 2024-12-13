import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { auth, db } from "../firebaseConfig";
import { useLocation } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";


const validRoutes = 
[
    '/weapons',
    '/enemies',
    '/characters'
]

const NoteButton = () =>
{
    let location = useLocation();

    const [notesInfo, setNotesInfo] = useState({
        userId: auth.currentUser,        
    })

    const userNotesCollectionReference = collection(db, "userNotes")

    const checkIfValidPage = () =>
    {
        //gets the information about the page and if it is one that can be edited        
        
        for (let i of validRoutes)    
        {
            if(location.pathname.includes(i))
            {
                return true
            }
        }        

        return false
    }    

    const checkForUserLoggedIn = () =>
    {
        return auth.currentUser
    }

    const renderButton = () =>
    {
        if(checkIfValidPage() && checkForUserLoggedIn())
        {
            return (
                <Box position='fixed' top='90%' left='5%'>
                    <Button color="secondary" variant="contained" onClick={openNoteOverlay}>+ Note</Button>        
                </Box>
            )
        }
    }

    const openNoteOverlay = () =>
    {
        
    }

    const createNote = async () =>
    {
        //This needs to set a global flag that turns page components into something people can interact with
        try{            
            await addDoc(userNotesCollectionReference, notesInfo)
        }
        catch (error)
        {
            console.log(error)
        }
    }

    return (
        <>
            {
                renderButton()
            }
        </>
    )
}

export default NoteButton

/*Either make this 
*    position: absolute 
*       To make it relative to another element in the page
*    position: fixed
*       For ensuring it is always on a certain point in the screen 
*/