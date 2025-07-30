"use client";

import Banner from "@/components/Banner";
import NavBar from "@/components/NavBar";
import { useEffect, useState } from "react";
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
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null; // Or render with default/safe values

  return (
    <div className="page-wrapper">
      <ParallaxProvider>
        <NavBar />
        <Banner variant="info" />
        <Banner variant="sales" />
        <BackgroundImage src="/forest.jpg" alt="Forest Background" />
        <PageWrapper>
          <Parallax speed={-20} translateY={isDesktop ? [-10, 20] : [-5, 20]}>
            {children}
          </Parallax>
        </PageWrapper>
      </ParallaxProvider>
    </div>
  );
}
