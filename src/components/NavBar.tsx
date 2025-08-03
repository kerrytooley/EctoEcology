"use client";

import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: relative;
  overflow: hidden;
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  pointer-events: none;
`;

const Logo = styled.img`
  height: 80px;
  width: auto;

  @media (max-width: 768px) {
    height: 50px;
  }
`;

const Hamburger = styled.button`
  display: block;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const NavLinks = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: 100%;
  right: 2rem;
  background: #111;
  padding: 1rem;
  gap: 1rem;

  a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    position: static;
    flex-direction: row;
    display: flex;
    background: none;
    padding: 0;

    a {
      font-size: 2rem;
    }
  }
`;

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavbarWrapper>
      <BackgroundVideo autoPlay loop muted playsInline>
        <source src="/forestVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </BackgroundVideo>
      <Link href="/">
        <Logo src="/EctoEcologyLogoWhite.png" alt="EctoEcology Logo" />
      </Link>

      <Hamburger onClick={() => setMenuOpen((prev) => !prev)}>☰</Hamburger>

      <NavLinks open={menuOpen}>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </NavLinks>
    </NavbarWrapper>
  );
};

export default Navbar;
