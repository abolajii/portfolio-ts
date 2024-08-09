// import React from 'react'

import { FaNodeJs, FaReact } from "react-icons/fa";

import { SiMongodb } from "react-icons/si";
import bg1 from "../assets/lb1.png";
import mbg1 from "../assets//mobilelb1.png";
import styled from "styled-components";

const Container = styled.div`
  color: rgba(204, 204, 204, 7);

  &.gap-md {
    height: 250px;
    @media screen and (max-width: 768px) {
      height: auto;
      flex-direction: column;
    }
  }

  .mb-6 {
    line-height: 1.5;
    font-size: 15px;
  }
`;

const BigImage = styled.div`
  background-color: rgba(214, 189, 189, 0.05);
  height: 100%;
  width: 450px;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .backdrop {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }

  @media screen and (max-width: 768px) {
    height: 200px;
  }
`;

const SmallImage = styled.div`
  background-color: rgba(214, 189, 189, 0.05);
  position: relative;

  height: 170px;
  width: 90px;
  margin-bottom: 25.5px;
  border-radius: 5px;
  .backdrop {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }

  @media screen and (max-width: 768px) {
    height: 130px;
  }
`;

const Stack = styled.div`
  h3 {
    margin-top: 30px;
  }
`;

const ProjectDetails = () => {
  return (
    <>
      <Container className="flex gap-md">
        <div className="flex-1">
          <p className="mb-6">
            Embark on a journey of love with Lovebirdz, your premier dating
            application designed for meaningful connections. Whether you're
            insearch of romance or eager to reconnect with loved ones or
            colleagues, Lovebirdz offers a vibrant space for forging
            relationships. With personalized profiles and cutting-edge matching
            algorithms, Lovebirdz elevates your online dating experience, making
            it a seamless quest for genuine connections. Uncover the joy of
            discovering your perfect match or rekindling connections on
            Lovebirdz, where every interaction is an opportunity for love to
            blossom. Join Lovebirdz today and let your heart guide you to
            meaningful connections in the world of digital romance{" "}
          </p>
          <div className="flex gap-md mt-md">
            <FaReact size={20} color="#61dafb" />
            <FaNodeJs size={20} color="#8CC84B" />
            <SiMongodb size={20} color="#47A248" />
          </div>
        </div>
        <div className="flex-1 flex align-end">
          <BigImage>
            <div className="backdrop" />
            <img src={bg1} alt="Big" />
          </BigImage>

          <SmallImage>
            <img src={mbg1} alt="Small" />
            <div className="backdrop" />
          </SmallImage>
        </div>
      </Container>
      <Stack>
        <h3>Gallery</h3>
      </Stack>
    </>
  );
};

export default ProjectDetails;
