import Link from "next/link";
import { styled } from "styled-components";
import CarouselCard from "./CarouselCard";

// Styled carousel and card components
const Carousel = styled.div`
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  padding: 0 1rem ;
  scroll-snap-type: x mandatory;
  scroll-padding: 0 1rem;
  -webkit-overflow-scrolling: touch; // Smooth scrolling on iOS
  scrollbar-width: thin; // Show scrollbar on Firefox
  width: 100%;
  max-width: 100%;
`;

// Carousel component to hold multiple CarouselCard components
const CarouselComponent = () => {
  return (
    <Carousel>
      <CarouselCard
        link="/secondPage"
        image="/EctoE.png"
        title="Example 1"
        description="This is an example description for card 1."
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
