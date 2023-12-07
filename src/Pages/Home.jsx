import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GenericImageButton from '../Components/GenericImageButton';
import userAnswer from '../global'

export default function Home() {
    if (Object.entries(userAnswer).length !== 0) {
        console.log(userAnswer);
    }

    return (
        <>
            <h2>Your Tests</h2>
            <Link to="/Result">
                <GenericImageButton hasImage={true} title="SAT result" />
            </Link>
            <br />
            <h2>Practice and Prepare</h2>
            <Container style={{ margin: '0px' }}>
                <Link to="/SAT">
                    <GenericImageButton hasImage={true} title="Start SAT" />
                </Link>
                <Link to="/SAT">
                    <GenericImageButton hasImage={true} title="View Random Question" />
                </Link>
            </Container>
        </>
    )
}