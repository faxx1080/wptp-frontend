import * as React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useAuthenticator } from "@aws-amplify/ui-react";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { homeRoute, dashboardRoute } from "../data/constants";
import WPTP_logo from "../assets/images/WPTP_logo.jpg";

const logoLink = {
  color: "inherit", // Use the inherit color (white) for the link
  textDecoration: "none", // Remove the default underline
};

export default function TopNavbar() {
  // Dropdown menu for the user's profile
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { user, signOut } = useAuthenticator((context) => [context.user]);
  const currentHomeRoute = user ? dashboardRoute : homeRoute;
  const currentHomeRouteText = user ? "Dashboard" : "Home";
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          {/* Left Side */}
          <Link to={currentHomeRoute} style={logoLink}>
            <img src={WPTP_logo} alt="West Palm Test Prep logo" height="50px" />
          </Link>
          <Button
            component={Link}
            to={currentHomeRoute}
            style={logoLink}
            color="inherit"
          >
            {currentHomeRouteText}
          </Button>

          {/*  Middle placeholder space */}
          <Box sx={{ flexGrow: 1, justifyContent: "flex-start" }}></Box>

          {/* Right Side */}
          {user && (
            // User is authenticated, show the logout button + their profile
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
            </>
          )}
          {/* // User is not authenticated, show Login button, otherwise show logout button */}
          <>
            <Button
              component={Link}
              to={user ? homeRoute : dashboardRoute}
              // The signOut function will have no effect if the user is not authenticated
              onClick={signOut}
              style={logoLink}
              color="inherit"
            >
              {user ? "Logout" : "Login"}
            </Button>
          </>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
