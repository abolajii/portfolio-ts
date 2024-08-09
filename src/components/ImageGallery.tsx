import React, { useState } from "react";

import styled from "styled-components";

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 920px;
  overflow: hidden;
`;

const Slide = styled.div<{ currentIndex: number }>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${({ currentIndex }) =>
    `translateX(-${(currentIndex - 1) * 100}%)`};
  width: 100%;
`;

const SlideItem = styled.div`
  flex: 1 0 20%; /* Adjust to show 5 items per view */
  border-radius: 4px;
  border: 1px solid #3d3d3d;
  margin: 5px; /* Optional margin to space out items */
  position: relative;
  img {
    height: 90px;
    width: 100%;
    object-fit: cover;
    border-radius: 4px;
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
`;

const ArrowButton = styled.button<{
  direction: "left" | "right";
  disabled?: boolean;
}>`
  top: 50%;
  position: absolute;
  ${({ direction }) => direction}: 0;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
  transform: translateY(-50%);
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
`;

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const imagesPerView = 5; // Number of images to show per view

  const totalImages = images.length;
  const maxIndex = Math.ceil(totalImages / imagesPerView);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const goToNext = () => {
    const nextIndex = currentIndex;
    const startOfNextSet = nextIndex * imagesPerView;
    const hasMoreImages = startOfNextSet <= totalImages;

    if (hasMoreImages) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <SliderContainer>
      <Slide currentIndex={currentIndex}>
        {images.map((image, index) => (
          <SlideItem key={index}>
            <div className="backdrop"></div>
            <img src={image} alt={`Slide ${index}`} />
          </SlideItem>
        ))}
      </Slide>
      <ArrowButton
        direction="left"
        onClick={goToPrevious}
        disabled={currentIndex === 1}
      >
        &#10094;
      </ArrowButton>
      <ArrowButton
        direction="right"
        onClick={goToNext}
        disabled={currentIndex > maxIndex}
      >
        &#10095;
      </ArrowButton>
    </SliderContainer>
  );
};

export default ImageGallery;
