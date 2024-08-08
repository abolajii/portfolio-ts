// import React from 'react'

import styled from "styled-components";
import useMediaQuery from "../hooks/useMediaQuery";

const Container = styled.div`
  background-color: #2d2d2d;
  padding-top: 70px;
  color: rgb(204, 204, 204);
  padding-bottom: 70px;
`;

const About = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  if (isMobile) {
    return <Container>About Mobile</Container>;
  }

  return <Container>About Desktop</Container>;
};

export default About;
