import Checkbox from "../components/Checkbox"; // Adjust the import path as necessary
import { MdFilterList } from "react-icons/md";
import React from "react";
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

const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  background: linear-gradient(to left, #2d2d2d, #7e967f);
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: rgba(192, 227, 192, 0.1);
  }

  &:active {
    transform: scale(1.04);
  }
`;

const FilterContent = styled.div<{ isVisible: boolean }>`
  max-height: ${(props) => (props.isVisible ? "400px" : "0")};
  height: 20px;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`;

const Work = () => {
  const [isFilterContentVisible, setIsFilterContentVisible] =
    React.useState(false);

  const toggleFilterContent = () => {
    setIsFilterContentVisible((prev) => !prev);
  };

  return (
    <Container>
      <div className="flex">
        <div className="mr-md">
          <Heading>My Projects</Heading>
          <Line />
        </div>
        <div className="flex">
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
      <div>
        <div className="flex">
          <p className="project">
            Welcome! Below are the projects I have worked on. Please walk with
            me as I showcase my experience and the skills I have honed over the
            years. From frontend development using React to backend scripting
            with Node.js, I've delved into various technologies to create
            seamless and efficient solutions. Whether it's building robust
            databases with MongoDB and MySQL or implementing scalable state
            management with Redux, my journey has been rich with learning and
            growth. Let's explore these projects together, where each line of
            code tells a story of passion, commitment, and innovation.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Work;
