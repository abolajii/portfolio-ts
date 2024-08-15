import Stepper from "./Stepper";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 50px;
  padding: 30px;
  border-radius: 4px;
  width: 500px;
  border: 1px solid rgba(0, 255, 0, 0.1);
  margin-bottom: 70px;

  background: linear-gradient(
    to bottom,
    #222,
    rgba(76, 175, 80, 0.04)
  ) !important;

  h2 {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Workflow = () => {
  return (
    <Container>
      <Stepper />
    </Container>
  );
};

export default Workflow;
