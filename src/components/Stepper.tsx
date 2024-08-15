import { IoMdCheckmark } from "react-icons/io";
import { MdPendingActions } from "react-icons/md";
import React from "react";
import { TbRotateClockwise2 } from "react-icons/tb";
import { formatDate } from "../utils";
import { getTasks } from "../api/auth"; // Adjust the import according to your file structure
import styled from "styled-components";
import { useParams } from "react-router-dom";
type StepStatus = "pending" | "inprogress" | "done";

interface Step {
  index: number;
  description: string;
  status: StepStatus;
  dateToFinish: Date;
}

// interface StepperProps {
//   steps: Step[];
// }

const StepContainer = styled.div`
  display: flex;
  align-items: center;

  .date {
    font-size: 10px;
    margin-left: 7px;
    color: rgba(240, 250, 240, 0.6);
  }
`;

const StepIconContainer = styled.div<{ status: StepStatus }>`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${({ status }) =>
    status === "done"
      ? "#4CAF50"
      : status === "inprogress"
      ? "#FF9800"
      : "#929292"};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: ${({ status }) => (status === "inprogress" ? "18px" : "14px")};
`;

const StepDescription = styled.div<{ status: StepStatus }>`
  margin-left: 7px;
  font-size: 14px;
  color: ${({ status }) => (status === "done" ? "#4CAF50" : "#CCCCCC")};
`;

const Line = styled.div`
  width: 2px;
  height: 24px;
  background-color: rgba(204, 204, 204, 0.5);
  margin: 3px 0;
  margin-left: 11px;
  border-radius: 3px;
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

const Stepper: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [steps, setSteps] = React.useState<Step[]>([]);

  React.useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await getTasks(id!);
        const { tasks } = response.data;

        // Map the data to your desired format
        const allSteps = tasks.map((task: Step, index: number) => ({
          index,
          description: task.description,
          status: task.status as StepStatus,
          dateToFinish: new Date(task.dateToFinish), // Format the date
        }));

        setSteps(allSteps);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProject();
  }, [id]);

  const [loading, setLoading] = React.useState(false);
  const [showSteps, setShowSteps] = React.useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowSteps(true);
    }, 600);
  };

  return (
    <div>
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
          {steps.map((step, index) => (
            <React.Fragment key={step.index}>
              <StepContainer>
                <StepIconContainer status={step.status}>
                  {step.status === "done" ? (
                    <IoMdCheckmark size={13} />
                  ) : step.status === "inprogress" ? (
                    <TbRotateClockwise2 size={13} className="spin" />
                  ) : (
                    <MdPendingActions size={13} className="spin" />
                  )}
                </StepIconContainer>
                <div>
                  <StepDescription status={step.status}>
                    {step.description}
                  </StepDescription>
                  <p className="date">
                    {step.status === "pending"
                      ? "Pending"
                      : formatDate(step.dateToFinish)}
                  </p>
                </div>
              </StepContainer>
              {index < steps.length - 1 && <Line />}
            </React.Fragment>
          ))}
        </>
      )}
    </div>
  );
};

export default Stepper;
