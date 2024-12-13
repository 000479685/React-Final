import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';

const validRoutes = 
[
    '/weapons/',
    '/enemies/',
    '/characters/'
]

const Navbar = () =>
{
    
    const navigate = useNavigate();
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
    
        const renderEditPageButton = () =>
        {
            if(checkIfValidPage() && checkForUserLoggedIn())
            {
                return (
                    <Button onClick={moveToCreatePage} variant='outlined' style={{ color: 'white', border: '1px solid white' }}>Edit Page</Button>
                )
            }
        }

    
    const handleSignout = async () => 
    {
        try{
            await signOut(auth);
            navigate('/');
        }
        catch (error)
        {
            console.log(error)
        }
    }

    const moveToSignInPage = () =>
    {
        navigate('/signin')
    }

    const moveToCreatePage = () =>
    {
        navigate('/create')
    }

    const renderUserState = () =>
    {
        return auth.currentUser ? 
                        (
                        <>
                        {/* {renderEditPageButton()} */}
                        {/* <Button onClick={() => console.log(auth.currentUser, auth.currentUser.email)} style={{ color: 'white', border: '1px solid white' }}>Check user</Button> */}
                        {checkForUserLoggedIn() ? <Button onClick={moveToCreatePage} variant='outlined' style={{ color: 'white', border: '1px solid white' }}>Create Pages</Button> : <></>}
                        <Button onClick={handleSignout} variant="outlined" style={{ color: 'white', border: '1px solid white' }}>Signout</Button> 
                        </>
                        )
                        :
                        <Button onClick={moveToSignInPage} variant='outlined' style={{ color: 'white', border: '1px solid white' }}>Signin</Button>                                    
    }

    return (        
        <AppBar position='static' enableColorOnDark style={{display:'flex', color: 'red', background:'black'}}>
            <Toolbar style={{justifyContent: 'space-between'}}>
                <Typography variant='h2' color='red' >
                    <Link to={'/'} style={{textDecoration:'none', color:'brown'}}>
                        WIKI
                    </Link>
                </Typography>
                <Box display="flex" alignItems="flex-end" gap='5px'>
                {                                
                    renderUserState()
                }                
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar