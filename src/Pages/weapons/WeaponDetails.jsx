import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { useLocation } from 'react-router-dom';

const WeaponDetails = () => {
  const location = useLocation();
  const weapon = location.state?.weapon;

  if (!weapon) {
    return <Typography variant="h5">Weapon not found!</Typography>;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 2,
        bgcolor: '#1e1e2e',
        color: '#e0e0d1',
        gap: 3, 
        height: '100vh', 
        width: '100vw', 
      }}
    >
      {/* Left Card */}
      <Card sx={{
        backgroundColor: '#080E4B',
        color: '#d4d4c9',
        width: '45%',
        height: '100',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
      }}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom>
            {weapon.name}
          </Typography>
          <CardMedia
            component="img"
            sx={{ width: '100%', height: 200, objectFit: 'contain', padding: 1 }}
            image={weapon.image}
            alt={weapon.name}
          />
          <Box>
            <Typography variant="body1" align="center">
                Type: {weapon.type}
            </Typography>
            <Typography variant="body1" align="center">
                Damage: {weapon.damage}
            </Typography>
            <Typography variant="body1" align="center">
                Damage: {weapon.description}
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {/* Right Card */}
      <Card sx={{
        backgroundColor: '#1e1e2e',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <CardMedia
            component="img"
            sx={{ width: '100vh', height: '50vh', objectFit: 'contain', padding: 1 }}
            image={weapon.animation}
            alt={"animation"}
          />
      </Card>
    </Box>
  );
};

export default WeaponDetails;