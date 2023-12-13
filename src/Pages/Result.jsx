import React, { useState, useEffect } from 'react';
import sampleResult from '../data/result.js';
import sampleTest from '../data/testOverview.js';
import BarChart from '../Components/Graphs/BarChart.jsx';
import QuestionDetailTable from '../Components/Table/QuestionDetailTable.jsx';
import OverviewTable from '../Components/Table/OverviewTable.jsx';
import { convertToBarChartArray, getMathData, getReadingAndWritingData, getMaxFrequency } from '../Utils';
import CenteredTabs from '../Components/CenterTabs.jsx';
import { Container, Box, Typography } from '@mui/material';

export default function Result() {
    const [value, setValue] = useState(0);
    useEffect(() => {
        returnResult();
    }, []);

    function returnResult() {
        console.log(sampleResult);
        console.log('Reading&Writing data', getReadingAndWritingData(sampleResult.breakdown))
        console.log('Math data', getMathData(sampleResult.breakdown))
        console.log("Bar chart", convertToBarChartArray(sampleResult.breakdown));
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
                var barChartData = convertToBarChartArray(sampleResult.breakdown)
                var maxFrequency = getMaxFrequency(barChartData)

                return (
                    <Box>
                        <Typography variant="h5" gutterBottom>
                            Overview
                        </Typography>
                        <OverviewTable data={sampleTest} />

                        <Typography variant="h5" gutterBottom>
                            Question Details
                        </Typography>
                        <QuestionDetailTable data={sampleResult.breakdown} />
                        <Typography variant="h5" gutterBottom>
                            Tags Bar Chart
                        </Typography>
                        <BarChart data={barChartData} maxX={maxFrequency} />
                    </Box>
                );
            case 1:
                const readingAndWritingData = getReadingAndWritingData(sampleResult.breakdown);
                var barChartData = convertToBarChartArray(readingAndWritingData)
                var maxFrequency = getMaxFrequency(barChartData)

                return (
                    <Box>
                        <Typography variant="h5" gutterBottom>
                            Reading & Writing Section Breakdown
                        </Typography>
                        <QuestionDetailTable data={readingAndWritingData} />
                        <Typography variant="h5" gutterBottom>
                            Tags Bar Chart
                        </Typography>
                        <BarChart data={barChartData} maxX={maxFrequency} />
                    </Box>
                );
            case 2:
                var mathResult = getMathData(sampleResult.breakdown);
                var barChartData = convertToBarChartArray(mathResult)
                var maxFrequency = getMaxFrequency(barChartData)

                return (
                    <Box>
                        <Typography variant="h5" gutterBottom>
                            Math Section Breakdown
                        </Typography>
                        <QuestionDetailTable data={mathResult} />
                        <Typography variant="h5" gutterBottom>
                            Tags Bar Chart
                        </Typography>
                        <BarChart data={barChartData} maxX={maxFrequency} />
                    </Box>
                );
            default:
                return <OverviewTable />;
        }
    }

    return (
        <>
            <CenteredTabs value={value} handleChange={handleChange} />
            {switchToTab(value)}
        </>
    )
}