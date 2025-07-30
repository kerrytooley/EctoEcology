"use client";

import styled from "styled-components";
import BannerInfoItem from "./BannerInfoItem";
import NavigationButton from "./NavigationButton";
import { SectionTitle, Text } from "./SectionTitle";

const BannerContainer = styled.div<{ variant?: "info" | "sales" }>`
  background-color: ${({ variant }) =>
    variant === "info" ? "#f4f3e8" : "#24582a"};
  color: ${({ variant }) => (variant === "info" ? "#24582a" : "#f4f3e8")};
  padding: 0.5rem;
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
    vectorImage: "clock.svg",
    title: "Ten day report turnaround",
    description: "Receive your report within ten days of the survey date.",
  },
  {
    vectorImage: "coins.svg",
    title: "Price cut guarantee",
    description:
      "You won't find a better quote than us! But if you do - we'll beat it by 20%.",
  },
  {
    vectorImage: "uk2.svg",
    title: "South UK coverage",
    description:
      "We offer services across the south of the UK and the Midlands.",
  },
];

const infoBanner = () => {
  return (
    <BannerContainer variant="info">
      {infoItemProps.map((prop) => (
        <BannerInfoItem
          key={prop.title}
          vectorImage={prop.vectorImage}
          title={prop.title}
          description={prop.description}
        />
      ))}
    </BannerContainer>
  );
};

const salesBanner = ({ title, description, link }: BannerProps) => {
  return (
    <BannerContainer>
      <h1 style={{ padding: 10 }}>
        {title ||
          "- Limited Availability 2025 - Now Scheduling Bat Surveys (BERS) -"}
      </h1>
      <p>
        {description ||
          "Planning a project that may require a bat survey? Ensure you're compliant and on schedule—submit your survey request today."}
      </p>
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
