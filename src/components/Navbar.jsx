import React from 'react'

const Navbar = () =>
{
    
    const navigate = useNavigate();
    

    // TODO : handle after confirming database
    const handleSignout = async () => 
    {

    }

    return (
        <AppBar style={{display:'flex', alignItems: 'flex-end'}}>
            <toolbar>
                <Box display="flex" alignItems="flex-end">
                    <Button onClick={handleSignout} variant="outlined" style={{ color: 'white', border: '1px solid white' }}>Signout</Button>
                </Box>
            </toolbar>
        </AppBar>
    )
}