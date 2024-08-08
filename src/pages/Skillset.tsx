import { BiLogoFirebase, BiLogoTypescript } from "react-icons/bi";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiMongodb, SiRedux, SiTailwindcss } from "react-icons/si";

import { GrMysql } from "react-icons/gr";
// SkillSet.tsx
import React from "react";
import styled from "styled-components";

const Inner = styled.div`
  background-color: #222222;
  color: rgb(204, 204, 204);
  padding: 20px 30px;
  padding-bottom: 80px;
`;

const SkillSet = () => {
  return (
    <Inner>
      <IconBox />
    </Inner>
  );
};

export default SkillSet;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  gap: 25px;
  padding: 20px;
  border: 1px solid rgba(0, 255, 0, 0.07);
  border-radius: 10px;
  margin: 0 auto;
  background-color: #2d2d2d;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  font-size: 24px;

  .icon {
    font-size: 48px;
  }

  span {
    font-size: 16px;
  }
`;

const IconBox: React.FC = () => {
  return (
    <Container>
      <IconWrapper>
        <FaNodeJs className="icon" color="#8CC84B" />
        <span>Node.js</span>
      </IconWrapper>
      <IconWrapper>
        <FaReact className="icon" color="#61DAFB" />
        <span>React</span>
      </IconWrapper>
      <IconWrapper>
        <BiLogoFirebase className="icon" color="#FFCA28" />
        <span>Firebase</span>
      </IconWrapper>
      <IconWrapper>
        <BiLogoTypescript className="icon" color="#3178C6" />
        <span>TypeScript</span>
      </IconWrapper>
      <IconWrapper>
        <SiTailwindcss className="icon" color="#38B2AC" />
        <span>Tailwind</span>
      </IconWrapper>
      <IconWrapper>
        <SiRedux className="icon" color="#764ABC" />
        <span>Redux</span>
      </IconWrapper>
      <IconWrapper>
        <GrMysql className="icon" color="#4479A1" />
        <span>MySQL</span>
      </IconWrapper>
      <IconWrapper>
        <SiMongodb className="icon" color="#47A248" />
        <span>MongoDB</span>
      </IconWrapper>
    </Container>
  );
};
