import React, { useState } from 'react';
import Question from '../Components/Question'
import sampleResult from '../data/result.js';
import BarChart from '../Components/Graphs/BarChart.jsx';
import SimpleTable from '../Components/Table/SimpleTable.jsx';
import QuestionDetailTable from '../Components/Table/QuestionDetailTable.jsx';
import OverviewTable from '../Components/Table/OverviewTable.jsx';
import { convertToBarChartArray } from '../Utils';
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

    const switchToTab = (index) => {
        switch (value) {
            case 0:
                return (
                    <>
                        <h2>Overview</h2>
                        <OverviewTable />
                    </>
                );
            case 1:
                return (
                    <>
                        <h2>Reading & Writing Section Breakdown</h2>
                        <QuestionDetailTable />
                    </>
                );
            case 2:
                return (
                    <>
                        <h2>Math Section Breakdown</h2>
                        <QuestionDetailTable />
                    </>
                );
            default:
                return <OverviewTable />;
        }
    }

    function returnResult() {
        console.log(sampleResult);
        return sampleResult;
    }

    returnResult();

    const data = convertToBarChartArray(sampleResult.breakdown);
    console.log(data);

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

            {switchToTab(value)}

            <h2>Tags</h2>
            <BarChart data={data} maxX={sampleResult.question_count} />
        </>
    )
}