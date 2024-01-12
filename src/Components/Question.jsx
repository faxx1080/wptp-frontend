import {
  Container,
  Paper,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { MathJax } from "better-react-mathjax";

export default function Question({
  number,
  questionData,
  selectedOption,
  onOptionChange,
}) {
  const handleOptionChange = (event, choice) => {
    console.log(choice);
    onOptionChange(choice);
  };
  const answerChoices = ["A", "B", "C", "D", "E"];
  console.log(questionData.equations);

  return (
    <Container maxWidth="sm" style={{ marginTop: "50px" }}>
      <Paper style={{ padding: "20px" }} elevation={3}>
        <Typography variant="h5" gutterBottom>
          Question {number}:
        </Typography>
        {/* <div>{"This is meant to be a context for the question. But this is not from the text API yet."}</div> */}
        <MathJax>{`${questionData.questiontext}`}</MathJax>
        {questionData.imagelink && (
          <img
            src={questionData.imagelink}
            style={{ width: "100%", maxWidth: "400px" }}
          />
        )}
        <RadioGroup value={selectedOption} onChange={handleOptionChange}>
          {answerChoices.map(
            (choice) =>
              questionData[`choice${choice.toLowerCase()}text`]?.length && (
                <FormControlLabel
                  key={choice}
                  value={choice}
                  control={<Radio color="default" />}
                  label={
                    <MathJax>
                      {questionData[`choice${choice.toLowerCase()}text`]}
                    </MathJax>
                  }
                />
              )
          )}
        </RadioGroup>
      </Paper>
    </Container>
  );
}
