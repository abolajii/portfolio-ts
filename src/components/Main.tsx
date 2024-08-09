import ChildrenContainer from "./ChildrenContainer";
import React from "react";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import { useActiveLink } from "../store/useActiveLink";
import useMediaQuery from "../hooks/useMediaQuery";
import { useSidebar } from "../store/useSidebar";

interface MainProp {
  children?: React.ReactNode;
  isOpen?: boolean;
}

const MainContainer = styled.div<MainProp>`
  margin-left: ${(props) => (props.isOpen ? "200px" : "110px")};
  flex-grow: 1;
  overflow-y: auto;
  transition: margin-left 0.3s;

  /* height: 700px; */

  &.mobile {
    margin-left: 0;
  }
`;

const Main: React.FC<MainProp> = ({ children }) => {
  const { isOpen, autoScroll, setAutoScroll } = useSidebar();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const { activeLink, setActiveLink } = useActiveLink();

  const sectionsRefs = React.useRef<(HTMLElement | null)[]>([]);

  React.useEffect(() => {
    //
    if (autoScroll) {
      setActiveLink(activeLink);
      handleScrollIntoView(activeLink);
      setAutoScroll(false);
    }
  }, [autoScroll, activeLink, setAutoScroll, setActiveLink]);

  const handleScrollIntoView = (id: number) => {
    const section = sectionsRefs.current[id];
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  React.useEffect(() => {
    if (isMobile) {
      const handleResize = () => {
        document.documentElement.style.setProperty(
          "--vh",
          `${window.innerHeight * 0.01}px`
        );
      };

      handleResize(); // Set initially
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [isMobile]);

  if (children) {
    return (
      <div className="flex">
        <Sidebar handleScrollIntoView={handleScrollIntoView} single />
        <MainContainer isOpen={isOpen} className={`${isMobile && "mobile"}`}>
          {children}
        </MainContainer>
      </div>
    );
  }

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
