"use client";

import styled from "styled-components";
import SectionTitle, { SectionSubtitle, Text } from "./SectionTitle";
import { colors } from "@/styles/theme";
import { useState } from "react";

const ReviewSlideshow = styled.div`
  display: flex;
  background-color: ${colors.light};
  width: 100%;
  max-width: 782px;
  padding: 1rem;
  margin: 1rem;
  overflow-x: hidden;
`;

const SlideTrack = styled.div<{ $slideCount: number }>`
  transition: transform 0.5s ease-in-out;
  display: flex;
  transform: translateX(${(props) => -props.$slideCount * 100}%);
`;

const Slide = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-width: 100%;
  flex-shrink: 0;
  flex: 1;
`;

const SlideTitle = styled.div`
  flex: 1;
  text-align: left;
  align-items: center;
`;

const SlideDescription = styled.div`
  flex: 2;
  align-self: center;
`;

const NavButton = styled.button`
  border: none;
  background: none;
  font-size: 2rem;
  font-weight: bold;
`;

const Review = [
  {
    reviewerName: "John Doe",
    reviewerDescription: "Project Manager at EcoBuild",
    review:
      "EctoEcology provided an exceptional service for our bat survey needs. Their team was professional, knowledgeable, and delivered results quickly. Highly recommend!",
  },
  {
    reviewerName: "John Doe",
    reviewerDescription: "Project Manager at EcoBuild",
    review:
      "EctoEcology provided an exceptional service for our bat survey needs. Their team was professional, knowledgeable, and delivered results quickly. Highly recommend!",
  },
];

interface ReviewProps {
  reviewerName: string;
  reviewerDescription: string;
  review: string;
}

const ReviewSlide = ({
  reviewerName,
  reviewerDescription,
  review,
}: ReviewProps) => {
  return (
    <Slide>
      <SlideTitle>
        <SectionTitle style={{ padding: "0.5rem" }}>
          {reviewerName}
        </SectionTitle>
        <SectionSubtitle>{reviewerDescription}</SectionSubtitle>
      </SlideTitle>
      <SlideDescription>
        <Text>{review}</Text>
      </SlideDescription>
    </Slide>
  );
};

const RecentReviewsSection = () => {
  const [current, setCurrent] = useState(0);
  const totalSlides = Review.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % totalSlides);
  };
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1) % totalSlides);
  };

  return (
    <>
      <SectionTitle>Recent Reviews</SectionTitle>
      <NavButton onClick={prevSlide}>Prev</NavButton>
      <ReviewSlideshow>
        <SlideTrack $slideCount={current}>
          {Review.map((review) => (
            <ReviewSlide
              key={review.reviewerName}
              reviewerName={review.reviewerName}
              reviewerDescription={review.reviewerDescription}
              review={review.review}
            />
          ))}
        </SlideTrack>
      </ReviewSlideshow>
      <NavButton onClick={nextSlide}>Next</NavButton>
    </>
  );
};

export default RecentReviewsSection;
