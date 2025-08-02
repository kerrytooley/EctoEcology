"use client";

import styled from "styled-components";
import Image from "next/image";
import SectionTitle, { Text } from "./SectionTitle";
import Link from "next/link";
import FindOutMoreButton from "./FindOutMoreButton";
import { colors } from "@/styles/theme";


const OurServicesWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  width: 100%;
  max-width: 100vh;
  background-color: ${colors.light};
  margin: 1rem;
  height: 400px;
`;

const ServicesColumn = styled.div`
  flex: 2;
  flex-direction: column;
  width: 100%;
  margin: 1rem;
  font-size: 20px;
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
            <SectionTitle>BERS/Phase 2 Bat Survey</SectionTitle>
            <BersLink href={"secondScreen"}>
              We specialise in Phase 2/BERS surveys for small to medium
              developments across Southern England.{" "}
            </BersLink>
            <Text>
              Once you have completed an initial Phase 1 survey we can take
              over, we conduct dusk and dawn surveys between May - September
            </Text>
            <FindOutMoreButton />
          </ServicesColumn>
        </OurServicesWrapper>
    </>
  );
};

export default OurServicesSection;
