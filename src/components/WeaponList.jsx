import React from 'react';
import { Grid } from '@mui/material';
import WeaponItem from './WeaponItem';

const weapons = [
  { name: 'Copper Shortsword', img: 'https://e7.pngegg.com/pngimages/734/639/png-clipart-terraria-video-game-blade-weapon-drawing-weapon.png' },
  { name: 'Wooden Sword', img: 'to be decide' },
  // Add more weapon objects here
];

const WeaponList = () => {
  return (
    <Grid container spacing={2}>
      {weapons.map((weapon, index) => (
        <WeaponItem key={index} weapon={weapon} />
      ))}
    </Grid>
  );
};

export default WeaponList;
