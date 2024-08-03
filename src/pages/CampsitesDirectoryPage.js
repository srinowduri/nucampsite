import { useState } from "react";
import { Row, Col, Container } from "reactstrap";
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CampsitesList from '../features/campsites/CampsitesList';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';

const CampsitesDirectoryPage = () => {
    // const [selectedCampsite, toggleCampsite] = useState(selectRandomCampsite());

    const [campsiteId, setCampsiteId] = useState(0);
    const selectedCampsite = selectCampsiteById(campsiteId);
    return (
        <Container>
            {/* <Button onClick={() => toggleCampsite(selectRandomCampsite())}>
                Select Random Campsite
            </Button> */}
            <Row>
                <Col sm='5' md='7'>
                    <CampsitesList setCampsiteId={setCampsiteId} />
                </Col>
                <Col sm='7' md='5'>
                    <CampsiteDetail campsite={selectedCampsite} />
                </Col>
            </Row>
        </Container>
    );
};

export default CampsitesDirectoryPage;