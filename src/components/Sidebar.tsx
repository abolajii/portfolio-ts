import { MdContactPage, MdWorkHistory } from "react-icons/md";
import { RiMenu2Fill, RiMenu3Fill } from "react-icons/ri";

import { FaUserTie } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
// Sidebar.tsx
import React from "react";
import styled from "styled-components";
import { useActiveLink } from "../store/useActiveLink";
import useMediaQuery from "../hooks/useMediaQuery";
import { useNavigate } from "react-router-dom";
import { useSidebar } from "../store/useSidebar";

const Container = styled.div``;

const SidebarContainer = styled.div<{ isOpen?: boolean }>`
  position: fixed;
  min-height: 100vh;
  width: ${(props) => (props.isOpen ? "200px" : "110px")};
  border-right: 1px solid rgba(255, 255, 255, 0.03);
  transition: all 0.3s;
  padding: 10px;
  color: white;
  display: flex;
  flex-direction: column;

  background: linear-gradient(to bottom, #222222, rgba(76, 175, 80, 0.05));
`;

const HamBurgerContainer = styled.div`
  margin-bottom: 30px;
`;

const SidebarLink = styled.div<{ isActive?: boolean; isOpen?: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  margin-left: 30px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
  color: ${(props) =>
    props.isActive ? "rgb(76, 175, 80)" : "rgba(0, 255, 0, 0.2)"};

  background: ${(props) =>
    props.isActive
      ? "linear-gradient( to top, #2d2d2d, rgba(76, 175, 80, 0.1))"
      : "transparent"};
  margin-top: 5px;

  & > span {
    margin-left: 10px;
    font-size: 15px;
    text-transform: capitalize;
    display: ${(props) => (props.isOpen ? "inline" : "none")};
    color: ${(props) =>
      props.isActive ? "rgb(204, 204, 204)" : "rgba(204, 204, 204,.36)"};

    opacity: ${(props) => (props.isOpen ? 1 : 0)};
    transform: ${(props) =>
      props.isOpen ? "translateX(0)" : "translateX(-10px)"};

    transition: opacity 0.3s, transform 0.3s;
    display: inline-block;
  }

  &:hover {
    background: linear-gradient(to top, #2d2d2d, rgba(76, 175, 80, 0.1));
    color: rgb(76, 175, 80);

    & > span {
      color: rgb(204, 204, 204);
    }
  }

  @media screen and (max-width: 768px) {
  }
`;

const Mobile = styled.div`
  /* background: linear-gradient(to top, #222222, rgba(76, 175, 80, 0.02)); */
  background: rgba(34, 34, 34, 1);
  border-top: 1px solid rgba(0, 255, 0, 0.09);
  position: fixed;
  bottom: -1px;
  width: 100%;
  z-index: 99;
  /* height: 65px; */
`;

const links = [
  {
    id: 1,
    title: "Home",
    icon: <IoIosHome />,
  },
  { id: 2, title: "About", icon: <FaUserTie /> },
  { id: 3, title: "Projects", icon: <MdWorkHistory /> },
  { id: 4, title: "Contact", icon: <MdContactPage /> },
];

const Sidebar: React.FC<{
  handleScrollIntoView: (id: number) => void;
  single?: boolean;
  setAutoScroll?: (id?: boolean) => void;
}> = ({ handleScrollIntoView, single }) => {
  const navigate = useNavigate();

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const { isOpen, toggleSidebar, setAutoScroll } = useSidebar();
  const { activeLink, setActiveLink } = useActiveLink();

  const handleOpen = () => {
    toggleSidebar();
  };

  React.useEffect(() => {
    if (single) {
      setActiveLink(3);
    }
  }, [single, setActiveLink]);

  const handleLinkClick = (id: number) => {
    setActiveLink(id);
    if (single) {
      navigate("/");
      setAutoScroll(true);
    } else {
      handleScrollIntoView(id);
    }
  };

  if (isMobile) {
    return (
      <Container>
        <Mobile className="mobile">
          <div className="flex justify-between p-sm">
            {links.map((link) => (
              <SidebarLink
                title={link.title}
                key={link.id}
                isOpen={isOpen}
                isActive={link.id === activeLink}
                onClick={() => handleLinkClick(link.id)}
              >
                <div>{React.cloneElement(link.icon, { size: 18 })}</div>
              </SidebarLink>
            ))}
          </div>
        </Mobile>
      </Container>
    );
  }
  return (
    <SidebarContainer className="desktop" isOpen={isOpen}>
      <HamBurgerContainer className="flex justify-end">
        {isOpen ? (
          <RiMenu3Fill
            size={16}
            color="rgb(76, 175, 80)"
            onClick={handleOpen}
            className="cursor"
          />
        ) : (
          <RiMenu2Fill
            size={16}
            color="rgb(76, 175, 80)"
            onClick={handleOpen}
            className="cursor"
          />
        )}
      </HamBurgerContainer>
      {links.map((link) => (
        <SidebarLink
          title={link.title}
          key={link.id}
          isOpen={isOpen}
          isActive={link.id === activeLink}
          onClick={() => handleLinkClick(link.id)}
        >
          <div>{React.cloneElement(link.icon, { size: 18 })}</div>
          <span>{link.title}</span>
        </SidebarLink>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;
