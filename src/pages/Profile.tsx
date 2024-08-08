// import React from "react";
import profile from "./business.svg";
import styled from "styled-components";

const Container = styled.div`
  max-width: 300px;
  height: 300px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const Profile = () => {
  return (
    <Container>
      <img src={profile} />
    </Container>
  );
};

export default Profile;
