import { Navigate } from "react-router-dom";
import { dashboardRoute } from "../data/constants";
function SignUp() {
  return <Navigate to={dashboardRoute} />;
}

export default SignUp;
