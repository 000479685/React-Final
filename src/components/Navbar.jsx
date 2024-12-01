import { AppBar, Box, Button, Toolbar } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
const Navbar = () =>
{
    
    const navigate = useNavigate();
    

    // TODO : handle after confirming database
    const handleSignout = async () => 
    {

    }

    return (
        <AppBar position='static' enableColorOnDark style={{display:'flex', alignItems: 'flex-end', color: 'red'}}>
            <Toolbar>
                <Box display="flex" alignItems="flex-end">
                    <Button onClick={handleSignout} variant="outlined" style={{ color: 'white', border: '1px solid white' }}>Signout</Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar