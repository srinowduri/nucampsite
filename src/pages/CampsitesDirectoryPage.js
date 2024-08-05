import { Container } from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';
import SubHeader from '../features/comments/SubHeader';

const CampsitesDirectoryPage = () => {
    return (
        <Container>
            <SubHeader current='Directory' />
            <CampsitesList />
        </Container>
    );
};

export default CampsitesDirectoryPage;