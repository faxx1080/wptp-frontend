import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";

function AuthWrapper({ initialState, children }) {
  initialState = initialState || "signIn";

  return (
    <Authenticator initialState={initialState} socialProviders={["google"]}>
      {({ signOut, user }) => children}
    </Authenticator>
  );
}

export default AuthWrapper;
