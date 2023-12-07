import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import LinkButton from '../Components/LinkButton';

export default function BottomNavbar({ prevClickFunc, nextClickFunc, renderHomeBtn }) {
    return (
        <Navbar className="bg-body-tertiary fixed-bottom border-top border-1 border-secondary">
            <Container className="justify-content-end">
                <Row>
                    {prevClickFunc && <Col>
                        <Button variant="primary" >Back</Button>
                    </Col>}
                    {
                        renderHomeBtn && nextClickFunc &&
                        <Col><LinkButton path="/" text="Next" clickFunc={nextClickFunc} /></Col>
                        ||
                        nextClickFunc && <Col>
                            <Button variant="primary" onClick={nextClickFunc}>Next</Button>
                        </Col>
                    }
                </Row>
            </Container>
        </Navbar>
    );
}