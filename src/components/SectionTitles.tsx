import { colors } from "@/styles/theme";
import { css, styled } from "styled-components";

const commonStyles = css<{ $variant?: "light" | "dark" }>`
  max-width: 1000px;
  text-align: left;
  padding: 0.5rem;
  color: ${({ $variant }) =>
    $variant === "light" ? colors.light : colors.dark};

  a {
    color: inherit;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const SectionTitle = styled.h1<{ $variant?: "light" | "dark" }>`
  ${commonStyles}
  margin-top: 3rem;
  font-size: 2rem;
  width: 80%;
`;

export const SectionSubtitle = styled.h3<{ $variant?: "light" | "dark" }>`
  ${commonStyles}
`;

export const Title = styled.h1<{ $variant?: "light" | "dark" }>`
  ${commonStyles}
  font-size: 2rem;
`;

export const Header = styled.h1<{ $variant?: "light" | "dark" }>`
  ${commonStyles}
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Text = styled.p<{ $variant?: "light" | "dark" }>`
  ${commonStyles}
`;

export default SectionTitle;
