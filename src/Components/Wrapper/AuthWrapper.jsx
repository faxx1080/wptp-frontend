import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";

function AuthWrapper({ initalState, children }) {
  return (
    <Authenticator initialState={initalState} socialProviders={["google"]}>
      {({ signOut, user }) => children}
    </Authenticator>
  );
}

export default AuthWrapper;
