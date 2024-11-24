import React from 'react';
import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';

const WeaponItem = ({ weapon }) => {
  return (
    <Grid item xs={6} sm={4} md={3}>
      <Card sx={{ backgroundColor: '#2e2b22', color: '#d4d4c9' }}>
        <CardMedia
          component="img"
          height="60"
          image={weapon.img}
          alt={weapon.name}
        />
        <CardContent>
          <Typography variant="subtitle1" align="center">
            {weapon.name}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default WeaponItem;
