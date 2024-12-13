import { Box, Typography, Card, CardMedia } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"


const HomePage = () =>
{
    return (
        <>
        <Box sx={{bgcolor:'gray', height:'300px'}}>
            <Typography variant="h2" sx={{textShadow:'2px 2px 3px white', marginLeft:'20px'}}>Not Copyright-infringing Wiki Name</Typography>
            <Box display={'flex'} margin={'50px'}>
            <Card style={{boxShadow:'2px 2px 5px black',  width:'150px', justifyContent:'center', alignContent:'center'}}>
                <Link to={'/main'} style={{textDecoration:'none'}}>
                    <Typography variant="H6" textAlign={'center'} marginLeft={'30px'}>
                        Game Wiki
                    </Typography>
                    <CardMedia
                        component="img"
                        sx={{ width: 100, height: 100, objectFit: 'contain', padding: 1, marginLeft:'25px'}}
                        image='https://cdn.pixabay.com/photo/2016/03/31/19/19/dice-1294902_1280.png'
                        alt='Game Wiki Image'>
                    </CardMedia>
                </Link>
            </Card>
            </Box>
        </Box>
        </>
    )
}

export default HomePage