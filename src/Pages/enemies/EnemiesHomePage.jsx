import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import {Box, TextField, Button} from '@mui/material';
// import enemiesData from '../../data/enemies.json';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

function EnemiesHomePage() {
    
    const [enemies, setEnemies] = useState([]);
    const [searchLetter, setSearchLetter] = useState('')
    const navigate = useNavigate();

    const enemiesCollectionReference = collection(db, "enemies")

    const getEnemiesList = async () => 
    {
        const enemies = await getDocs(enemiesCollectionReference)
        const extractedEnemies = enemies.docs.map((doc) =>
        {
            return {id: doc.id, ...doc.data()}
        })
        // console.log(extractedEnemies)
        setEnemies(extractedEnemies)
    }



    const truncateText = (text) => {
        const maxLength = 100;
        if (text.length > maxLength) {
          return text.slice(0, maxLength) + '...';
        }
        return text;
      };

    const handleDetails = (enemy) => {
        navigate(`/enemies/${enemy.name}`, {state: {enemy}});
    };

    const handleSearch = () => {
        const filteredEnemies = enemies.filter((enemy) => 
            enemy.name.toLowerCase().startsWith(searchLetter.toLowerCase())
        );            
        navigate('/enemySearchResults', {state: filteredEnemies})
    };

    // useEffect(
    //     setEnemies(enemiesData)
    //     // () => {
    //     // fetch('/data/enemies.json')
    //     //     .then(response => {
    //     //         console.log(response); 
    //     //         return response.json();
    //     //     })
    //     //     .then(data => setEnemies(data))
    //     //     .catch(error => console.error('Error fetching enemies:', error));  
    //     // }, []
    //     );

    useEffect(() => {
        getEnemiesList()
    }, [])

    return (
        <div>
            <Typography variant="h3" component="h3" sx={{bgcolor: 'red', color:'white', textAlign: 'center', padding: '5px'}}>
                Mario Wiki Enemies
            </Typography>
            <Box padding='10px' margin='20px'>
                <Typography variant='h6'component= "h6" sx= {{color: 'black', padding: '5px', margin: '30'}}>This article provides a comprehensive list of 
                    general enemies from the Super Mario franchise and
                    its related series.The list includes details about 
                    where each enemy first appeared, covering various 
                    games and media in the Super Mario universe.From iconic early 
                    characters like Goombas and Koopa Troopas in Super Mario Bros. 
                    to complex new foes in modern titles like Super Mario Odyssey 
                    and Super Mario 3D World, these adversaries have played a crucial 
                    role in shaping the gameplay experience.</Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'row' , marginLeft: '150px', marginRight: '150px'}}>
                <TextField sx= {{ flexGrow: 1}} label='Search Enemies by Alphabet here' value={searchLetter || ''} onChange={(e) => setSearchLetter(e.target.value)}></TextField>                
                <Button variant='contained' color= 'primary' sx={{ marginLeft: '10px' }} onClick={handleSearch}>Search</Button>
            </Box>
            <Box sx={{display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '20px',
                marginTop: '20px',
                padding: '10px',
                justifyContent: 'center'
            }}>
                {enemies.map((enemy) => (
                    <Card sx={{ maxWidth: 345 } }key={enemy.id}>
                        <CardMedia
                        sx={{ height: 140 }}
                        image={enemy.image}
                        title={enemy.id}
                        />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {enemy.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {truncateText(enemy.description)}
                        </Typography>
                        
                        <Typography variant="moreInfo" sx={{ color: 'text.secondary' }}>
                            {enemy.variantOf}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant='contained' onClick={() => handleDetails(enemy)}>See Details</Button>
                    </CardActions>
                </Card>
                ))}
            </Box>      
        </div>
    );
}

export default EnemiesHomePage