// import React from 'react'

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
  @media screen and (max-width: 768px) {
    height: 200px;
  }
`;

const SmallImage = styled.div`
  background-color: rgba(214, 189, 189, 0.05);

  height: 170px;
  width: 90px;

  @media screen and (max-width: 768px) {
    height: 130px;
  }
`;

const ProjectDetails = () => {
  return (
    <Container className="flex gap-md">
      <div className="flex-1">
        {/* description */}
        <p className="mb-6">
          Embark on a journey of love with Lovebirdz, your premier dating
          application designed for meaningful connections. Whether you're
          insearch of romance or eager to reconnect with loved ones or
          colleagues, Lovebirdz offers a vibrant space for forging
          relationships. With personalized profiles and cutting-edge matching
          algorithms, Lovebirdz elevates your online dating experience, making
          it a seamless quest for genuine connections. Uncover the joy of
          discovering your perfect match or rekindling connections on Lovebirdz,
          where every interaction is an opportunity for love to blossom. Join
          Lovebirdz today and let your heart guide you to meaningful connections
          in the world of digital romance{" "}
        </p>
      </div>
      <div className="flex-1 flex align-end">
        <BigImage />
        <SmallImage />
        {/* Side by side  */}
        {/* let it have height and width of desktop and mobile, and let the image be align end  */}
        {/* Desktop Image View */}
        {/* Mobile Image View */}
      </div>
      {/* Stack of the project */}
      {/* Gallery of the project 
     show left and right arrow then carousel, so when u click its slide left or right */}

      {/* Then another sectionn to show related real life clone with same stack*/}
    </Container>
  );
};

export default ProjectDetails;
