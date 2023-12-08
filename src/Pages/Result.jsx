import { useState } from 'react';
import Question from '../Components/Question'
import result from '../Data/result.js'
import LinePlot from '../Components/Graphs/LinePlot.jsx';
import * as d3 from 'd3';

export default function Result() {
    const [count, setCount] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [questionModel, setQuestionModel] = useState([]);

    function returnResult() {
        console.log(result);
        return result;
    }

    returnResult();
    return (
        <>
            <h2>Here are the result visualization</h2>
            <LinePlot data ={d3.ticks(-2, 2, 200).map(Math.sin)} />
        </>
    )
}