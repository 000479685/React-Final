// src/NavigationDrawer.jsx
import React from 'react';
import { Box, Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';

const navigationItems = [
    { label: 'Main page' },
    { label: 'Recent changes' },
    { label: 'Random page' },
    { label: 'Wiki projects' },
    { label: 'Wiki rules' },
    { label: 'Style guide' },
    { label: 'Community noticeboard' },
    { label: 'Admin noticeboard' },
    { label: 'Help' },
];

const NavigationDrawer = () => {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: 240,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                    width: 240,
                    boxSizing: 'border-box',
                    backgroundColor: '#3e3b36',
                    color: '#fff',
                },
            }}
        >
            <Box sx={{ padding: 2 }}>
                <Typography variant="h6" gutterBottom>
                    Navigation
                </Typography>
                <List>
                    {navigationItems.map((item, index) => (
                        <ListItem button key={index}>
                            <ListItemText primary={item.label} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};

export default NavigationDrawer;
