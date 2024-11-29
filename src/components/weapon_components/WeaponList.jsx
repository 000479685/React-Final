import React from 'react';
import { Grid } from '@mui/material';
import WeaponItem from './WeaponItem';
import weapons from '../../data/Weapons.json'


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
