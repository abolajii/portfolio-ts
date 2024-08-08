// import React from 'react'

import ChildrenContainer from "./ChildrenContainer";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import useMediaQuery from "../hooks/useMediaQuery";
import { useSidebar } from "../store/useSidebar";

const MainContainer = styled.div<{ isOpen: boolean }>`
  margin-left: ${(props) => (props.isOpen ? "200px" : "110px")};
  flex-grow: 1;
  overflow-y: auto;
  transition: margin-left 0.3s;

  &.mobile {
    margin-left: 0;
  }
`;

const Main: React.FC = () => {
  const { isOpen } = useSidebar();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="flex">
      <Sidebar />
      <MainContainer isOpen={isOpen} className={`${isMobile && "mobile"}`}>
        <ChildrenContainer />
      </MainContainer>
    </div>
  );
};

export default Main;
