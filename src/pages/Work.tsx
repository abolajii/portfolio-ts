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
import styled from "styled-components";

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
  stacks: Array<keyof typeof iconMapping>;
  initials: string;
};

// Styled Components (unchanged)
const Container = styled.div`
  background-color: #222222;
  color: rgb(204, 204, 204);
  padding: 20px 30px;
  padding-bottom: 90px;
  min-height: 300px;
  background: linear-gradient(to top, #2d2d2d, #222222) !important;

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
    background-color: rgb(230, 97, 153); /* Orange for Ongoing */
  }

  .icon-title {
    font-size: 12px;
  }

  .done-title {
    color: #4caf50; /* Green for Done */
  }

  .ongoing-title {
    color: rgb(230, 97, 153); /* Orange for Ongoing */
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

const Project = styled.div`
  display: grid;
  grid-template-rows: minmax(200px, 2fr) minmax(100px, 1fr); /* 2/3 for image, 1/3 for details */
  height: 100%;
  background-color: #2d2d2d;
  color: rgb(204, 204, 204);
  overflow: hidden;
  background: linear-gradient(to top, #2d2d2d, #222222) !important;
  border: 1px solid rgba(0, 255, 0, 0.01);
`;

const DivA = styled.div`
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`;

const DivB = styled.div`
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  padding: 10px;
  color: white;
  display: flex;
  flex-direction: column;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const ProjectInitials = styled.div<{ bgColor: string }>`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.bgColor};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  border-radius: 50%;
`;

const randomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const Work = () => {
  const projects: ProjectType[] = [
    {
      id: 1,
      onGoing: false,
      name: "Lovebird Dating Application",
      stacks: ["react", "node", "firebase"],
      initials: "LD",
    },
    {
      id: 2,
      onGoing: false,
      name: "Lovebird Admin Page",
      stacks: ["react", "node", "firebase"],
      initials: "LA",
    },
    {
      id: 3,
      onGoing: true,
      name: "Logistics Manager",
      stacks: ["react", "node", "firebase"],
      initials: "LM",
    },
    { id: 4, name: "FlatHub", stacks: ["react", "styled"], initials: "FH" },
    {
      id: 5,
      name: "One Card Nigeria",
      stacks: ["react", "firebase", "redux"],
      initials: "OC",
    },
    {
      id: 6,
      name: "Afriskaut",
      stacks: ["react", "tailwindcss", "node"],
      initials: "AF",
    },
    { id: 7, name: "WestPay", stacks: ["react", "mongodb"], initials: "WP" },
    {
      id: 8,
      name: "Connect Nigeria",
      stacks: ["react", "mysql"],
      initials: "CN",
    },
  ];

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
          <p className="icon-title done-title">Done</p>
        </div>
        <div className="flex align-center mt-sm">
          <div className="icon ongoing-icon" />
          <p className="icon-title ongoing-title">Ongoing</p>
        </div>
      </div>

      <GridContainer>
        {projects.map((project) => (
          <Project key={project.id}>
            <DivA>
              {/* Project Image or Content */}
              <div className="flex justify-end">
                <div
                  className={
                    project.onGoing ? "ongoing-icon tag" : "done-icon tag"
                  }
                ></div>
              </div>
              <ProjectInitials bgColor={randomColor()}>
                {project.initials}
              </ProjectInitials>
            </DivA>
            <DivB>
              {/* Project Details */}
              <p className="mb-sm">{project.name}</p>
              <div className="flex gap-sm">
                {project.stacks.map((stack) => (
                  <span key={stack}>{iconMapping[stack]}</span>
                ))}
              </div>
            </DivB>
          </Project>
        ))}
      </GridContainer>
    </Container>
  );
};

export default Work;
