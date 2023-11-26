import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HomeButton from './MyButton';
import userAnswer from '../global'

export default function Home() {
    if (Object.entries(userAnswer).length !== 0) {
        console.log(userAnswer);
    }

    return (
        <>
            <h2>Your Tests</h2>
            <HomeButton hasImage={false} />
            <br />
            <h2>Practice and Prepare</h2>
            <Container style={{ margin: '0px' }}>
                <Link to="/SAT">
                    <HomeButton hasImage={true} title="Start SAT" />
                </Link>
                <Link to="/SAT">
                    <HomeButton hasImage={true} title="View Random Question" />
                </Link>

            </Container>
        </>
    )
}