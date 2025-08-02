import SectionTitle, { SectionSubtitle, Text } from "./SectionTitle";
import styled from "styled-components";
import FindOutMoreButton from "./FindOutMoreButton";

const InfoSection = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width:  90vh;
  padding: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const WhatWeDoSection = () => {
  return (
    <>
      <SectionTitle> How It Works</SectionTitle>
      <InfoSection>
        <SectionSubtitle>
          During a bat emergence re-entry survey, we evaluate bat species and
          their habitats within a specified area, typically development
          projects. We conduct field surveys to identify bat roosts, foraging
          areas, and flight paths. The findings help assess potential impacts on
          bat populations, and inform mitigation strategies to protect these
          species and comply with conservation regulations. We offer bat surveys
          across Maidenhead, Berkshire, Buckinghamshire, Greater London and
          more.
        </SectionSubtitle>
        <FindOutMoreButton/>
      </InfoSection>
    </>
  );
};

export default WhatWeDoSection;
