"use client";

import styled from "styled-components";
import Image from "next/image";
import SectionTitle, { Text, Title } from "./SectionTitles";
import Link from "next/link";
import { colors } from "@/styles/theme";
import NavigationButton from "./NavigationButton";
import { ArrowRight } from "lucide-react";


const OurServicesWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  width: 90%;
  max-width: 1000px;
  background-color: ${colors.light};
  margin: 1rem;
  height: 400px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 600px;
    }
`;

const ServicesColumn = styled.div`
  flex: 2;
  flex-direction: column;
  margin: 1rem;
  padding: 1rem;
  font-size: 20px;
  display: grid;
`;

const ImageColumn = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  flex: 1;
`;

const BersLink = styled(Link)`
color: ${colors.dark};
text-decoration-line: underline;
`

const OurServicesSection = () => {
  return (
    <>
      <SectionTitle>Our Services</SectionTitle>
        <OurServicesWrapper>
          <ImageColumn>
            <Image
              src={"/forest.jpg"}
              alt="Image of a bat"
              fill
              style={{ objectFit: "cover" }}
            />
          </ImageColumn>
          <ServicesColumn>
            <Title>BERS/Phase 2 Bat Survey</Title>
            <BersLink href={"secondScreen"}>
              We specialise in Phase 2/BERS surveys for small to medium
              developments across Southern England.{" "}
            </BersLink>
            <Text>
              Once you have completed an initial Phase 1 survey we can take
              over, we conduct dusk and dawn surveys between May - September
            </Text>
            <NavigationButton
              link={"/secondScreen"}
              title={"Find out more"}
              type={"nav"}/>
          </ServicesColumn>
        </OurServicesWrapper>
    </>
  );
};

export default OurServicesSection;
