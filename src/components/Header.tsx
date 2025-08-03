import NavBar from "@/components/NavBar";
import Banner from "@/components/Banner";
import { styled } from "styled-components";

const StickyHeaderContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  background: rgba(255,255,255,0.95); /* Optional: semi-transparent background */
  box-shadow: 0 2px 8px rgba(0,0,0,0.04); /* Optional: subtle shadow */
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