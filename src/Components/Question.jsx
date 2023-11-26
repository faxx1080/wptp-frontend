export default function Question({ number, questionData, selectedOption, onOptionChange }) {
    const handleOptionChange = (choice) => {
        console.log(choice);
        onOptionChange(choice);
    };
    const answerChoices=["A", "B", "C", "D", "E"]

    return (
        <>
            <h4>Question {number}:</h4>
            <div>{"This is meant to be a context for the question. But this is not from the text API yet."}</div>
            <div>{"This is an images."}</div>
            <br />
            <div>{questionData.questiontext}</div>
            {
                answerChoices.map(choice => 
                    (questionData[`choice${choice.toLowerCase()}text`]?.length)
                    && (
                    <div key={choice} className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3">
                        <label className="options">
                            {questionData[`choice${choice.toLowerCase()}text`]}
                            <input
                                type="radio"
                                name="radio"
                                checked={selectedOption === choice}
                                onChange={() => handleOptionChange(choice)}
                            />  
                            <span className="checkmark">{choice}</span>
                        </label>
                    </div>
                ))
            }
        </>
    )
}