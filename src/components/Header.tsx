import NavBar from "@/components/NavBar";
import Banner from "@/components/Banner";
import { styled } from "styled-components";

const StickyHeaderContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
`;

export default function StickyHeader() {
  return (
    <StickyHeaderContainer>
      <NavBar />
      <Banner variant="info" />
      <Banner variant="sales" />
    </StickyHeaderContainer>
  );
}