import { colors } from "@/styles/theme";
import { styled } from "styled-components";

export const SectionTitle = styled.h1<{$variant?: "light" | "dark"}>`
  display: flex;
  width: 100%;
  max-width: 100vh;
  text-align: left;
  ${({ $variant }) =>
    $variant === "light"
      ? `color: ${colors.light};
`
      : `color: ${colors.dark};
`}
  padding: 1rem;
  font-size: 2rem;
`;

export const SectionSubtitle = styled.h3`
  display: flex;
  width: 100%;
  text-align: left;
  color: #f4f3e8;
  padding: 0.5rem;
`;

export const Text = styled.p<{ $variant?: "light" | "dark" }>`
  ${({ $variant }) =>
    $variant === "light"
      ? `color: ${colors.light};
`
      : `color: ${colors.dark};
`}
`;

export default SectionTitle;
