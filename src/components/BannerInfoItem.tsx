"use client";

import { styled } from "styled-components";
import { useState } from "react";

const BannerInfoItemContainer = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: inherit;
  width: 100%;
  max-width: 100%;
  height: 80px;
`;

const ContainerDiv = styled.div<{ visible?: boolean }>`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-direction: column;
  z-index: 999;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  pointer-events: ${({ visible }) => (visible ? "auto" : "none")};
  transition: opacity 0.4s ease;
`;

const Image = styled.img`
  height: 50px;
  width: auto;
`;

interface BannerInfoItemProps {
  vectorImage?: string;
  title?: string;
  description?: string;
}

const BannerInfoItem = ({
  vectorImage,
  title,
  description,
}: BannerInfoItemProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const showDescription = isClicked || isHovered;

  return (
    <BannerInfoItemContainer
      onClick={() => setIsClicked((prev) => !prev)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ContainerDiv visible={showDescription}>
        <p>{description || "This is a default description for the banner."}</p>
      </ContainerDiv>
      <ContainerDiv visible={!showDescription}>
        <Image src={vectorImage || "globe.svg"} alt={title} />
        <h1>{title || "Default Title"}</h1>
      </ContainerDiv>
    </BannerInfoItemContainer>
  );
};

export default BannerInfoItem;
