"use client";

import styled from "styled-components";

const CardSet = styled.div`
    justify-content:center;
    display: flex;
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
    flex-direction: row;
    margin-bottom: 2rem;

    
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const InfoCard = styled.div`
  background-color: #f1cfb4ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 0 0 250px;
  padding: 1rem;
  margin: 1rem; 
`;

const VectorImage = styled.img`
  height: 20px;
  width: auto;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    height: 15px;
  }
`;

interface InfoCardProps {
  title: string;
  description: string;
  vectorImage: string;
}

const InfoCardData = [
  {
    title: "Card 1",
    description: "This is my first card",
    vectorImage: "/next.svg",
  },
  {
    title: "Card 2",
    description: "This is my second card",
    vectorImage: "/next.svg",
  },
  {
    title: "Card 3",
    description: "This is my third card",
    vectorImage: "/next.svg",
  },
];

const MyInfoCard = ({ title, description, vectorImage }: InfoCardProps) => {
  return (
    <InfoCard>
      <VectorImage src={vectorImage} />
      <h1>{title}</h1>
      <p>{description}</p>
    </InfoCard>
  );
};

const WhatWeDoInfo = () => {
  return (
    <CardSet>
      {InfoCardData.map((data) => (
        <MyInfoCard
          title={data.title}
          description={data.description}
          vectorImage={data.vectorImage}
        />
      ))}
      ;
    </CardSet>
  );
};

export default WhatWeDoInfo;
