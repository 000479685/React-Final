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
import weapons from "../../data/Weapons.json"

const WeaponDetails = () => {
  const location = useLocation();

  //get weapon name from url
  const index = location.pathname.search(/\/weapons\//i);
  console.log(index);
  const weapName =
    index !== -1 ? decodeURIComponent(location.pathname.substring(index + 9)) : null;
  const weapon = weapons.weapons.find((w) => w.name.toLowerCase() === weapName?.toLowerCase());

  if (!weapon) {
    return (
      <Typography variant="h5" align="center">
        Weapon not found!
      </Typography>
    );
  }

  return (
    <Box sx={{ color: "#d6d6d6", backgroundColor: "#1e1e2e" }}>
      <Box>
        <Typography variant="h2" sx={{ padding: 5, borderBottom: 1 }}>
          {weapon.name}
        </Typography>

        <Grid2 container spacing={2}>
          <Grid2 size={8}>
            <Typography variant="h6" sx={{ marginTop: 5 }}>
              {weapon.description}
            </Typography>
          </Grid2>

          <Grid2 size={3}>
            <Box sx={{ border: 5 }}>
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
                  <Typography color="cyan" variant="h6" align="center">
                    Type: <Typography variant="h6" color="white" display="inline" > {weapon.type}</Typography>
                  </Typography>

                  <Typography color="cyan" variant="h6" align="center">
                    Damage: <Typography variant="h6" color="white" display="inline" > {weapon.damage}</Typography>
                  </Typography>

                  <Typography color="cyan" variant="h6" align="center">
                    Knockback: <Typography variant="h6" color="white" display="inline" > {weapon.knockback}</Typography>
                  </Typography>

                  <Typography color="cyan" variant="h6" align="center">
                    Projectile Created
                    {weapon.projectile1 && weapon.projectile2 ? (
                      <Grid2 sx={{alignItems: "center",justifyContent: "center",display: "flex",}}containerspacing={2}>
                        <Grid2>
                          <CardMedia
                            component="img"
                            sx={{ width: 80, height: "10vh", padding: 1 }}
                            image={weapon.projectile1}
                            alt={weapon.name}
                          />
                        </Grid2>

                        <Grid2>
                          <CardMedia
                            component="img"
                            sx={{ width: 80, height: "10vh", padding: 1 }}
                            image={weapon.projectile2}
                            alt={weapon.name}
                          />
                        </Grid2>
                      </Grid2>
                    ) : (
                      <Typography> no Projectile </Typography>
                    )}
                  </Typography>

                  <Typography  color="cyan" variant="h6" align="center">
                    Rarity: <Typography display='inline' color="red"> RED </Typography>
                  </Typography>

                </Box>
              </CardContent>
            </Box>
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
