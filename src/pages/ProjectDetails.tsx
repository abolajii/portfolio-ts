// import React from 'react'

import { BiLogoFirebase, BiLogoTypescript } from "react-icons/bi";
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiMongodb,
  SiRedux,
  SiStyledcomponents,
  SiTailwindcss,
} from "react-icons/si";

import { GrMysql } from "react-icons/gr";
import ImageGallery from "../components/ImageGallery";
import bg1 from "../assets/lb1.png";
import mbg1 from "../assets//mobilelb1.png";
import styled from "styled-components";

const Container = styled.div`
  color: rgba(204, 204, 204, 7);

  &.gap-md {
    height: 250px;
    @media screen and (max-width: 768px) {
      height: auto;
      flex-direction: column;
    }
  }

  .mb-6 {
    line-height: 1.5;
    font-size: 15px;
  }
`;

const BigImage = styled.div`
  background-color: rgba(214, 189, 189, 0.05);
  height: 100%;
  width: 450px;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .backdrop {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }

  @media screen and (max-width: 768px) {
    height: 200px;
  }
`;

const SmallImage = styled.div`
  background-color: rgba(214, 189, 189, 0.05);
  position: relative;

  height: 170px;
  width: 90px;
  margin-bottom: 25.5px;
  border-radius: 5px;
  .backdrop {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }

  @media screen and (max-width: 768px) {
    height: 130px;
  }
`;

const Stack = styled.div`
  h3 {
    margin-top: 30px;
    margin-bottom: 10px;
  }
`;

type ProjectType = {
  appId: number;
  onGoing?: boolean;
  name: string;
  bg?: string;
  stacks: Array<keyof typeof iconMapping>;
  // initials: string;
  link?: string;
  description?: string;
  images: {
    large: string[];
    small: string[];
  };
};

type ProjectDetailsProps = {
  project: ProjectType;
};

const iconMapping: Record<string, JSX.Element> = {
  react: <FaReact size={20} color="#61dafb" />,
  node: <FaNodeJs size={20} color="#8CC84B" />,
  firebase: <BiLogoFirebase size={20} color="#FFCA28" />,
  typescript: <BiLogoTypescript size={20} color="#3178C6" />,
  mongodb: <SiMongodb size={20} color="#47A248" />,
  redux: <SiRedux size={20} color="#764ABC" />,
  styled: <SiStyledcomponents size={23} color="#DB7093" />,
  tailwindcss: <SiTailwindcss size={20} color="#06B6D4" />,
  mysql: <GrMysql size={20} color="#4479A1" />,
};

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  return (
    <>
      <Container className="flex gap-md">
        <div className="flex-1">
          <p className="mb-6">{project.description}</p>
          <div className="flex gap-md mt-md">
            {project.stacks.map((stack) => (
              <span key={stack}>{iconMapping[stack]}</span>
            ))}
          </div>
        </div>
        <div className="flex-1 flex align-end">
          <BigImage>
            <div className="backdrop" />
            <img src={bg1} alt="Big" />
          </BigImage>

          <SmallImage>
            <img src={mbg1} alt="Small" />
            <div className="backdrop" />
          </SmallImage>
        </div>
      </Container>
      <Stack>
        {project.images?.large.length > 0 && (
          <>
            <h3>Gallery</h3>
            <ImageGallery images={[]} />
          </>
        )}
      </Stack>
    </>
  );
};

export default ProjectDetails;
