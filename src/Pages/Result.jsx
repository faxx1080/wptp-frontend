import React, { useState, useEffect } from 'react';
import sampleResult from '../data/result.js';
import BarChart from '../Components/Graphs/BarChart.jsx';
import QuestionDetailTable from '../Components/Table/QuestionDetailTable.jsx';
import OverviewTable from '../Components/Table/OverviewTable.jsx';
import { convertToBarChartArray, getMathData, getReadingAndWritingData, getMaxFrequency } from '../Utils';
import CenteredTabs from '../Components/CenterTabs.jsx';

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
                    <>
                        <h2>Overview</h2>
                        <QuestionDetailTable data={sampleResult.breakdown} />
                        <h2>Tags</h2>
                        <BarChart data={barChartData} maxX={maxFrequency} />
                    </>
                );
            case 1:
                const readingAndWritingData = getReadingAndWritingData(sampleResult.breakdown);
                var barChartData = convertToBarChartArray(readingAndWritingData)
                var maxFrequency = getMaxFrequency(barChartData)

                return (
                    <>
                        <h2>Reading & Writing Section Breakdown</h2>
                        <QuestionDetailTable data={readingAndWritingData} />
                        <h2>Tags</h2>
                        <BarChart data={barChartData} maxX={maxFrequency} />
                    </>
                );
            case 2:
                var mathResult = getMathData(sampleResult.breakdown);
                var barChartData = convertToBarChartArray(mathResult)
                var maxFrequency = getMaxFrequency(barChartData)

                return (
                    <>
                        <h2>Math Section Breakdown</h2>
                        <QuestionDetailTable data={mathResult} />
                        <h2>Tags</h2>
                        <BarChart data={barChartData} maxX={maxFrequency} />
                    </>
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