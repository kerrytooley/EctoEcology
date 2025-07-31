"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { styled } from "styled-components";
import CarouselComponent from "@/components/Carousel";
import ContactForm from "@/components/ContactForm";
import HowItWorksCards from "@/components/HowItWorksCards";
import WhatWeDoSection from "@/components/WhatWeDo";
import RecentReviewsSection from "@/components/RecentReviews";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HowItWorksCards />
        <CarouselComponent />
        <WhatWeDoSection />
        <RecentReviewsSection />
        <ContactForm />
      </main>

      <footer></footer>
    </div>
  );
}
