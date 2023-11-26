import { useState } from 'react';
import BottomNavbar from './BottomNavbar';
import Question from './Question'
import userAnswer from '../global';

export default function ViewRandomQuestion() {
    const [count, setCount] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
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
                content={question.content}
                prompt={question.prompt}
                answerChoices={question.answerChoices}
                selectedOption={selectedOption}
                onOptionChange={setSelectedOption}
            />
            <BottomNavbar nextClickFunc={nextQuestion} renderHomeBtn={count + 1 === questionModel.length} />
        </>
    )
}