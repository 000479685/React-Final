import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
const Navbar = () =>
{
    
    const navigate = useNavigate();
    

    // TODO : handle after confirming database
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
                        <Button onClick={handleSignout} variant="outlined" style={{ color: 'white', border: '1px solid white' }}>Signout</Button> 
                        <Button onClick={() => console.log(auth.currentUser)} style={{ color: 'white', border: '1px solid white' }}>Check user</Button>
                        <Button onClick={moveToCreatePage} variant='outlined' style={{ color: 'white', border: '1px solid white' }}>Create Pages</Button>                                    
                        </>
                        )
                        :
                        <Button onClick={moveToSignInPage} variant='outlined' style={{ color: 'white', border: '1px solid white' }}>Signin</Button>                                    
    }

    return (        
        <AppBar position='static' enableColorOnDark style={{display:'flex', alignItems: 'flex-end', color: 'red'}}>
            <Toolbar>
                <Box display="flex" alignItems="flex-end">
                {                                
                    renderUserState()
                }                
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar