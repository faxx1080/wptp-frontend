import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SAT from "./Pages/SAT";
import ViewRandomQuestion from "./Pages/ViewRandomQuestion";
import TestResult from "./Pages/TestResult";
import TestResultDetail from "./Pages/TestResultDetail";
import Dashboard from "./Pages/Dashboard";
import AuthWrapper from "./Components/Wrapper/AuthWrapper";

function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route
        path="/Dashboard"
        element={
          <AuthWrapper>
            <Dashboard />
          </AuthWrapper>
        }
      />
      <Route
        path="/SAT"
        element={
          <AuthWrapper>
            <SAT />
          </AuthWrapper>
        }
      />
      <Route
        path="/ViewRandomQuestion"
        element={
          <AuthWrapper>
            <ViewRandomQuestion />
          </AuthWrapper>
        }
      />
      <Route
        path="/TestResult/:id"
        element={
          <AuthWrapper>
            <TestResultDetail />
          </AuthWrapper>
        }
      />
      <Route
        path="/TestResult"
        element={
          <AuthWrapper>
            <TestResult />
          </AuthWrapper>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
