// import React from 'react'

import Profile from "./Profile";
import styled from "styled-components";
import useMediaQuery from "../hooks/useMediaQuery";

const Container = styled.div`
  background: linear-gradient(to bottom, #2d2d2d, #222222) !important;
  padding: 40px 30px;

  color: rgb(204, 204, 204);
`;

const Paragraph = styled.p`
  line-height: 1.5;
  font-size: 16px;
  margin-bottom: 20px;
`;

const Heading = styled.h2`
  color: #4caf50;
  font-size: 24px;
  font-weight: bold;
`;

const Line = styled.div`
  background: linear-gradient(to left, #2d2d2d, #4caf50);
  height: 3px;
  width: 80px;
  border-radius: 1px;
  margin-bottom: 30px;
`;

const About = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  //   if (isMobile) {
  //     return <Container>About Mobile</Container>;
  //   }

  return (
    <Container>
      <Heading>About Me</Heading>
      <Line />
      <div className="flex">
        <div className="flex-1">
          <Paragraph>
            Computer Science graduate with six years of full-stack development
            experience, specializing in HTML5, CSS, JavaScript, TypeScript,
            React JS, React Native, Node JS, MongoDB, MySQL, and MSSQL.
          </Paragraph>

          <Paragraph>
            Committed to delivering high-quality solutions and passionate about
            staying abreast of emerging technologies. Thrives in dynamic and
            collaborative environments, where innovation is essential for
            success.
          </Paragraph>

          <Paragraph>
            Versatile full-stack developer adept at front-end development using
            React JS, server-side scripting with Node JS, and database
            management with MongoDB, MySQL, and MSSQL. Proactive learner and
            adapter to new technologies.
          </Paragraph>

          <Paragraph>
            Excited about creating seamless and integrated solutions across the
            entire software stack. Finds satisfaction in translating complex
            requirements into user-friendly interfaces, optimizing server-side
            performance, and ensuring robust database management.
          </Paragraph>
        </div>
        {!isMobile && (
          <div className="flex flex-1 justify-center">
            <Profile />
          </div>
        )}
      </div>
    </Container>
  );
};

export default About;
