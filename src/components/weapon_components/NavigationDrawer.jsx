import React from 'react';
import { Box, Typography, Link } from '@mui/material';


const NavigationDrawer = () => {
    return (
        <Box
          sx={{
            height: '100%',
            backgroundColor: '#3e3b36',
            color: '#fff',
            padding: 2,
          }}
        >
          <Typography sx={{fontSize: 35}} variant="h6" gutterBottom>
            Navigation
          </Typography>
          <Box sx={{fontSize: 25}} display="flex" flexDirection="column" gap={1}>
            <Link href="/" underline="none" color="inherit">
              MainPage
            </Link>
          </Box>
        </Box>
      );
};

export default NavigationDrawer;
