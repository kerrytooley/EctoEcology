import Link from "next/link";
import { styled } from "styled-components";

// Styled carousel card components

const Card = styled(Link)`
margin: 0.5rem;
  flex: 0 0 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255,255,255,0.85);
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  text-decoration: none;
  color: inherit;
  scroll-snap-align: start;
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 16px rgba(0,0,0,0.15);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`;

const CardText = styled.div`
  padding: 1rem;
  text-align: center;
`;

interface CarouselCardProps {
    link: string;
    image: string;
    title: string;
    description: string;
}

const CarouselCard = ({ link, image, title, description }: CarouselCardProps) => {
  return (
    <Card href={link}>
      <CardImage src={image} alt={title} />
      <CardText>
        <h3>{title}</h3>
        <p>{description}</p>
      </CardText>
    </Card>
  );
}

export default CarouselCard;