"use client";

import Banner from "@/components/Banner";
import NavBar from "@/components/NavBar";
import { useMediaQuery } from "react-responsive";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { styled } from "styled-components";

const PageWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  justify-content: center;
`;

const BackgroundImage = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -10;
  opacity: 0.5;
`;


export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  return (
    <div className="page-wrapper">
      <NavBar />
      <Banner variant="info" />
      <Banner variant="sales" />
      <ParallaxProvider>
        <BackgroundImage src="/forest.jpg" alt="Forest Background" />
        <PageWrapper>
          <Parallax speed={-20} translateY={isDesktop ? [-20, 20] : [-10,20]}>
            {children}
          </Parallax>
        </PageWrapper>
      </ParallaxProvider>
    </div>
  );
}
