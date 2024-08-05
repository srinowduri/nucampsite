import { Container } from 'reactstrap';
import DisplayList from '../features/display/DisplayList';
import SubHeader from '../features/comments/SubHeader';

const HomePage = () => {
    return (
        <Container>
            <SubHeader current='Home' />
            <DisplayList />
        </Container>
    );
};

export default HomePage;