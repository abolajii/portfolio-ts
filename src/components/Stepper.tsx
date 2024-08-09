import { FaCheckCircle, FaSpinner } from "react-icons/fa";

import React from "react";
import styled from "styled-components";

type StepStatus = "notStarted" | "inProgress" | "done";

interface Step {
  number: number;
  description: string;
  status: StepStatus;
  statusDescription: string;
}

interface StepperProps {
  steps: Step[];
}

const StepContainer = styled.div`
  display: flex;
  align-items: center;
  /* margin-bottom: 20px; */
`;

const StepIconContainer = styled.div<{ status: StepStatus }>`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: ${({ status }) =>
    status === "done"
      ? "#4CAF50"
      : status === "inProgress"
      ? "#FF9800"
      : "#929292"};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: ${({ status }) => (status === "inProgress" ? "18px" : "14px")};
`;

const StepDescription = styled.div<{ status: StepStatus }>`
  margin-left: 7px;
  font-size: 14px;
  color: ${({ status }) => (status === "done" ? "#4CAF50" : "#CCCCCC")};
`;

const Line = styled.div`
  width: 2px;
  height: 20px;
  background-color: #c8c8c8;
  margin: 3px 0;
  margin-left: 9px;
  border-radius: 3px;
`;

const Stepper: React.FC<StepperProps> = ({ steps }) => {
  return (
    <div>
      {steps.map((step, index) => (
        <React.Fragment key={step.number}>
          <StepContainer>
            <StepIconContainer status={step.status}>
              {step.status === "done" ? (
                <FaCheckCircle size={12} />
              ) : step.status === "inProgress" ? (
                <FaSpinner size={12} className="spin" />
              ) : (
                <span>{step.number}</span>
              )}
            </StepIconContainer>
            <StepDescription status={step.status}>
              {step.description}
            </StepDescription>
          </StepContainer>
          {index < steps.length - 1 && <Line />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stepper;
