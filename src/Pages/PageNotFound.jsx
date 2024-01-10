import { Typography } from "@mui/material";
import { homeRoute } from "../data/constants";
import { Link } from "react-router-dom";
function PageNotFound() {
  return (
    <>
      <Typography variant="h4">
        Page Not Found. Please go back to the <Link to={homeRoute}>Home page</Link>
      </Typography>
    </>
  );
}

export default PageNotFound;
