import { styled } from "styled-components";
import CarouselCard from "./CarouselCard";
import SectionTitle from "./SectionTitles";

// Styled carousel and card components
const Carousel = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding: 1rem;
  scroll-snap-type: x mandatory;
  scroll-padding: 0 1rem;
  -webkit-overflow-scrolling: touch; // Smooth scrolling on iOS
  scrollbar-width: none; // Show scrollbar on Firefox
  width: fit-content;
  max-width: 90vw;
  margin-bottom: 2rem;

  @media (max-width: 600px) {
    gap: 0.5rem;
  }
`;

// Carousel component to hold multiple CarouselCard components
const CarouselComponent = () => {
  return (
    <>
      <SectionTitle>See our work</SectionTitle>
      <Carousel>
        <CarouselCard
          link="/secondPage"
          image="/EctoE.png"
          title="Recent Survey Planning Outcomes"
        />
        <CarouselCard
          link="/secondPage"
          image="/EctoE.png"
          title="Recent Client Reviews"
        />
        <CarouselCard
          link="/secondPage"
          image="/EctoE.png"
          title="Bat Diary"
        />
      </Carousel>
    </>
  );
};

export default CarouselComponent;
