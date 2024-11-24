import React from 'react';
import { Card, CardMedia, CardContent, Typography, Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom'; 

const WeaponItem = ({ weapon }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ backgroundColor: '#2e2b22', color: '#d4d4c9', display: 'flex', alignItems: 'center' }}>
        {/* Image on the left */}
        <Link to={`/weapons/${weapon.name}`} state={{ weapon }} style={{ textDecoration: 'none' }}>
          <CardMedia
            component="img"
            sx={{ width: 100, height: 100, objectFit: 'contain', padding: 1 }}
            image={weapon.image}
            alt={weapon.name}
          />
        </Link>

        {/* Info on the right */}
        <Box sx={{ height:170, display: 'flex', flexDirection: 'column', flex: 1 }}>
          <CardContent>
            <Typography variant="subtitle1" align="left" gutterBottom>
              {weapon.name}
            </Typography>
            <Typography variant="body2" align="left">
              {weapon.type} - {weapon.damage} Damage
            </Typography>
            <Typography variant="body2" align="left" sx={{ marginTop: 1 }}>
              KnockBack : {weapon.knockback}
            </Typography>
            <Typography variant="body2" align="left" sx={{ marginTop: 1 }}>
              {weapon.description}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Grid>
  );
};

export default WeaponItem;
