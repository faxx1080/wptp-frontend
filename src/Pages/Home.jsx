import { Link } from 'react-router-dom';
import GenericImageButton from '../Components/GenericImageButton';
import { Container } from '@mui/material';
import userAnswer from '../global'

export default function Home() {
    const imgSrc = "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
    if (Object.entries(userAnswer).length !== 0) {
        console.log(userAnswer);
    }

    return (
        <>
            <h2>Your Tests</h2>
            <Container style={{marginLeft:"0"}}>
                <Link to="/TestResult">
                    <GenericImageButton hasImage={true} title="SAT result" imgSrc={imgSrc} text="See scores breakdown" />
                </Link>
            </Container>

            <br />
            <h2>Practice and Prepare</h2>
            <Container style={{ margin: '0px' }}>
                <Link to="/SAT">
                    <GenericImageButton hasImage={true} title="Start SAT" imgSrc={imgSrc} text="See questions coming from the database." />
                </Link>
                <Link to="/ViewRandomQuestion">
                    <GenericImageButton hasImage={true} title="View Random Question" imgSrc={imgSrc} text="See sample questions coming from the browser."/>
                </Link>
            </Container>
        </>
    )
}