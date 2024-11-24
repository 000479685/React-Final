import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import WeaponList from '../../components/weapon_components/WeaponList';
import NavigationDrawer from '../../components/weapon_components/NavigationDrawer';

const WeaponPage = () => {
  return (

    <Box display="flex" minHeight="100vh">
      {/* Navigation on left side */}
      {/* Main content */}
      <Box flexGrow={1} bgcolor="#3e3b31" color="#e0e0d1">
        <Container>
        <NavigationDrawer />
          <Typography variant="h3" gutterBottom>
            Weapons
          </Typography>
          <Typography variant="body1" paragraph>
            Weapons are essential items used for combat against enemies, bosses, critters, and even other players during PvP games...
          </Typography>
          
          {/* Weapon List */}
          <WeaponList />
        </Container>
      </Box>
    </Box>
  );
};

export default WeaponPage;
