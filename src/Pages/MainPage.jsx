import { Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const MainPage = () => {
  return (
    <Container>
      <h1>Your MainPage</h1>
      <Link to='/weapons'>
        <h2>This is the link to Weapon page</h2>
      </Link>
    </Container>
  );
};

export default MainPage;