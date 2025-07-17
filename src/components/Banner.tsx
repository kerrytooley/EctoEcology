'use client'

import styled from "styled-components";

const BannerContainer = styled.div`
  background-color: #035e2cff;
  color: white;
  padding: 1rem;
  text-align: center;
`;

interface BannerProps {  title: string;
  description: string;
}

const Banner = ({ title, description }: BannerProps) => {
  return (
    <BannerContainer>
      <h1>{title}</h1>
      <p>{description}</p>
    </BannerContainer>
  );
}


export default Banner;