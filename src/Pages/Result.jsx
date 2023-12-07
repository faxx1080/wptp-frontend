import { useState } from 'react';
import Question from '../Components/Question'

export default function Result() {
    const [count, setCount] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [questionModel, setQuestionModel] = useState([]);

    return (
        <>
            <h2>Here are the result visualization</h2>
        </>
    )
}