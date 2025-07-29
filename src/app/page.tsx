"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { styled } from "styled-components";
import CarouselComponent from "@/components/Carousel";
import WhatWeDoInfo from "@/components/WhatWeDoCards";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <WhatWeDoInfo />
        <CarouselComponent />
        <ContactForm />
      </main>

      <footer></footer>
    </div>
  );
}
