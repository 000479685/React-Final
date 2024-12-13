import { useLocation } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

function EnemySearchResults() {
    const { state } = useLocation();
    const filteredEnemies = state;

    if (!filteredEnemies || filteredEnemies.length === 0) {
        return (
            <Typography
                variant="h6"
                sx={{ textAlign: 'center', marginTop: '20px' }}
            >
                No enemies found.
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
            {filteredEnemies.map((enemy) => (
                <Card sx={{ maxWidth: 345 }} key={enemy.id}>
                    <CardMedia
                        sx={{ height: 300 }}
                        image={enemy.image}
                        title={enemy.name}
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
                </Card>
            ))}
        </Box>
    );
}

export default EnemySearchResults;