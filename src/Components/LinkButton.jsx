import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function LinkButton({ path, text, clickFunc }) {
  return (
    <Button onClick={clickFunc} component={Link} to={path}>
      {text}
    </Button>
  );
}
