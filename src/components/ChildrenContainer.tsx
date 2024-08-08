import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
// ChildrenContainer.tsx
import React from "react";
import SkillSet from "../pages/Skillset";
import Work from "../pages/Work";
import styled from "styled-components";

const Container = styled.div``;

const ChildrenContainer: React.FC = () => {
  return (
    <Container>
      <Home />
      <About />
      <SkillSet />
      <Work />
      <Contact />
    </Container>
  );
};

export default ChildrenContainer;
