import { useState } from 'react';
import Question from '../Components/Question'
import sampleResult from '../Data/result.js'
import LinePlot from '../Components/Graphs/LinePlot.jsx';
import BarChart from '../Components/Graphs/BarChart.jsx';
import { convertToBarChartArray } from '../Utils';

import * as d3 from 'd3';

export default function Result() {
    const [count, setCount] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [questionModel, setQuestionModel] = useState([]);

    function returnResult() {
        console.log(sampleResult);
        return sampleResult;
    }

    returnResult();

    const data = convertToBarChartArray(sampleResult.breakdown);
    console.log(data);

    return (
        <>
            <h2>Here are the result visualization</h2>
            {/* <LinePlot data={d3.ticks(-2, 2, 200).map(Math.sin)} /> */}
            <BarChart data={data} maxX={sampleResult.question_count}  />
        </>
    )
}