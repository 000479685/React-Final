import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import WeaponList from '../components/WeaponList';
import NavigationDrawer from '../components/NavigationDrawer';

const WeaponPage = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {/* Banner */}
      <Box
        sx={{
          backgroundImage: 'url(https://osdanovahub.weebly.com/uploads/4/9/8/4/49844611/307106_orig.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: '#e0e0d1',
          padding: 4,
          height: 300,
        }}
      ></Box>

      {/* Content with Navigation Drawer and Main Content */}
      <Box display="flex" flexGrow={1}>
        {/* Navigation Drawer */}
        <Box sx={{ width: 240, flexShrink: 0 }}>
          <NavigationDrawer />
        </Box>

        {/* Main Content */}
        <Box flexGrow={1} bgcolor="#3e3b31" color="#e0e0d1" padding={3}>
          <Container>
            <Typography variant="h3" gutterBottom>
              Weapons
            </Typography>
            <Typography variant="body1" paragraph>
              Weapons are essential items used for combat against enemies, bosses, critters, and even other players during PvP games. Explore a variety of weapon types to fit your playstyle!
            </Typography>

            {/* Weapon List */}
            <WeaponList />
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default WeaponPage;
