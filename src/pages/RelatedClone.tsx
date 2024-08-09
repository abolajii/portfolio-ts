import { BiLogoFirebase, BiLogoTypescript } from "react-icons/bi";
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiMongodb,
  SiRedux,
  SiStyledcomponents,
  SiTailwindcss,
} from "react-icons/si";

import { GrMysql } from "react-icons/gr";
// import React from "react";
import bg1 from "../assets/lb9.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSidebar } from "../store/useSidebar";

const Container = styled.div`
  margin-top: 30px;
  margin-bottom: 40px;
`;

const DivA = styled.div`
  position: relative;
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
    bottom: 0px;
    background: rgba(0, 0, 0, 0.5);
  }
`;

const DivB = styled.div`
  padding: 0px 10px;
  color: white;
  display: flex;
  background: linear-gradient(
    to bottom,
    #222,
    rgba(76, 175, 80, 0.04)
  ) !important;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Always create 4 equal columns */
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* 1 column on mobile */
  }
`;

const Project = styled.div`
  display: grid;
  grid-template-rows: minmax(200px, 2fr) minmax(100px, 1fr); /* 2/3 for image, 1/3 for details */
  height: 100%;
  color: rgb(204, 204, 204);
  background-color: #222;
  border: 1px solid rgba(0, 255, 0, 0.09);
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.02); /* Optional hover effect */
  }
`;

const ViewProjectButton = styled.button`
  font-size: 12px;
  padding: 9px 5px;
  border-radius: 3px;

  background-color: #4caf50; /* Green background color */
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #548f57; /* Darker green on hover */
  }
`;

const Status = styled.div`
  padding: 4px 9px;
  border-radius: 3px;
  font-size: 14px;
  margin-top: 10px;
  width: 50px;
`;

const Ongoing = styled(Status)`
  background-color: #c89339; /* Orange for Ongoing */
`;

const Done = styled(Status)`
  background-color: #4d924f; /* Green for Done */
`;

const RelatedClone = () => {
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

  // Define project type with specific stack keys
  type ProjectType = {
    id: number;
    onGoing?: boolean;
    name: string;
    bg: string;
    stacks: Array<keyof typeof iconMapping>;
    initials: string;
  };

  const { setAutoScroll } = useSidebar();

  const navigate = useNavigate();

  const projects: ProjectType[] = [
    {
      onGoing: true,
      id: 1,
      name: "LinkedIn Clone",
      stacks: ["react", "node", "firebase"],
      bg: "#D59C3B",
      initials: "LB",
    },
  ];

  return (
    <Container>
      <p>Below are some real life application clones </p>

      <GridContainer>
        {projects.map((project) => (
          <Project
            key={project.id}
            onClick={() => {
              navigate("/project/" + project.id);
              setAutoScroll(true);
            }}
          >
            <DivA>
              <img src={bg1} />
              <div className="backdrop"></div>
            </DivA>
            <DivB className="flex justify-between align-center">
              <div className="flex-1">
                <p className="mb-sm name">{project.name}</p>
                <div className="flex gap-sm">
                  {project.stacks.map((stack) => (
                    <span key={stack}>{iconMapping[stack]}</span>
                  ))}
                </div>
              </div>
              <div className="flex align-end flex-column">
                <ViewProjectButton>VIEW PROJECT</ViewProjectButton>

                {project?.onGoing ? <Ongoing /> : <Done />}
              </div>
              {/* Project Details */}
            </DivB>
          </Project>
        ))}
      </GridContainer>
    </Container>
  );
};

export default RelatedClone;
