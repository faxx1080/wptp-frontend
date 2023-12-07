import { useState } from 'react';
import Question from '../Components/Question'
import sampleAnswers from '../Data/answer.js'

export default function Result() {
    const [count, setCount] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [questionModel, setQuestionModel] = useState([]);

    function returnResult(){
        console.log(sampleAnswers);
        return sampleAnswers;
    } 

    return (
        <>
            <h2>Here are the result visualization</h2>
        </>
    )
}