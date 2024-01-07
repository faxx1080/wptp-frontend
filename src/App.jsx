import "./assets/App.css";
import "@aws-amplify/ui-react/styles.css";

import TopNavbar from "./Layouts/TopNavbar";
import { Toolbar } from "@mui/material";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import AppRoutes from "./AppRoutes";

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <Toolbar />
      {/* This is to push the content down so that it is not hidden by the navbar */}
      <AppRoutes />
      <div style={{ height: "16px" }}></div>
    </div>
  );
}

export default App;
