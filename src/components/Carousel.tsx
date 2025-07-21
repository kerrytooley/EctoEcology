import Link from "next/link";
import { styled } from "styled-components";
import CarouselCard from "./CarouselCard";

// Styled carousel and card components
const Carousel = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding: 0 1rem;
  scroll-snap-type: x mandatory;
  scroll-padding: 0 1rem;
  -webkit-overflow-scrolling: touch; // Smooth scrolling on iOS
  scrollbar-width: none; // Show scrollbar on Firefox
  width: fit-content;
  max-width: 100%;

  @media (max-width: 600px) {
  gap: 0.5rem;
  }
`;

// Carousel component to hold multiple CarouselCard components
const CarouselComponent = () => {
  return (
    <Carousel>
      <CarouselCard
        link="/secondPage"
        image="/EctoE.png"
        title="Example 1"
        description="This is an example description for card 1 with a longer description and also a really long description."
      />
      <CarouselCard
        link="/secondPage"
        image="/EctoE.png"
        title="Example 2"
        description="This is an example description for card 2."
      />
      <CarouselCard
        link="/secondPage"
        image="/EctoE.png"
        title="Example 3"
        description="This is an example description for card 3."
      />
    </Carousel>
  );
};

export default CarouselComponent;
