import React from 'react';
import { Grid } from '@mui/material';
import WeaponItem from './WeaponItem';



const WeaponList = ({weapons}) => {
  return (
    <Grid container spacing={2}>
      {weapons.map((weapon, index) => (  // Corrected to weapons.weapons
        <WeaponItem key={index} weapon={weapon} />
      ))}
    </Grid>
  );
};

export default WeaponList;