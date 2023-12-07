import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function TopNavbar() {
    return (
        <Navbar className="bg-body-tertiary">
            {/* <Container> */}
            <Link to="/">
                <Navbar.Brand>[Logo]WPTP</Navbar.Brand>
            </Link>
            {/* </Container> */}
        </Navbar>
    );
}

//  {/* <Navbar.Brand href="#home"> */}
// {/* <img src="https://static.wixstatic.com/media/5f8486_79060d16d819430395e6a012da8729ef%7Emv2.png/v1/fill/w_32%2Ch_32%2Clg_1%2Cusm_0.66_1.00_0.01/5f8486_79060d16d819430395e6a012da8729ef%7Emv2.png"/> */}