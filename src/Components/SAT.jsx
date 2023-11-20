import { useState } from 'react';
import BottomNavbar from './BottomNavbar';
import Question from './Question'
import SectionHeader from './SectionHeader';
import { getQuestions, questionModel } from '../questionModel';
import userAnswer from '../global';

export default function SAT() {
    const [count, setCount] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    getQuestions();
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
            <h2>Welcome to the SAT page</h2>
            <SectionHeader sectionNumber={1} title="Reading and writing" />
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