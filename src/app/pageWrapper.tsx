"use client";

import StickyHeader from "@/components/Header";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { styled } from "styled-components";

const PageWrapper = styled.div`
  position: relative;
  padding-top: 700px;
  min-height: 100vh;
  width: 100%;
  max-width: 100vw;
  justify-content: center;
  display: grid;

  @media (max-width: 782px) {
    padding-top: 1150px;
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
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <div className="page-wrapper">
      <StickyHeader />
      <ParallaxProvider>
        <BackgroundImage src="/forest.jpg" alt="Forest Background" />
        <PageWrapper>
          <Parallax speed={-20} translateY={isDesktop ? [-20, 20] : [-20, 20]}>
            {children}
          </Parallax>
        </PageWrapper>
      </ParallaxProvider>
    </div>
  );
}
