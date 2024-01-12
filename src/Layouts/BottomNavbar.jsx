import React from "react";
import { AppBar, Toolbar, Button, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { dashboardRoute } from "../data/constants";

export default function BottomNavbar({
  prevClickFunc,
  nextClickFunc,
  renderHomeBtn,
}) {
  return (
    <>
      {/* Add bottom padding so that the content is not going to be hidden by the bottom navbar */}
      <Toolbar />

      <AppBar
        position="fixed"
        color="default"
        style={{ top: "auto", bottom: 0 }}
      >
        <Toolbar>
          <Container>
            <Grid container style={{ justifyContent: "flex-end" }}>
              {prevClickFunc && (
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={prevClickFunc}
                  >
                    Back
                  </Button>
                </Grid>
              )}
              {renderHomeBtn && nextClickFunc && (
                <Grid item>
                  <Button
                    component={Link}
                    to={dashboardRoute}
                    onClick={nextClickFunc}
                    variant="contained"
                    color="primary"
                  >
                    Next
                  </Button>
                </Grid>
              )}
              {!renderHomeBtn && nextClickFunc && (
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={nextClickFunc}
                  >
                    Next
                  </Button>
                </Grid>
              )}
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}
