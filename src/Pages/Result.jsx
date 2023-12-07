import { useState } from 'react';
import Question from '../Components/Question'
import result from '../Data/result.js'

export default function Result() {
    const [count, setCount] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [questionModel, setQuestionModel] = useState([]);

    function returnResult(){
        console.log(result);
        return result;
    } 

    returnResult();
    return (
        <>
            <h2>Here are the result visualization</h2>
        </>
    )
}