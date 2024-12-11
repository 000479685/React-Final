import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Grid2,
} from "@mui/material";
import { useLocation } from "react-router-dom";

const WeaponDetails = () => {
  const location = useLocation();
  const weapon = location.state?.weapon;

  if (!weapon) {
    return <Typography variant="h5">Weapon not found!</Typography>;
  }

  return (
    <Box sx={{ color: "#d6d6d6", backgroundColor: "#1e1e2e" }}>
      <Box>
        <Typography variant="h2" sx={{ borderBottom: 1 }}>
          {weapon.name}
        </Typography>

        <Grid2 container spacing={2}>
          <Grid2 size={8}>
            <Typography variant="h6" sx={{ marginTop: 5 }}>
              {weapon.description}
            </Typography>
          </Grid2>

          <Grid2 size={3}>
            <CardContent>
              <Typography variant="h4" align="center" gutterBottom>
                {weapon.name}
              </Typography>
              <CardMedia
                component="img"
                sx={{
                  width: "100",
                  height: "10vh",
                  objectFit: "contain",
                  padding: 1,
                }}
                image={weapon.image}
                alt={weapon.name}
              />
              <Box>
                <Typography variant="h6" align="center">
                  Type: {weapon.type}
                </Typography>
                <Typography variant="h6" align="center">
                  Damage: {weapon.damage}
                </Typography>
                <Typography variant="h6" align="center">
                  KnockBack: {weapon.knockback}
                </Typography>
              </Box>
            </CardContent>
          </Grid2>
        </Grid2>

        <Typography variant="h4" sx={{ marginTop: 2, borderBottom: 1 }}>
          Notes
        </Typography>

        <Typography sx={{ display: "block" }} variant="h6">
          The Nebula Blaze has a limited amount of aim correction,and can
          automatically readjust and narrow its normal cone of fire to avoid
          striking nearby walls.
        </Typography>

        <Typography sx={{ display: "block" }} variant="h6">
          The projectile can hit enemies through walls at certain angles, even
          though it dissipates upon collision.
        </Typography>

        <Typography sx={{ display: "block" }} variant="h6">
          When selected, it provides a small amount of light.
        </Typography>

        <Typography variant="h4" sx={{ marginTop: 2, borderBottom: 1 }}>
          Animation
        </Typography>  

        <Card
          sx={{
            backgroundColor: "#1e1e2e",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: "60vh",
              height: "50vh",
              objectFit: "contain",
              padding: 1,
            }}
            image={weapon.animation}
            alt={"animation"}
          />
        </Card>
      </Box>
    </Box>
  );
};

export default WeaponDetails;
