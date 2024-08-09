import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import React from "react";
import Work from "../pages/Work";
import { useActiveLink } from "../store/useActiveLink";

interface ChildrenProp {
  sectionsRefs: React.MutableRefObject<(HTMLElement | null)[]>;
}

const ChildrenContainer: React.FC<ChildrenProp> = ({ sectionsRefs }) => {
  const { setActiveLink } = useActiveLink();
  // but the scroll doesnt make where i am active,, but when i remove the added height, it was normal, so how can i add height and make the active link active on the page i am , or cant it be acheived
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
