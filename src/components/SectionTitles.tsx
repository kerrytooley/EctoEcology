"use client";

import { colors } from "@/styles/theme";
import { styled } from "styled-components";

const commonStyles = `
  max-width: 1000px;
  text-align: left;
  padding: 0.5rem;
  color: ${colors.dark};

  a {
    color: inherit;
    text-decoration: underline;
    cursor: pointer;
  }

  &.light {
    color: ${colors.light};
  }
  &.dark {
    color: ${colors.dark};
  }
`;

export const SectionTitle = styled.h1`
  ${commonStyles}
  margin-top: 3rem;
  font-size: 2rem;
  width: 80%;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }

  @media (prefers-color-scheme: dark) {
    color: ${colors.light};
  }
`;

export const Title = styled.h1`
  ${commonStyles}
  margin-top: 3rem;
  font-size: 2rem;
  width: 80%;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

export const SectionSubtitle = styled.h3`
  ${commonStyles}

  @media (prefers-color-scheme: dark) {
    color: ${colors.light};
  }
`;

export const Subtitle = styled.h3`
  ${commonStyles}
`;


export const SectionHeader = styled.h1`
  ${commonStyles}
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media (prefers-color-scheme: dark) {
    color: ${colors.light};
  }
`;

export const Header = styled.h1`
  ${commonStyles}
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Text = styled.p`
  ${commonStyles}
`;

export default SectionTitle;
