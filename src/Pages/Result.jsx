import React, { useState, useEffect } from 'react';
import Question from '../Components/Question'
import sampleResult from '../data/result.js';
import BarChart from '../Components/Graphs/BarChart.jsx';
import SimpleTable from '../Components/Table/SimpleTable.jsx';
import QuestionDetailTable from '../Components/Table/QuestionDetailTable.jsx';
import OverviewTable from '../Components/Table/OverviewTable.jsx';
import { convertToBarChartArray, getMathData, getReadingAndWritingData } from '../Utils';
import CenteredTabs from '../Components/CenterTabs.jsx';
// import SwipeableViews from 'react-swipeable-views';

export default function Result() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    useEffect(() => {
        // D3.js chart rendering code here

    });

    const switchToTab = (index) => {
        switch (value) {
            case 0:
                return (
                    <>
                        <h2>Overview</h2>
                        <OverviewTable />
                        <h2>Tags</h2>
                        <div id="d3-container"></div>
                    </>
                );
            case 1:
                const readingAndWritingData = getReadingAndWritingData(sampleResult.breakdown);
                console.log('read bar data', convertToBarChartArray(readingAndWritingData))

                return (
                    <>
                        <h2>Reading & Writing Section Breakdown</h2>
                        <QuestionDetailTable data={readingAndWritingData} />
                        <h2>Tags</h2>
                        <div id="d3-container"></div>
                        {/* <BarChart data={convertToBarChartArray(readingAndWritingData)} maxX={readingAndWritingData.length} /> */}
                    </>
                );
            case 2:
                const mathData = getMathData(sampleResult.breakdown);
                return (
                    <>
                        <h2>Math Section Breakdown</h2>
                        <QuestionDetailTable data={getMathData(sampleResult.breakdown)} />
                        <h2>Tags</h2>
                        <div id="d3-container"></div>
                        {/* <BarChart data={convertToBarChartArray(mathData)} maxX={mathData.length} /> */}
                    </>
                );
            default:
                return <OverviewTable />;
        }
    }

    function returnResult() {
        console.log(sampleResult);
        console.log('Reading&Writing data', getReadingAndWritingData(sampleResult.breakdown))
        console.log('Math data', getMathData(sampleResult.breakdown))
        console.log("Bar chart", convertToBarChartArray(sampleResult.breakdown));
        return sampleResult;
    }
    returnResult();

    return (
        <>
            <h2>Here are the result visualizations</h2>
            {/* <LinePlot data={d3.ticks(-2, 2, 200).map(Math.sin)} /> */}
            <CenteredTabs value={value} handleChange={handleChange} />

            {/* <SwipeableViews
                // axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    Item One
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    Item Three
                </TabPanel>
            </SwipeableViews> */}
            <BarChart data={convertToBarChartArray(sampleResult.breakdown)} maxX={sampleResult.breakdown.length} />


            {switchToTab(value)}
        </>
    )
}