import GenericImageButton from "../Components/GenericImageButton";
import { Container } from "@mui/material";
import {
  testResultRoute,
  SATRoute,
  ViewRandomQuestionRoute,
} from "../data/constants";

function Dashboard() {
  const imgSrc =
    "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";

  return (
    <>
      <h2>Your Tests</h2>
      <Container style={{ marginLeft: "0" }}>
        <GenericImageButton
          link={testResultRoute}
          hasImage={true}
          title="SAT result"
          imgSrc={imgSrc}
          text="See scores breakdown"
        />
      </Container>

      <h2>Practice and Prepare</h2>
      <Container style={{ margin: "0px" }}>
        <GenericImageButton
          link={SATRoute}
          hasImage={true}
          title="Start SAT"
          imgSrc={imgSrc}
          text="See questions coming from the database."
        />
        <GenericImageButton
          link={ViewRandomQuestionRoute}
          hasImage={true}
          title="View Random Question"
          imgSrc={imgSrc}
          text="See sample questions coming from the browser."
        />
      </Container>
    </>
  );
}

export default Dashboard;
