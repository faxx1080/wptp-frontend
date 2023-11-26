import { useState } from 'react';
import BottomNavbar from './BottomNavbar';
import Question from './Question'
import SectionHeader from './SectionHeader';
import userAnswer from '../global';

export default function SAT() {
    const [count, setCount] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [questionModel, setQuestionModel] = useState([]);

    const getQuestions = () => {
        var xhr = new XMLHttpRequest();
        var method = "GET";

        // Set async to true, might need to change later
        xhr.open(method, import.meta.env.VITE_BACKEND_API, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                if (xhr.status == 200) {
                    var responseData = JSON.parse(xhr.responseText);
                    console.log("Response:", responseData);
                    setQuestionModel(responseData)
                } else {
                    console.error("Error:", xhr.status, xhr.statusText);
                }
            }
        };
        xhr.send();
    }

    const nextQuestion = () => {
        if (selectedOption !== null) {
            userAnswer[count] = selectedOption;
            setCount((count) => count + 1);
            setSelectedOption(null);
        }
    }

    if (!questionModel.length) {
        getQuestions();
        return (
            <>
                <h2>Welcome to the SAT page</h2>
                <p>Loading questions for you...</p>
            </>
        )
    } else {
        const question = questionModel[count];
        return (
            <>
                <h2>Welcome to the SAT page</h2>
                <SectionHeader sectionNumber={1} title="Reading and writing" />
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
}