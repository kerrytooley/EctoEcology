"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { styled } from "styled-components";
import CarouselComponent from "@/components/Carousel";

// Styled component for the full-screen background image
const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -10;
  opacity: 0.5;
`;

const PageWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

export default function Home() {
  return (
    <ParallaxProvider>
      <BackgroundImage src="/forest.jpg" alt="Forest Background" />
      <PageWrapper>
        <Parallax speed={-20}>

          <div className={styles.page}>
            <main className={styles.main}>
              <CarouselComponent/>
              <Image
                className={styles.logo}
                src="/next.svg"
                alt="Next.js logo"
                width={180}
                height={38}
                priority
              />
              <ol>
                <li>
                  Get started by editing <code>src/app/page.tsx</code>.
                </li>
                <li>Save and see your changes instantly.</li>
              </ol>

              <div className={styles.ctas}>
                <a
                  className={styles.primary}
                  href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className={styles.logo}
                    src="/vercel.svg"
                    alt="Vercel logomark"
                    width={20}
                    height={20}
                  />
                  Deploy now
                </a>
                <a
                  href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondary}
                >
                  Read our docs
                </a>
              </div>
            </main>
            <footer className={styles.footer}>
              <a
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  aria-hidden
                  src="/file.svg"
                  alt="File icon"
                  width={16}
                  height={16}
                />
                Learn
              </a>
              <a
                href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  aria-hidden
                  src="/window.svg"
                  alt="Window icon"
                  width={16}
                  height={16}
                />
                Examples
              </a>
              <a
                href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  aria-hidden
                  src="/globe.svg"
                  alt="Globe icon"
                  width={16}
                  height={16}
                />
                Go to nextjs.org →
              </a>
            </footer>
          </div>
        </Parallax>
      </PageWrapper>
    </ParallaxProvider>
  );
}
