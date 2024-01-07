import React, { useState, useEffect } from "react";
import { Container, Box, Typography } from "@mui/material";
import ExamList from "../Components/TestList.jsx";
import SummarySynopsisTable from "../Components/Table/SummarySynopsisTable.jsx";
import { withAuthenticator } from "@aws-amplify/ui-react";

function TestResult() {
  return (
    <>
      <Box textAlign="center" m={1}>
        <Typography variant="h4">Test Summary</Typography>
      </Box>

      <SummarySynopsisTable />
      <ExamList />
    </>
  );
}

export default withAuthenticator(TestResult);
