"use client";

import { colors } from "@/styles/theme";
import { styled } from "styled-components";
import { ArrowRight } from "lucide-react";
import { Text } from "./SectionTitle";

const Button = styled.button`
  background-color: ${colors.light};
  color: ${colors.dark};
  padding: 0.5rem 1rem;
  margin: 1rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  text-decoration: none;
  display: flex;
  text-align: center;
  height: fit-content;
  width: 400px;
  flex-direction: row;

  &:hover {
    background-color: ${colors.dark};
    color: ${colors.light};
  }
`;

const FindOutMoreButton = () => {
  return (
    <Button>
      <Text>Find out more</Text>
      <ArrowRight style={{ alignSelf: "right" }} />
    </Button>
  );
};

export default FindOutMoreButton;
