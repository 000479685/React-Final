import React, { useEffect, useState } from "react";
import { Box, Container, Typography, Tooltip } from "@mui/material";
import WeaponList from "../../components/weapon_components/WeaponList";
import NavigationDrawer from "../../components/weapon_components/NavigationDrawer";
// import weapons from "../../data/Weapons.json";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const WeaponPage = () => {
  // Filter weapons by type

  const [weapons, setWeapons] = useState([])
  const meleeWeapons = weapons.filter((item) => item.type === "Melee");
  const rangedWeapons = weapons.filter(
    (item) => item.type === "Ranged"
  );
  const magicWeapons = weapons.filter((item) => item.type === "Magic");
  const summoningWeapons = weapons.filter(
    (item) => item.type === "Summon"
  );

  const weaponsCollectionReference = collection(db, "weapons")
  const getWeaponsList = async () => {
    const weaponsDATA = await getDocs(weaponsCollectionReference)
    const extractedWeapons = weaponsDATA.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data()
      }
    })

    setWeapons(extractedWeapons)
  }

  useEffect(() => {
    getWeaponsList();
  }, [])

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {/* Banner */}
      <Box
        sx={{
          backgroundImage:
            "url(https://forums.terraria.org/index.php?attachments/n-5-png.31587/)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: 400,
        }}
      />

      {/* Content with Navigation Drawer and Main Content */}
      <Box display="flex" flexGrow={1}>
        {/* Navigation Drawer */}
        <Box sx={{ flexShrink: 0 }}>
          <NavigationDrawer />
        </Box>

        {/* Main Content */}
        <Box flexGrow={1} bgcolor="#1e1e2e" color="#e0e0d1" padding={5}>
          <Box sx={{ display: 'flex', gap: 7, }}>
            <img style={{ width: 250, height: 250 }} src="https://static.wikia.nocookie.net/terraria_gamepedia/images/c/c9/Empress_of_Light.gif" alt="Empress of light" />
            <img style={{ width: 200, height: 250 }} src="https://media.tenor.com/zmhKFTWzJd8AAAAi/terraria-boss.gif" alt="twin cluthu boss" />
            <img style={{ width: 200, height: 250 }} src="https://media.tenor.com/_y0Bs-HbVVsAAAAi/moonlord-cthulhu.gif" alt="Moonlord Cthulhu" />
            <img style={{ width: 200, height: 250 }} src="https://media.tenor.com/hP_X6-PIe6wAAAAi/terraria-santa.gif" alt="Santa" />
            <img style={{ width: 150, height: 250 }} src="https://static.wikia.nocookie.net/terraria_gamepedia/images/1/1c/Lunatic_Cultist.gif" alt="Lunatic Cultist" />
            <img style={{ width: 250, height: 250 }} src="https://media.tenor.com/SfjEpazhre0AAAAi/terraria-wall-of-flesh.gif" alt="Wall of Flesh" />
          </Box>

          <Container>
            <Typography variant="h3" gutterBottom>
              Weapons
            </Typography>
            <Typography
              sx={{ backgroundColor: "#1e1e2e" }}
              fontSize={20}
              variant="body1"
              paragraph
            >
              Weapons are essential items used for combat against enemies,
              bosses, critters, and even other players during PvP games. Some
              weapons can be crafted at a Work Bench or a Pre-Hardmode/Hardmode
              Anvil, while others can only be found in Chests, as enemy drops,
              or purchased from NPCs. Terraria has a wide variety of weapons and
              weapon classes, each suited to particular play styles or specific
              tasks. Most tools can also be used as weapons, despite it not
              being their primary purpose. Traps, self-defending NPCs , and even
              lava, although not primarily weapons, can be considered a weapon
              if somehow used in combat.
            </Typography>

            {/* Melee Weapons */}
            <Box marginBottom={4}>
              <Typography sx={{ borderTop: 1 }} variant="h4" gutterBottom>
                <Typography sx={{ display: 'inline' }}>
                  <Tooltip title="Please dont use these sword on me (｡･ˇ_ˇ･｡) !" arrow>
                    <img
                      style={{
                        width: 100,
                        height: 100,
                      }}
                      src="https://media.tenor.com/m9hW1bjQQgAAAAAi/%D0%BA%D1%83%D1%81%D1%82-%D0%B8%D0%B7-%D1%82%D0%B5%D1%80%D1%80%D0%B0%D1%80%D0%B8%D0%B8.gif"
                      alt="tree"
                    />
                  </Tooltip>

                </Typography>
                Melee Weapons
              </Typography>
              <WeaponList weapons={meleeWeapons} />
            </Box>

            {/* Ranged Weapons */}
            <Box marginBottom={4}>
              <Typography variant="h4" gutterBottom>

                <Typography sx={{ display: 'inline' }}>
                  <img style={{ marginRight: 20, width: 100, height: 100 }} src="https://media.tenor.com/uWw3AEsunZQAAAAi/red-slime.gif" alt="slime" />
                </Typography>
                Ranged Weapons
              </Typography>
              <WeaponList weapons={rangedWeapons} />
            </Box>

            {/* Magic Weapons */}
            <Box marginBottom={4}>
              <Typography variant="h4" gutterBottom>
                <Typography sx={{ display: 'inline' }}>
                  <img style={{ marginRight: 20, width: 100, height: 100 }} src="https://media.tenor.com/DuDgh73Qw34AAAAj/terraria.gif" alt="orb" />
                </Typography>
                Magic Weapons
              </Typography>
              <WeaponList weapons={magicWeapons} />
            </Box>

            {/* Summon Weapon  */}
            <Box marginBottom={4}>
              <Typography sx={{ display: 'inline' }}>
                <img style={{ marginRight: 20, width: 100, height: 100 }} src="https://media.tenor.com/NmGvb-b0jpAAAAAi/deerclops.gif" alt="orb" />
              </Typography>
              <Typography variant="h4" gutterBottom>
                Summon Weapons
              </Typography>
              <WeaponList weapons={summoningWeapons} />
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default WeaponPage;