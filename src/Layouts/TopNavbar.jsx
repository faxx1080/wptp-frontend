import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Grid } from "@mui/material";
export default function TopNavbar() {
  const { user, signOut } = useAuthenticator((context) => [context.user]);

  const logoLink = {
    color: "inherit", // Use the inherit color (white) for the link
    textDecoration: "none", // Remove the default underline
  };
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Grid container alignItems="center">
          {/* Left Side */}
          <Grid item xs={6} display="flex">
            <Link to="/" style={logoLink}>
              <Typography variant="h6">[LOGO] WPTP</Typography>
            </Link>
            <Button component={Link} to="/" style={logoLink} color="inherit">
              Home
            </Button>
          </Grid>

          {/* Right Side */}
          <Grid item xs={6} display="flex" justifyContent="flex-end" >
            <Button
              component={Link}
              to="/"
              onClick={signOut}
              style={logoLink}
              color="inherit"
            >
              SignOut
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
