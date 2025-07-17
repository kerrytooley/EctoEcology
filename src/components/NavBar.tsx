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
  background-image: url("/forest.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
`;

const Logo = styled(Image)`
  height: 40px;
  width: auto;

  @media (min-width: 768px) {
    height: 60px;
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
  z-index: 1000;

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
      font-size: 1.1rem;
    }
  }
`;

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavbarWrapper>
      <Link href="/">
        <Logo
          src="/EctoEcologyLogoWhite.png"
          alt="EctoEcology Logo"
          width={120}
          height={60}
          priority
        />
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
