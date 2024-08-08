import About from "../pages/About";
import Home from "../pages/Home";
// ChildrenContainer.tsx
import React from "react";
import SkillSet from "../pages/Skillset";
import styled from "styled-components";

const Container = styled.div``;

const ChildrenContainer: React.FC = () => {
  return (
    <Container>
      <Home />
      <About />
      <SkillSet />
    </Container>
  );
};

export default ChildrenContainer;
