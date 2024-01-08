import { useAuthenticator } from "@aws-amplify/ui-react";
import { Navigate } from "react-router-dom";

function SignUp() {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);

  if (authStatus !== "authenticated") {
    return <Navigate to="/" />;
  }

  return null;
}

export default SignUp;