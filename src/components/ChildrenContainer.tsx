import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import React from "react";
import Work from "../pages/Work";
import { useActiveLink } from "../store/useActiveLink";

interface ChildrenProp {
  children?: React.ReactNode;
  sectionsRefs: React.MutableRefObject<(HTMLElement | null)[]>;
}

const ChildrenContainer: React.FC<ChildrenProp> = ({
  children,
  sectionsRefs,
}) => {
  const { setActiveLink } = useActiveLink();

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // // Calculate which section is currently in view
      const activeSection = sectionsRefs.current.findIndex(
        (sectionRef) =>
          sectionRef &&
          sectionRef.offsetTop - 100 <= scrollPosition &&
          sectionRef.offsetTop + sectionRef.offsetHeight - 100 > scrollPosition
      );

      // // Update the active link if the section is found
      if (activeSection !== -1) {
        setActiveLink(activeSection);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionsRefs, setActiveLink]);

  if (children) {
    return <>{children}</>;
  }
  return (
    <>
      <div ref={(el) => (sectionsRefs.current[1] = el)}>
        <Home />
      </div>
      <div ref={(el) => (sectionsRefs.current[2] = el)}>
        <About />
      </div>
      <div ref={(el) => (sectionsRefs.current[3] = el)}>
        <Work />
      </div>
      <div ref={(el) => (sectionsRefs.current[4] = el)}>
        <Contact />
      </div>
    </>
  );
};

export default ChildrenContainer;
