import { useEffect, useState } from "react";
import BottomNavbar from "../Layouts/BottomNavbar";
import Question from "../Components/Question";
import sampleQuestion from "../data/question.js";

export default function ViewRandomQuestion() {
  const [count, setCount] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [userAnswer, setUserAnswer] = useState({});
  const questionModel = sampleQuestion;
  const question = questionModel[count];

  const nextQuestion = () => {
    if (selectedOption !== null) {
      setUserAnswer((prevAnswer) => ({
        ...prevAnswer,
        [count]: selectedOption,
      }));
      setCount((count) => count + 1);
      setSelectedOption(null);
    }
  };

  console.log("userAnswer", userAnswer);

  // Clean up
  useEffect(() => {
    return () => {
      console.log("clean up", userAnswer);
      setSelectedOption(null);
      setCount(0);
      // setUserAnswer({}); // Reset userAnswer on unmount
    };
  }, []);

  return (
    <>
      <h2>Welcome to the View Random Question page</h2>
      <Question
        number={count + 1}
        questionData={question}
        selectedOption={selectedOption}
        onOptionChange={setSelectedOption}
      />
      <BottomNavbar
        nextClickFunc={nextQuestion}
        renderHomeBtn={count + 1 === questionModel.length}
      />
    </>
  );
}
