import { BiLogoFirebase, BiLogoTypescript } from "react-icons/bi";
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiMongodb,
  SiRedux,
  SiStyledcomponents,
  SiTailwindcss,
} from "react-icons/si";

import { GrMysql } from "react-icons/gr";
import { MdWorkHistory } from "react-icons/md";
import React from "react";
// import RelatedClone from "./RelatedClone";
import bg1 from "../assets/lb1.png";
import { getAllProjects } from "../api/auth";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
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

// Define project type with specific stack keys
type ProjectType = {
  appId: number;
  onGoing?: boolean;
  name: string;
  stacks: Array<keyof typeof iconMapping>;
  bg?: string;
};

// Styled Components (unchanged)
const Container = styled.div`
  background-color: #222222;
  color: rgb(204, 204, 204);
  padding: 40px 30px;
  background: linear-gradient(to top, #2d2d2d, #222222) !important;

  .name {
    font-size: 14px;
  }

  .project {
    padding-top: 10px;
    line-height: 1.4;
  }

  .tag {
    width: 50px;
    height: 2px;
  }

  .icon {
    height: 4px;
    width: 10px;
    border-radius: 1px;
    margin-right: 5px;
  }

  .done-icon {
    background-color: #4caf50; /* Green for Done */
  }

  .ongoing-icon {
    background-color: #c89339; /* Orange for Ongoing */
  }

  .icon-title {
    font-size: 12px;
  }

  .done-title {
    color: #4caf50; /* Green for Done */
  }

  .ongoing-title {
    color: #c89339; /* Orange for Ongoing */
  }
`;

const Heading = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
`;

const Line = styled.div`
  background: linear-gradient(to left, #2d2d2d, #4caf50);
  height: 4px;
  width: 170px;
  border-radius: 1px;
  margin-bottom: 10px;
  margin-top: 5px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  background: linear-gradient(to right, #2d2d2d, #7e967f);
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

const Work = () => {
  const [projects, setProjects] = React.useState<ProjectType[]>([]);

  const { setAutoScroll } = useSidebar();

  const navigate = useNavigate();

  // get projects

  React.useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getAllProjects();
        const { applications } = response.data;
        // Map the data to your desired format
        const projects = applications.map((application: ApplicationType) => ({
          appId: application.appId,
          name: application.name,
          stacks: application.stacks,
          onGoing: application.onGoing,
          bg: application.bg,
        }));

        setProjects(projects);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProjects();
  }, []);

  type ApplicationType = {
    appId: number;
    name: string;
    stacks: Array<keyof typeof iconMapping>;
    onGoing: boolean;
    bg?: string;
  };

  return (
    <Container>
      <div className="flex">
        <div className="mr-md">
          <Heading>My Projects</Heading>
          <Line />
        </div>
        <IconContainer className="flex center">
          <MdWorkHistory size={22} color="#ffffff" />
        </IconContainer>
      </div>

      <div>
        <div className="flex">
          <p className="project">
            Welcome! Below are the projects where I got my hands dirty. These
            projects showcase my expertise in full-stack development, from
            frontend interfaces to backend databases, highlighting my diverse
            skill set and commitment to quality.
          </p>
        </div>
      </div>
      <div className="flex gap-sm">
        <div className="flex align-center mt-sm">
          <div className="icon done-icon" />
          <p className="icon-title done-title">Completed</p>
        </div>
        <div className="flex align-center mt-sm">
          <div className="icon ongoing-icon" />
          <p className="icon-title ongoing-title">Ongoing</p>
        </div>
      </div>

      <GridContainer>
        {projects.map((project) => (
          <Project
            key={project.appId}
            onClick={() => {
              navigate("/project/" + project.appId);
              setAutoScroll(true);
            }}
          >
            <DivA>
              {project.bg !== "" && <img src={bg1} />}
              {project.bg !== "" && <div className="backdrop"></div>}
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

      {/* <div>
        <RelatedClone />
      </div> */}
    </Container>
  );
};

export default Work;
