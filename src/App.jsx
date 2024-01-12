import "./assets/App.css";
import "@aws-amplify/ui-react/styles.css";

import TopNavbar from "./Layouts/TopNavbar";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import AppRoutes from "./AppRoutes";
import { Toolbar } from "@mui/material";

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <TopNavbar />
      {/* This is to push the content down so that it is not hidden by the navbar */}
      <AppRoutes />
      {/* Add extra padding on the bottom */}
      <Toolbar />
    </div>
  );
}

export default App;
