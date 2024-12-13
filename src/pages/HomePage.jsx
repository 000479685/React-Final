import { Box, Typography, Card, CardMedia } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"


const HomePage = () =>
{
    return (
        <>
        <Box>
            <Typography variant="h2">Not Copyright-infringing Wiki Name</Typography>
            <Card style={{boxShadow:'2px 2px black'}}>
                <Link to={'/main'} style={{textDecoration:'none'}}>
                    <Typography variant="H6">
                        Game Wiki
                    </Typography>
                    <CardMedia
                        component="img"
                        sx={{ width: 100, height: 100, objectFit: 'contain', padding: 1 }}
                        image='https://cdn.pixabay.com/photo/2016/03/31/19/19/dice-1294902_1280.png'
                        alt='Game Wiki Image'>
                    </CardMedia>
                </Link>
            </Card>
        </Box>
        </>
    )
}

export default HomePage