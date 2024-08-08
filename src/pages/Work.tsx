import { MdWorkHistory } from "react-icons/md";
import styled from "styled-components";

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
    width: 70px;
    height: 3px;
    border-radius: 4px;
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
    background-color: rgb(230, 97, 153); /* Orange for On going */
  }

  .icon-title {
    font-size: 12px;
  }

  .done-title {
    color: #4caf50; /* Green for Done */
  }

  .ongoing-title {
    color: rgb(230, 97, 153); /* Orange for On going */
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
  border-radius: 3px;
  background-color: #2d2d2d;
  color: rgb(204, 204, 204);
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
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const Work = () => {
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
        <Project>
          <DivA>
            {/* Project Image or Content */}
            <div className="flex justify-end">
              <div className="ongoing-icon tag"></div>
            </div>
          </DivA>
          <DivB>
            {/* Project Details */}
            <p>Project Title</p>
            <p>Short Description</p>
          </DivB>
        </Project>
        <Project>
          <DivA>
            {/* Project Image or Content */}

            <div className="flex justify-end">
              <div className="done-icon tag"></div>
            </div>
          </DivA>
          <DivB>
            {/* Project Details */}
            <p>Project Title</p>
            <p>Short Description</p>
          </DivB>
        </Project>
        <Project>
          <DivA>
            {/* Project Image or Content */}
            <div className="flex justify-end">
              <div className="ongoing-icon tag"></div>
            </div>
          </DivA>
          <DivB>
            {/* Project Details */}
            <p>Project Title</p>
            <p>Short Description</p>
          </DivB>
        </Project>
        {/* Add more Project components as needed */}
      </GridContainer>
    </Container>
  );
};

export default Work;
