import { Box, Button } from "@mui/material";
import React from "react";
import { auth } from "../firebaseConfig";
import { useLocation } from "react-router-dom";


const validRoutes = 
[
    '/weapons',
    '/enemies',
    '/characters'
]

const NoteButton = () =>
{
    let location = useLocation();
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
                    <Button color="secondary" variant="contained">+ Note</Button>        
                </Box>
            )
        }
    }

    const createNote = () =>
    {
        //This needs to set a global flag that turns page components into something people can interact with
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