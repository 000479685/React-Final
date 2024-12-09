import React from 'react';
import { Grid } from '@mui/material';
import WeaponItem from './WeaponItem';
import weapons from '../../Data/Weapons.json'; // Correct import

const WeaponList = () => {
  return (
    <Grid container spacing={2}>
      {weapons.weapons.map((weapon, index) => (  // Corrected to weapons.weapons
        <WeaponItem key={index} weapon={weapon} />
      ))}
    </Grid>
  );
};

export default WeaponList;
