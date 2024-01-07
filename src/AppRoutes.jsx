import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import SAT from "./Pages/SAT";
import ViewRandomQuestion from "./Pages/ViewRandomQuestion";
import TestResult from "./Pages/TestResult";
import TestResultDetail from "./Pages/TestResultDetail";
import Dashboard from "./Pages/Dashboard";

function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/SAT" element={<SAT />} />
      <Route path="/ViewRandomQuestion" element={<ViewRandomQuestion />} />
      <Route path="/TestResult/:id" element={<TestResultDetail />} />
      <Route path="/TestResult" element={<TestResult />} />
    </Routes>
  );
}

export default AppRoutes;
