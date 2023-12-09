import { useState } from 'react';
import BottomNavbar from '../Layouts/BottomNavbar';
import Question from '../Components/Question'
import userAnswer from '../global';
import sampleQuestion from '../Data/question.js'

export default function ViewRandomQuestion() {
    const [count, setCount] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const questionModel = sampleQuestion;
    const question = questionModel[count];

    const nextQuestion = () => {
        if (selectedOption !== null) {
            userAnswer[count] = selectedOption;
            setCount((count) => count + 1);
            setSelectedOption(null);
        }
    }

    return (
        <>
            <h2>Welcome to the View Random Question page</h2>
            <Question
                number={count + 1}
                questionData={question}
                selectedOption={selectedOption}
                onOptionChange={setSelectedOption}
            />
            <BottomNavbar nextClickFunc={nextQuestion} renderHomeBtn={count + 1 === questionModel.length} />
        </>
    )
}