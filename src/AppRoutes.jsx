import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SAT from "./Pages/SAT";
import ViewRandomQuestion from "./Pages/ViewRandomQuestion";
import TestResult from "./Pages/TestResult";
import TestResultDetail from "./Pages/TestResultDetail";
import Dashboard from "./Pages/Dashboard";
import AuthWrapper from "./Components/Wrapper/AuthWrapper";
import SignUp from "./Pages/SignUp";
import PageNotFound from "./Pages/PageNotFound";

import {
  signupRoute,
  dashboardRoute,
  SATRoute,
  ViewRandomQuestionRoute,
  testResultRoute,
} from "./data/constants";

function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route
        path={dashboardRoute}
        element={
          <AuthWrapper>
            <Dashboard />
          </AuthWrapper>
        }
      />
      <Route
        path={SATRoute}
        element={
          <AuthWrapper>
            <SAT />
          </AuthWrapper>
        }
      />
      <Route
        path={ViewRandomQuestionRoute}
        element={
          <AuthWrapper>
            <ViewRandomQuestion />
          </AuthWrapper>
        }
      />
      <Route
        path={`${testResultRoute}/:id`}
        element={
          <AuthWrapper>
            <TestResultDetail />
          </AuthWrapper>
        }
      />
      <Route
        path={testResultRoute}
        element={
          <AuthWrapper>
            <TestResult />
          </AuthWrapper>
        }
      />
      <Route
        path={signupRoute}
        element={
          <AuthWrapper initialState="signUp">
            <SignUp />
          </AuthWrapper>
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRoutes;
