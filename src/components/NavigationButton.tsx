const Button = styled.button`
  background-color: #ff5100ff;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  z-index: 1000;
  &:hover {
    background-color: #ff3603ff;
  }
`;
import Link from "next/link";
import styled from "styled-components";

interface NavigationButtonProps {
  link?: string;
  title?: string;
}

const NavigationButton = ({ link, title }: NavigationButtonProps) => {
  return (
    <Button>
      <Link href={link || "/secondScreen"}>{title || "Sales"}</Link>
    </Button>
  );
};

export default NavigationButton;
