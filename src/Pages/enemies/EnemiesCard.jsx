import { useLocation } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Box } from '@mui/material';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { useEffect, useState } from 'react';

function EnemiesCard() {
    
    const enemiesCollectionReference = collection(db, "enemies")
    const location = useLocation();
    
    const [enemiesList, setEnemiesList] = useState([]);    
    const [enemy, setEnemy] = useState(location.state ? location.state.enemy : {})
    
    
    const regex = '/\/enemies\//i'
    const enemyName = location.pathname.slice(location.pathname.search(regex) + 10);        
    
    

            
            

            
    const findEnemy = () =>
    {
        console.log("finding started", enemiesList)
        for (let enemyData of enemiesList)
        {
            if(enemyData.name == decodeURI(enemyName))
            {
                setEnemy(enemyData)
                return
            }
        }
        return
    }
                
    const checkForEnemy = () =>
    {                
        // console.log(enemy, enemy.id)
        if (!enemy) {
            // console.log("enemy does not exist")
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
        )
    }
    
    
    useEffect(() => {
        // console.log(decodeURI(enemyName))

        const getEnemiesList = async () => 
            {            
                try{                
                const enemiesDoc = await getDocs(enemiesCollectionReference);                        
                const extractedEnemies = await enemiesDoc.docs.map((doc) => 
                    {
                        return {
                            id: doc.id,
                            ...doc.data()
                        }
                    })   
                    // console.log(extractedEnemies)            
                     
                    setEnemiesList(extractedEnemies)
                    
                    findEnemy()
                }
                catch(error)
                {
                    console.log(error)
                }
            }

        if(!location.state)
        {
            console.log("yep")            
            getEnemiesList(); 
        }
    
        // console.log(temp)
    }, [])
    
    return (
        <>
            {checkForEnemy()}
        </>
    );
}

export default EnemiesCard;