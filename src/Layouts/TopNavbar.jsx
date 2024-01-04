
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

export default function TopNavbar() {
    const logoLink = {
        color: 'inherit', // Use the inherit color (white) for the link
        textDecoration: 'none', // Remove the default underline
    }
    return (
        <AppBar position="fixed">
            <Toolbar>
                <Link to="/" style={logoLink}>
                    <Typography variant="h6">
                        [LOGO] WPTP
                    </Typography>
                </Link>
                <Button component={Link} to="/" style={logoLink} color="inherit">Home</Button>
            </Toolbar>
        </AppBar>
    );
}
