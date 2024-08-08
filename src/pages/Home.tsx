import styled, { keyframes } from "styled-components";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Main from "../components/Main";
// Home.tsx
import React from "react";
import avi from "../assets/avi.jpeg";
import useMediaQuery from "../hooks/useMediaQuery";

// Keyframes for animations
const slideInFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const zoomIn = keyframes`
  from {
    transform: scale(.7);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const bounce = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

// Animation for moving the LinkedIn icon
const moveRight = keyframes`
  0% {
    transform: translateX(-40px);
    opacity: 0;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
`;

const Container = styled.div`
  background-color: #2d2d2d;
  padding-top: 70px;
  color: rgb(204, 204, 204);

  /* margin-bottom: 50px; */

  .name {
    color: rgb(76, 175, 80);
  }
`;

const Tag = styled.div`
  border-radius: 4px;
  color: rgb(76, 175, 80);
  font-size: 12px;
  width: fit-content;
  margin-bottom: 3px;
  padding: 4px 5px;
  background: rgba(66, 107, 105, 0.15);
  animation: ${slideInFromBottom} 1s ease-out;
`;

const Heading = styled.h2`
  animation: ${slideInFromBottom} 1s ease-out;
`;

const Description = styled.p`
  margin-top: 20px;
  line-height: 1.5;
  animation: ${slideInFromBottom} 1s ease-out;
`;

const CTAButton = styled.button`
  margin: 20px 0;
  padding: 10px 20px;
  background-color: #4caf50; /* Green background color */
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  animation: ${slideInFromBottom} 1s ease-out;

  &:hover {
    background-color: #45a049; /* Darker green on hover */
  }

  &:active {
    background-color: #367935; /* Even darker green on click */
  }
`;

const OutlineButton = styled(CTAButton)`
  background-color: transparent;
  color: #4caf50;
  border: 2px solid #4caf50;
  margin-left: 10px;

  &:hover {
    background-color: rgba(76, 175, 80, 0.1); /* Lighter green on hover */
  }

  &:active {
    background-color: rgba(
      76,
      175,
      80,
      0.2
    ); /* Slightly darker green on click */
  }
`;

const IconLink = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: rgba(76, 175, 80, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;

  &:active {
    transform: scale(0.9);
  }

  &:hover {
    transform: scale(1.2);
    background-color: rgba(76, 175, 80, 0.12); /* Slightly brighter green */
  }
`;

const MoveRight = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: rgba(76, 175, 80, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, background-color 0.3s ease;
  animation: ${moveRight} 1s ease-out;
  margin-left: 10px;

  &:hover {
    transform: scale(1.2);
    background-color: rgba(76, 175, 80, 0.12); /* Slightly brighter green */
  }
`;

const Image = styled.div<{ isMobile: boolean }>`
  height: 300px;
  width: 300px;
  border-radius: 12px;
  overflow: hidden;
  background-color: #333;
  border: 1px solid rgb(204, 204, 204);
  margin-left: ${(props) => (props.isMobile ? "0px" : "70px")};
  animation: ${zoomIn} 1s ease-out;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Hand = styled.h2`
  margin-left: 5px;
  animation: ${bounce} 1s infinite;
`;

const Home: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <Container
      className={
        isMobile ? "flex flex-column p-xl" : "flex justify-between p-xl"
      }
    >
      {/* DIV A SLIDE IN FROM BOTTOM */}
      <div className="flex-1">
        <div className="flex flex-column">
          <Tag>SOFTWARE ENGINEER</Tag>
          <Heading>
            I'm <span className="name">Abolaji</span>
          </Heading>
          <div className="flex">
            <Heading>Full Stack Developer </Heading>
            <Hand> 👋</Hand>
          </div>

          <Description>
            With 6 years of experience, I specialize in building web
            applications using TypeScript, React, Node.js, and Next.js. I'm
            well-versed in Node.js for backend development, and I also have
            experience in React Native for mobile app development.
          </Description>

          <div className="btn flex">
            <CTAButton>Download CV</CTAButton>
            <OutlineButton>Hire Me</OutlineButton>
          </div>
        </div>
        <div className="links flex gap">
          <IconLink className="cursor center">
            <FaGithub size={23} color="rgb(76, 175, 80)" />
          </IconLink>
          <MoveRight className="cursor center">
            <FaLinkedin size={23} color="rgb(76, 175, 80)" />
          </MoveRight>
        </div>
      </div>

      {/* DIV B ZOOM IN ANIMATION */}
      <div className={isMobile ? "flex-1 mt-lg" : "flex-1"}>
        <Image isMobile={isMobile}>
          <img src={avi} alt="Avatar" />
        </Image>
      </div>
    </Container>
  );
};

export default Home;
