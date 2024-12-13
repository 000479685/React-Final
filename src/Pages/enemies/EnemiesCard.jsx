import { useLocation } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Box } from '@mui/material';

function EnemiesCard() {
    const { state } = useLocation();
    const enemy = state?.enemy;

    if (!enemy) {
        return (
            <Typography
                variant="h6"
                sx={{ textAlign: 'center', marginTop: '20px' }}
            >
                No enemy data available.
            </Typography>
        );
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                backgroundColor: '#f5f5f5',
                padding: '20px',
            }}
        >
            <Card sx={{ maxWidth: 345 }} key={enemy.id}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={enemy.image}
                        alt={enemy.name}
                        sx={{
                            height: '300px',
                            objectFit: 'cover',
                            borderTopLeftRadius: '10px',
                            borderTopRightRadius: '10px',
                        }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {enemy.name}
                        </Typography>
                        <Typography variant="h6" component="div">
                            {enemy.variantOf}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: 'text.secondary' }}
                        >
                            {enemy.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
}

export default EnemiesCard;