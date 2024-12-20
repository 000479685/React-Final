import React from 'react';
import { Box, Typography, Link, Tooltip } from '@mui/material';


const NavigationDrawer = () => {
  return (
    <Box
      sx={{
        height: '100%',
        backgroundColor: '#171726',
        color: '#fff',
        padding: 2,
      }}
    >
      <Typography sx={{ fontSize: 35 }} variant="h6" gutterBottom>
        Navigation
      </Typography>
      <Box sx={{ fontSize: 20 }} display="flex" flexDirection="column" gap={1}>
        <Link href="/" underline="none" color="inherit">
          MainPage
        </Link>
        <Link href="/enemies" underline="none" color="inherit">
          Enemies
        </Link>
        <Link href="/characters_home" underline="none" color="inherit">
          Characters
        </Link>
        <Tooltip title="Cool WEAPONS mate !" arrow>
          <img
            style={{
              position: 'fixed',
              marginTop: 150,
              width: 100,
              height: 100,
            }}
            src="https://media.tenor.com/94XLrPV8vgsAAAAi/terraria-honey-bee.gif"
            alt="Bee"
          />
        </Tooltip>
      </Box>
    </Box>
  );
};

export default NavigationDrawer;
