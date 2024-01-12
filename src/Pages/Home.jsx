import { Typography, Button, Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { dashboardRoute, signupRoute } from "../data/constants";
import exampleMCQImage from "../assets/images/exampleMCQ.png";
import { MathJax } from "better-react-mathjax";

export default function Home() {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4">West Palm Test Prep</Typography>
        <Typography variant="h5" sx={{ fontStyle: "italic" }}>
          Practice site
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" align="center">
            Want to try out a practice exam Just like the real thing
          </Typography>
          <br />
          <Typography variant="body1" align="center">
            ... from the comfort of your home?
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={exampleMCQImage}
            alt="Example Multiple Choice Question"
            style={{
              width: "100%",
              maxWidth: "500px",
              height: "auto",
            }}
          />
        </Grid>
      </Grid>

      <Box>
        <Typography>This site can do that!</Typography>
        <ul>
          <li>Practice reading, geometry, math questions</li>
          <li>Practice full length exam</li>
          <li>Scorecards at the end of an exam</li>
          <li>Showing you what to focus on</li>
          <li>Specialized questions geared to your specific strengths</li>
          <li>and weaknesses</li>
          <li>And more!</li>
        </ul>
      </Box>

      <Box
        sx={{ width: "100%", display: "flex", justifyContent: "space-evenly" }}
      >
        <Button
          component={Link}
          to={dashboardRoute}
          sx={{
            bgcolor: "primary.main",
            color: "primary.contrastText",
            "&:hover": {
              bgcolor: "primary.dark",
            },
          }}
        >
          Login
        </Button>
        <Button
          component={Link}
          to={signupRoute}
          sx={{
            bgcolor: "success.main",
            color: "primary.contrastText",
            "&:hover": {
              bgcolor: "success.dark",
            },
          }}
        >
          Sign up
        </Button>
      </Box>
    </Box>
  );
}
