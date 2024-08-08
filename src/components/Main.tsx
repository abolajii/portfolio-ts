import ChildrenContainer from "./ChildrenContainer";
import React from "react";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import useMediaQuery from "../hooks/useMediaQuery";
import { useSidebar } from "../store/useSidebar";

const MainContainer = styled.div<{ isOpen: boolean }>`
  margin-left: ${(props) => (props.isOpen ? "200px" : "110px")};
  flex-grow: 1;
  overflow-y: auto;
  transition: margin-left 0.3s;
  /* max-height: 100vh; */

  &.mobile {
    margin-left: 0;
  }
`;

const Main: React.FC = () => {
  const { isOpen } = useSidebar();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const sectionsRefs = React.useRef<(HTMLElement | null)[]>([]);

  const handleScrollIntoView = (id: number) => {
    const section = sectionsRefs.current[id];
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex">
      <Sidebar handleScrollIntoView={handleScrollIntoView} />
      <MainContainer isOpen={isOpen} className={`${isMobile && "mobile"}`}>
        <ChildrenContainer sectionsRefs={sectionsRefs} />
      </MainContainer>
    </div>
  );
};

export default Main;
