
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
// import makeStyles from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//     logoLink: {
//         color: 'inherit', // Use the inherit color (white) for the link
//         textDecoration: 'none', // Remove the default underline
//     },
// }));

export default function TopNavbar() {
    // const classes = useStyles();
    const logoLink = {
        color: 'inherit', // Use the inherit color (white) for the link
        textDecoration: 'none', // Remove the default underline
    }
    return (
        <AppBar position="static">
            <Toolbar>
                <Link to="/" style={logoLink}>
                    <Typography variant="h6">
                        [LOGO] WPTP
                    </Typography>
                </Link>
                <Link to="/" style={logoLink}>
                    <Button color="inherit">Home</Button>
                </Link>
            </Toolbar>
        </AppBar>
    );
}

//  {/* <Navbar.Brand href="#home"> */}
// {/* <img src="https://static.wixstatic.com/media/5f8486_79060d16d819430395e6a012da8729ef%7Emv2.png/v1/fill/w_32%2Ch_32%2Clg_1%2Cusm_0.66_1.00_0.01/5f8486_79060d16d819430395e6a012da8729ef%7Emv2.png"/> */}