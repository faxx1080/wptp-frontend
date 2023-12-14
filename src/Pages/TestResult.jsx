import React, { useState, useEffect } from 'react';
import sampleResult from '../data/result.js';
import sampleTest from '../data/test.js';
import QuestionDetailTable from '../Components/Table/QuestionDetailTable.jsx';
import OverviewTable from '../Components/Table/OverviewTable.jsx';
import { getMathData, getReadingAndWritingData, getMaxFrequency } from '../Utils.js';
import CenteredTabs from '../Components/CenterTabs.jsx';
import { Container, Box, Typography } from '@mui/material';
import TagPerformace from '../Components/TagPerformance.jsx';
import ExamList from '../Components/TestList.jsx';

export default function TestResult() {
    return (
        <ExamList />
    )
}