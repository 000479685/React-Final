import { Box, Card } from '@mui/material';
import { Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const MainPage = () => {
  return (
    <Box sx={{bgcolor:'grey', height:'300px'}}>
    <Container maxWidth='sm'>
      
        <h1 style={{textShadow:'2px 2px 2px white'}}>Main Page</h1>
        <Card sx={{boxShadow:'2px 2px 5px black', margin:2}}>
          <Link to='/weapons'>
            <h2 style={{marginLeft:10}}>Weapon page</h2>
          </Link>
        </Card>
        <Card sx={{boxShadow:'2px 2px 5px black', margin:2}}>
          <Link to='/enemies'>
            <h2 style={{marginLeft:10}}>Enemies page</h2>
          </Link>
        </Card>
        <Card sx={{boxShadow:'2px 2px 5px black', margin:2}}>
          <Link to='/characters_home'>
            <h2 style={{marginLeft:10}}>Characters page</h2>
          </Link>
        </Card>
      
    </Container>
    </Box>
  );
};

export default MainPage;