import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import WeaponList from '../../components/weapon_components/WeaponList';
import NavigationDrawer from '../../components/weapon_components/NavigationDrawer';
import weapons from '../../Data/Weapons.json';

const WeaponPage = () => {
  // Filter weapons by type
  const meleeWeapons = weapons.weapons.filter((item) => item.type === 'Melee');
  const rangedWeapons = weapons.weapons.filter((item) => item.type === 'Ranged');
  const magicWeapons = weapons.weapons.filter((item) => item.type === 'Magic');

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
      />

      {/* Content with Navigation Drawer and Main Content */}
      <Box display="flex" flexGrow={1}>
        {/* Navigation Drawer */}
        <Box sx={{flexShrink: 0 }}>
          <NavigationDrawer />
        </Box>

        {/* Main Content */}
        <Box flexGrow={1} bgcolor="#3e3b31" color="#e0e0d1" padding={3}>
          <Container>
            <Typography variant="h3" gutterBottom>
              Weapons
            </Typography>
            <Typography variant="body1" paragraph>
              Weapons are essential items used for combat against enemies, bosses, critters, and even other players
              during PvP games. Explore a variety of weapon types to fit your playstyle!
            </Typography>

            {/* Melee Weapons */}
            <Box marginBottom={4}>
              <Typography variant="h4" gutterBottom>
                Melee Weapons
              </Typography>
              <WeaponList weapons={meleeWeapons} />
            </Box>

            {/* Ranged Weapons */}
            <Box marginBottom={4}>
              <Typography variant="h4" gutterBottom>
                Ranged Weapons
              </Typography>
              <WeaponList weapons={rangedWeapons} />
            </Box>

            {/* Magic Weapons */}
            <Box marginBottom={4}>
              <Typography variant="h4" gutterBottom>
                Magic Weapons
              </Typography>
              <WeaponList weapons={magicWeapons} />
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default WeaponPage;
