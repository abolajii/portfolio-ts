import { BiLogoFirebase, BiLogoTypescript } from "react-icons/bi";
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiMongodb,
  SiRedux,
  SiStyledcomponents,
  SiTailwindcss,
} from "react-icons/si";
// import React from 'react'
import { useNavigate, useParams } from "react-router-dom";

import { FaAngleLeft } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import Stepper from "../components/Stepper";
import styled from "styled-components";
import { useActiveLink } from "../store/useActiveLink";
import { useSidebar } from "../store/useSidebar";

type StepStatus = "notStarted" | "inProgress" | "done";

interface Step {
  number: number;
  description: string;
  status: StepStatus;
  statusDescription: string;
}

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
  id: number;
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

const projects: ProjectType[] = [
  {
    id: 1,
    onGoing: true,
    name: "Lovebird Dating Application",
    stacks: ["react", "node", "firebase"],
    link: "https://lovebirdz-app.web.app",
    images: {
      large: [],
      small: [],
    },
    description:
      "Embark on a journey of love with Lovebirdz, your premier dating application designed for meaningful connections. Whether you're insearch of romance or eager to reconnect with loved ones or colleagues, Lovebirdz offers a vibrant space for forging relationships. With personalized profiles and cutting-edge matching algorithms, Lovebirdz elevates your online dating experience, making it a seamless quest for genuine connections. Uncover the joy of discovering your perfect match or rekindling connections on Lovebirdz, where every interaction is an opportunity for love to blossom. Join Lovebirdz today and let your heart guide you to meaningful connections in the world of digital romance.",
  },
  {
    id: 4,
    name: "FlatHub",
    stacks: ["react"],
    images: {
      large: [],
      small: [],
    },
  },
  {
    id: 3,
    onGoing: true,
    link: "https://logisticsmanagerapp.web.app",
    name: "Logistics Manager",
    stacks: ["react", "node", "firebase"],
    images: {
      large: [],
      small: [],
    },
    description:
      "Revolutionize your logistics management with Logistics Manager – the ultimate solution for seamless operations. Experience unmatched convenience as you effortlessly create single or multiple jobs, upload job details using Excel, and manage expenses with ease. Gain valuable insights with detailed daily, weekly, and monthly reports on your job activity, returns, and expenses. Our user-friendly interface empowers you to track the number of jobs, predict top clients for repeat jobs, and even create backdated jobs with full control. Stay on top of your business with activity charts showcasing monthly trends. Need quick communication? Send messages directly to clients. Transform your logistics experience with file uploads, comprehensive reports, and intuitive features. Elevate your business – simplify logistics with Logistics Manager!",
  },
  {
    id: 5,
    name: "One Card Nigeria",
    stacks: ["react", "firebase"],
    images: {
      large: [],
      small: [],
    },
    description: "",
  },
  {
    id: 6,
    name: "Afriskaut",
    stacks: ["react"],
    images: {
      large: [],
      small: [],
    },
  },
  {
    id: 7,
    name: "WestPay",
    stacks: ["react"],
    images: {
      large: [],
      small: [],
    },
  },
  {
    id: 8,
    name: "Connect Nigeria",
    stacks: ["react"],
    images: {
      large: [],
      small: [],
    },
  },
  {
    id: 2,
    onGoing: true,
    name: "Lovebird Admin Page",
    stacks: ["react", "node", "firebase"],
    images: {
      large: [],
      small: [],
    },
  },
  {
    id: 9,
    name: "WhatsApp Clone",
    stacks: ["react", "node", "firebase"],
    images: {
      large: [],
      small: [],
    },
  },
  {
    id: 10,
    name: "Twitter Clone",
    stacks: ["react", "node", "firebase"],
    images: {
      large: [],
      small: [],
    },
  },
  {
    id: 11,
    name: "Notion Clone",
    stacks: ["react", "node", "firebase"],
    images: {
      large: [],
      small: [],
    },
  },
  {
    id: 12,
    name: "LinkedIn Clone",
    stacks: ["react", "node", "firebase"],
    images: {
      large: [],
      small: [],
    },
  },
  {
    id: 13,
    name: "Message Clone",
    stacks: ["react", "node", "firebase"],
    images: {
      large: [],
      small: [],
    },
  },
];

const Container = styled.div`
  min-height: 100vh;
  transition: all 0.3s; /* Changed transition duration to a more reasonable value */
  background-color: #2d2d2d;
  color: rgb(204, 204, 204);
  padding: 30px;

  background: linear-gradient(to bottom, #222222, rgba(76, 175, 80, 0.05));
  .top {
    margin-bottom: 20px;
  }
`;

const Status = styled.div`
  padding: 4px 12px;
  border-radius: 3px;
  font-size: 14px;
`;

const Ongoing = styled(Status)`
  background-color: rgb(218, 105, 152); /* Orange for Ongoing */
`;

const Done = styled(Status)`
  background-color: #4d924f; /* Green for Done */
`;

const Goback = styled.button`
  height: 30px;
  width: 30px;
  border: 1px solid rgba(0, 255, 0, 0.09);
  background-color: transparent;
  margin-bottom: 30px;
  border-radius: 4px;
  &:hover {
    background: rgb(76, 175, 80);
  }
`;

const Single = () => {
  const { id } = useParams<{ id: string }>();
  const { setActiveLink } = useActiveLink();
  const { setAutoScroll } = useSidebar();

  const project = projects.find((each) => each.id === Number(id));

  const navigate = useNavigate();

  const steps: Step[] = [
    {
      number: 1,
      description: "Fix Sidebar Icon",
      status: "done", // Explicitly typed as one of "done" | "inProgress" | "notStarted"
      statusDescription: "Completed",
    },
    {
      number: 2,
      description: "Create Dashboard component",
      status: "done",
      statusDescription: "Done",
    },
    {
      number: 3,
      description: "Create like button",
      status: "inProgress",
      statusDescription: "In Progress",
    },
    {
      number: 4,
      description: "Implement Login functionality",
      status: "inProgress",
      statusDescription: "In Progress",
    },
    {
      number: 5,
      description: "Endpoint creation",
      status: "notStarted",
      statusDescription: "Not Started",
    },
  ];

  return (
    <Container>
      <Goback
        onClick={() => {
          navigate("/");
          setActiveLink(3);
          setAutoScroll(true);
        }}
      >
        <FaAngleLeft color="rgb(204, 204, 204)" size={18} />
      </Goback>
      <div className="flex top align-center justify-between">
        <h2>{project?.name}</h2>
        <div className="mr-lg">
          {project?.onGoing ? (
            <Ongoing>Ongoing</Ongoing>
          ) : (
            <Done>Completed</Done>
          )}
        </div>
      </div>
      {project?.onGoing && <Stepper steps={steps} />}
    </Container>
  );
};

export default Single;
