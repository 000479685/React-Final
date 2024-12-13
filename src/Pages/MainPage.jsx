import { Card } from '@mui/material';
import { Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const MainPage = () => {
  return (
    <Container>
      <h1>Main Page</h1>
      <Card sx={{boxShadow:'2px 2px 5px black', margin:2}}>
        <Link to='/weapons'>
          <h2>Weapon page</h2>
        </Link>
      </Card>
      <Card sx={{boxShadow:'2px 2px 5px black', margin:2}}>
        <Link to='/enemies'>
          <h2>Enemies page</h2>
        </Link>
      </Card>
      <Card sx={{boxShadow:'2px 2px 5px black', margin:2}}>
        <Link to='/characters_home'>
          <h2>Characters page</h2>
        </Link>
      </Card>
    </Container>
  );
};

export default MainPage;