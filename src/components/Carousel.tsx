import Link from "next/link";
import { styled } from "styled-components";
import CarouselCard from "./CarouselCard";

// Styled carousel and card components
const Carousel = styled.div`
    display: flex;
  gap: 2rem;
  overflow-x: auto;
  padding: 2rem 0;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch; // Smooth scrolling on iOS
  scrollbar-width: thin; // Show scrollbar on Firefox
  &::-webkit-scrollbar {
    height: 8px;
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
}

export default CarouselComponent;