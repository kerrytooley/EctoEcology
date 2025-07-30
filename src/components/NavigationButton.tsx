const Button = styled.button`
  background-color: ${colors.sales};
  color: white;
  padding: 0.5rem 1rem;
  margin: 1rem;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  font-size: 2rem;
  transition: background-color 0.3s ease;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  &:hover {
    background-color: ${colors.salesDark};
  }
`;
import { colors } from "@/styles/theme";
import Link from "next/link";
import styled from "styled-components";

interface NavigationButtonProps {
  link?: string;
  title?: string;
}

const NavigationButton = ({ link, title }: NavigationButtonProps) => {
  return (
    <Button>
      <Link href={link || "/secondScreen"}>{title || "Get a FREE quote now"}</Link>
    </Button>
  );
};

export default NavigationButton;
