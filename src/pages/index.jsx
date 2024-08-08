/* eslint-disable react/no-unescaped-entities */
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
// import avi from "../assets/avi.jpeg";
import avi from "../../assets/avi.jpeg";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  padding: 50px;
  color: rgb(204, 204, 204);

  .btn {
    gap: 10px;
    margin-bottom: 40px;
  }

  .gap {
    gap: 10px;
  }

  .details {
    max-width: 80%;
  }

  .tag {
    border-radius: 4px;
    color: rgb(76, 175, 80);
    font-size: 12px;
    width: fit-content;
    margin-bottom: 3px;
    padding: 4px 5px;
    background: linear-gradient(rgb(51, 51, 51), rgb(59, 59, 59));
    background: rgba(66, 107, 105, 0.15);
  }

  .name {
    color: rgb(76, 175, 80);
  }

  h2 {
    font-size: 24px;
    font-weight: bold;
  }
`;

const Image = styled.div`
  height: 300px;
  width: 300px;
  border-radius: 12px;
  overflow: hidden;
  background-color: #333;
  border: 1px solid rgb(204, 204, 204);
  margin-left: 70px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Description = styled.p`
  color: rgb(204, 204, 204);
  margin-top: 20px;
`;

const CTAButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #4caf50; /* Green background color */
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049; /* Darker green on hover */
  }

  &:active {
    background-color: #367935; /* Even darker green on click */
  }
`;

const OutlineButton = styled(CTAButton)`
  background-color: transparent;
  color: #4caf50;
  border: 2px solid #4caf50;

  &:hover {
    background-color: rgba(76, 175, 80, 0.1); /* Lighter green on hover */
  }

  &:active {
    background-color: rgba(
      76,
      175,
      80,
      0.2
    ); /* Slightly darker green on click */
  }
`;

const IconLink = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: rgba(76, 175, 80, 0.06);

  &:active {
    transform: scale(0.9);
  }

  &:hover {
    transform: scale(1.08);
  }
`;

const Home = () => {
  return (
    <Container className="flex m-auto gap flex-col">
      <div className="flex-1 flex gap details">
        <div className="flex flex-col">
          <div className="tag">SOFTWARE ENGINEER</div>
          <h2>
            I'm <span className="name">Abolaji</span>
          </h2>
          <h2>Full Stack Developer 👋</h2>

          <Description>
            With 5 years of experience, I specialize in building web
            applications using React, Node.js, and Next.js. I'm well-versed in
            Node JS for backend development, and I also have experience in React
            Native for mobile app development.
          </Description>
          <div className="btn flex">
            <CTAButton>Download CV</CTAButton>
            <OutlineButton>Hire Me</OutlineButton>
          </div>
        </div>
        <div className="flex">
          <Image>
            <img src={avi} alt="Avatar" />
          </Image>
        </div>
      </div>
      <div className="links flex gap">
        <IconLink className="cursor center">
          <FaGithub size={23} />
        </IconLink>
        <IconLink className="cursor center">
          <FaLinkedin size={23} />
        </IconLink>
      </div>
    </Container>
  );
};

export default Home;
