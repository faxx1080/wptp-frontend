import * as React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useAuthenticator } from "@aws-amplify/ui-react";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

export default function TopNavbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const { user, signOut } = useAuthenticator((context) => [context.user]);

  const logoLink = {
    color: "inherit", // Use the inherit color (white) for the link
    textDecoration: "none", // Remove the default underline
  };
  return (
    <AppBar position="fixed">
      <Toolbar>
        {/* <Grid container alignItems="center">
          {/* Left Side */}
        <Link to="/" style={logoLink}>
          <Typography variant="h6">[LOGO] WPTP</Typography>
        </Link>
        <Button
          component={Link}
          to="/"
          style={logoLink}
          color="inherit"
          sx={{ flexGrow: 1, justifyContent: "flex-start" }}
        >
          Home
        </Button>

        {/* Right Side */}
        {user ? (
          <>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
            <Button
              component={Link}
              to="/"
              onClick={signOut}
              style={logoLink}
              color="inherit"
            >
              Sign Out
            </Button>
          </>
        ) : (
          // User is not authenticated, show Sign In and Sign Up buttons
          <>
            <Button
              component={Link}
              to="/dashboard" // Replace with your actual sign-in route
              style={logoLink}
              color="inherit"
            >
              Sign In
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
