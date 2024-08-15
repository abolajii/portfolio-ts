import { BiLogoFirebase, BiLogoTypescript } from "react-icons/bi";
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiMongodb,
  SiRedux,
  SiStyledcomponents,
  SiTailwindcss,
} from "react-icons/si";
import { useNavigate, useParams } from "react-router-dom";

import { FaAngleLeft } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import Loading from "../components/Loading";
import ProjectDetails from "./ProjectDetails";
import React from "react";
import Workflow from "../components/Workflow";
import { getProject } from "../api/auth";
import styled from "styled-components";
import { useActiveLink } from "../store/useActiveLink";
import { useSidebar } from "../store/useSidebar";

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

const Container = styled.div`
  min-height: 100vh;
  transition: all 0.3s; /* Changed transition duration to a more reasonable value */
  background-color: #2d2d2d;
  color: rgb(204, 204, 204);
  padding: 30px;

  background: linear-gradient(to bottom, #222222, rgba(76, 175, 80, 0.05));
  .top {
    margin-bottom: 20px;

    @media screen and (max-width: 768px) {
      h2 {
        font-size: 17px;
        margin-bottom: 7px;
      }

      flex-direction: column;
      align-items: start;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;

const Status = styled.div`
  padding: 4px 12px;
  border-radius: 3px;
  font-size: 14px;
  width: fit-content;
  color: rgb(204, 204, 204);

  margin-top: 9px;
  @media screen and (max-width: 768px) {
    /* padding: 20px; */
    margin-bottom: 20px;
  }
`;

const Ongoing = styled(Status)`
  background-color: #c89339; /* Orange for Ongoing */
`;

const Done = styled(Status)`
  background-color: #4d924f; /* Green for Done */
`;

const Goback = styled.button`
  height: 30px;
  width: 30px;
  border: 1px solid rgba(0, 255, 0, 0.09);
  background-color: transparent;
  background: rgb(76, 175, 80);

  margin-bottom: 30px;
  border-radius: 4px;

  &:hover {
    background-color: #419646; /* Darker green on hover */
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
    margin-top: 20px;
  }
`;

const CTAButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #4caf50; /* Green background color */
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049; /* Darker green on hover */
  }

  &:active {
    background-color: #367935; /* Even darker green on click */
  }
`;

const Single = () => {
  const { id } = useParams<{ id: string }>();
  const { setActiveLink } = useActiveLink();
  const { setAutoScroll } = useSidebar();

  const [project, setProject] = React.useState<ProjectType | null>(null);

  const navigate = useNavigate();
  React.useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await getProject(id!);
        const application = response.data;
        // Map the data to your desired format
        setProject(application);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProject();
  }, [id]);

  if (!project)
    return (
      <Container>
        <Loading />
      </Container>
    );

  return (
    <Container>
      <Goback
        className="center"
        onClick={() => {
          navigate("/");
          setActiveLink(3);
          setAutoScroll(true);
        }}
      >
        <FaAngleLeft color="rgb(204, 204, 204)" size={18} />
      </Goback>
      <div className="top">
        <h2>{project?.name}</h2>
        <div className="mr-lg">
          {project?.onGoing ? (
            <Ongoing>Ongoing</Ongoing>
          ) : (
            <Done>Completed</Done>
          )}
        </div>
      </div>
      {/* PROJECT DETAILS */}
      <ProjectDetails project={project} />
      <CTAButton>
        <a target="_blank" rel="noreferrer" href={project.link}>
          VIEW SITE
        </a>
      </CTAButton>
      {/* PROJECT DETAILS */}
      {project?.onGoing && <Workflow />}
    </Container>
  );
};

export default Single;
