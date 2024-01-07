import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";

function AuthWrapper({ children }) {
  return (
    <Authenticator socialProviders={["google"]}>
      {({ signOut, user }) => children}
    </Authenticator>
  );
}

export default AuthWrapper;
