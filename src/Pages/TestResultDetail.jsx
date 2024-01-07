import React, { useState, useEffect } from "react";
import sampleResult from "../data/result.js";
import sampleTest from "../data/test.js";
import QuestionDetailTable from "../Components/Table/QuestionDetailTable.jsx";
import OverviewTable from "../Components/Table/OverviewTable.jsx";
import { getMathData, getReadingAndWritingData } from "../Utils/Utils.js";
import CenteredTabs from "../Components/CenteredTabs.jsx";
import { Container, Box, Typography } from "@mui/material";
import TagPerformace from "../Components/TagPerformance.jsx";
import { useParams } from "react-router-dom";
import LinkButton from "../Components/LinkButton.jsx";

function TestResultDetail() {
  const { id } = useParams();

  const [value, setValue] = useState(0);
  useEffect(() => {
    returnResult();
  }, []);

  function returnResult() {
    console.log(sampleResult);
    // console.log('Reading&Writing data', getReadingAndWritingData(sampleResult.breakdown))
    // console.log('Math data', getMathData(sampleResult.breakdown))
    return sampleResult;
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const switchToTab = (index) => {
    switch (index) {
      case 0:
        return (
          <Container>
            <Typography variant="h5" gutterBottom>
              Overview
            </Typography>
            <OverviewTable data={sampleTest[id - 1]} />

            <Typography variant="h5" gutterBottom>
              Question Details
            </Typography>
            <QuestionDetailTable data={sampleResult.breakdown} />
            <TagPerformace data={sampleResult.breakdown} />
          </Container>
        );
      case 1:
        const readingAndWritingData = getReadingAndWritingData(
          sampleResult.breakdown
        );

        return (
          <Container>
            <Typography variant="h5" gutterBottom>
              Reading & Writing Section Breakdown
            </Typography>
            <QuestionDetailTable data={readingAndWritingData} />

            <TagPerformace data={readingAndWritingData} />
          </Container>
        );
      case 2:
        const mathData = getMathData(sampleResult.breakdown);

        return (
          <Container>
            <Typography variant="h5" gutterBottom>
              Math Section Breakdown
            </Typography>
            <QuestionDetailTable data={mathData} />
            <TagPerformace data={mathData} />
          </Container>
        );
      default:
        return <OverviewTable />;
    }
  };

  return (
    <>
      <LinkButton path="/TestResult" text="Back" />
      <CenteredTabs value={value} handleChange={handleChange} />
      {switchToTab(value)}
    </>
  );
}

export default TestResultDetail;
