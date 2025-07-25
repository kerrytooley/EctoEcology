"use client";

import styled from "styled-components";
import BannerInfoItem from "./BannerInfoItem";
import Link from "next/link";
import NavigationButton from "./NavigationButton";

const BannerContainer = styled.div<{ variant?: "info" | "sales" }>`
  background-color: ${({ variant }) =>
    variant === "info" ? "#4CAF50" : "green"};
  color: white;
  padding: 1rem;
  text-align: center;
  flex-direction: ${({ variant }) => (variant === "info" ? "row" : "column")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface BannerProps {
  title?: string;
  description?: string;
  vectorImage?: string;
  link?: string;
  variant?: "info" | "sales";
}

const infoItemProps = [
  {
    vectorImage: "globe.svg",
    title: "EctoEcology",
    description: "Explore the world of ectoplasm and ecology.",
  },
  {
    vectorImage: "vercel.svg",
    title: "Sustainability",
    description: "Learn about sustainable practices in ectoplasm management.",
  },
  {
    vectorImage: "window.svg",
    title: "Research",
    description: "Discover the latest research in ectoplasm and ecology.",
  },
];

const infoBanner = () => {
  return (
    <BannerContainer variant="info">
      {infoItemProps.map((prop) => (
        <BannerInfoItem
          vectorImage={prop.vectorImage}
          title={prop.title}
          description={prop.description}
        />
      ))}
      ;
    </BannerContainer>
  );
};

const salesBanner = ({ title, description, link }: BannerProps) => {
  return (
    <BannerContainer>
      <h1>{title || "Sales Banner"}</h1>
      <p>{description || "This is a sales banner description."}</p>
      <NavigationButton />
    </BannerContainer>
  );
};

const Banner = ({ variant, title, description, link }: BannerProps) => {
  return (
    <>
      {variant === "info"
        ? infoBanner()
        : salesBanner({ title, description, link })}
    </>
  );
};

export default Banner;
