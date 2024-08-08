import { MdWorkHistory } from "react-icons/md";
// import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #222222;
  color: rgb(204, 204, 204);
  padding: 20px 30px;
  padding-bottom: 50px;
  min-height: 300px;

  .project {
    padding-top: 10px;
    line-height: 1.4;
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

// const Filter = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 30px;
//   width: 30px;
//   background: linear-gradient(to left, #2d2d2d, #7e967f);
//   cursor: pointer;
//   margin-right: 10px;

//   &:hover {
//     background-color: rgba(192, 227, 192, 0.1);
//   }

//   &:active {
//     transform: scale(1.04);
//   }
// `;

// const FilterContent = styled.div<{ isVisible: boolean }>`
//   max-height: ${(props) => (props.isVisible ? "400px" : "0")};
//   height: 20px;
//   overflow: hidden;
//   transition: max-height 0.3s ease-in-out;
// `;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid rgba(0, 255, 0, 0.07); */
  height: 30px;
  width: 30px;
  background: linear-gradient(to right, #2d2d2d, #7e967f);
  /* border-radius: 50%; */
`;

const Work = () => {
  //   const [isFilterContentVisible, setIsFilterContentVisible] =
  //     React.useState(false);

  //   const toggleFilterContent = () => {
  //     setIsFilterContentVisible((prev) => !prev);
  //   };

  return (
    <Container>
      <div className="flex">
        <div className="mr-md">
          <Heading>my projects</Heading>
          <Line />
        </div>
        <IconContainer className="flex center">
          <MdWorkHistory size={22} color="#ffffff" />
        </IconContainer>
      </div>
      {/* <div className="flex">
        <div className="mr-md flex-1">
          <Heading>Projects</Heading>
          <Line />
        </div>
        {/* <div className="flex">
          <Filter onClick={toggleFilterContent}>
            <MdFilterList color="#fff" size={20} />
          </Filter>
          <FilterContent
            isVisible={isFilterContentVisible}
            className="flex align-center"
          >
            <Checkbox color="#f44336" label="All" />
            <Checkbox color="#ff9800" label="Done" />
            <Checkbox color="#4caf50" label="On going" />
          </FilterContent>
        </div> 
      </div> 
      */}
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
    </Container>
  );
};

export default Work;
