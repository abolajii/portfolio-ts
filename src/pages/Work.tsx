// import React from "react";

import styled from "styled-components";

const Container = styled.div`
  background-color: #222222;
  color: rgb(204, 204, 204);
  padding: 20px 30px;
  padding-bottom: 50px;
`;

const Heading = styled.h2`
  /* color: #4caf50; */
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
`;

const Line = styled.div`
  background: linear-gradient(to left, #2d2d2d, #4caf50);
  height: 4px;
  width: 170px;
  border-radius: 1px;
  margin-bottom: 30px;
  margin-top: 5px;
`;

const Work = () => {
  return (
    <Container>
      <Heading>My Projects</Heading>
      <Line />
    </Container>
  );
};

export default Work;
