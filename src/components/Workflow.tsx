interface Step {
  number: number;
  description: string;
  status: StepStatus;
  statusDescription: string;
  date: string;
}

type StepStatus = "notStarted" | "inProgress" | "done";

import React, { useState } from "react";

import Stepper from "./Stepper";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 50px;
  padding: 30px;
  border-radius: 4px;
  width: 500px;
  border: 1px solid rgba(0, 255, 0, 0.1);
  margin-bottom: 70px;

  background: linear-gradient(
    to bottom,
    #222,
    rgba(76, 175, 80, 0.04)
  ) !important;

  h2 {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #45a049;
  }
`;

const Spinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #4caf50;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;
  margin: 20px auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Workflow: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [showSteps, setShowSteps] = useState(false);

  const steps: Step[] = [
    {
      number: 1,
      description: "Fix Sidebar Icon",
      status: "done",
      statusDescription: "Completed",
      date: "08:36PM | Jan 23, 2024",
    },
    {
      number: 2,
      description: "Create Dashboard component",
      status: "done",
      statusDescription: "Done",
      date: "10:14AM | Jan 24, 2024",
    },
    {
      number: 3,
      description: "Create like button",
      status: "inProgress",
      statusDescription: "In Progress",
      date: "10:30AM | Jan 25, 2024",
    },
    {
      number: 4,
      description: "Implement Login functionality",
      status: "inProgress",
      statusDescription: "In Progress",
      date: "02:20PM | Jan 25, 2024",
    },
    {
      number: 5,
      description: "Endpoint creation",
      status: "notStarted",
      statusDescription: "Not Started",
      date: "Pending",
    },
  ];

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowSteps(true);
    }, 2000);
  };

  return (
    <Container>
      <h2>Project Tracker</h2>
      {!showSteps ? (
        <>
          {!loading && (
            <>
              <p>Want to see where project stand? Click below to view</p>
              <Button onClick={handleClick}>View</Button>
            </>
          )}
          {loading && <Spinner />}
        </>
      ) : (
        <>
          <Stepper steps={steps} />
        </>
      )}
    </Container>
  );
};

export default Workflow;
