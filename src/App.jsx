import "./assets/App.css";
import { Route, Routes } from "react-router-dom";
import TopNavbar from "./Layouts/TopNavbar";
import Home from "./Pages/Home";
import SAT from "./Pages/SAT";
import ViewRandomQuestion from "./Pages/ViewRandomQuestion";
import TestResult from "./Pages/TestResult";
import TestResultDetail from "./Pages/TestResultDetail";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import { Toolbar } from "@mui/material";

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <Toolbar />
      {/* This is to push the content down so that it is not hidden by the navbar */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/SAT" element={<SAT />} />
        <Route path="/ViewRandomQuestion" element={<ViewRandomQuestion />} />
        <Route path="/TestResult/:id" element={<TestResultDetail />} />
        <Route path="/TestResult" element={<TestResult />} />
      </Routes>
      <div style={{ height: "16px" }}></div>
    </div>
  );
}

export default App;
