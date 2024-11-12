import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import SocialMedia from "./SocialMedia";

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: start;
  color: #ffffff;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
`;

const HeroTitle = styled.h1`
  margin-top: 12rem;
  font-size: 3.2rem;
  font-family: "Chakra Petch", sans-serif;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    text-align: center;
  }
`;

const HeroTagline = styled.p`
  font-family: "Chakra Petch", sans-serif;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 12px;
    text-align: center;
  }
`;

export default function Hero() {
  return (
    <HeroSection>
      <SocialMedia />
      <HeroTitle>
        NELLIE GRÄND,
        <br />
        FRONTEND DEVELOPER
      </HeroTitle>
      <HeroTagline>
        Creating engaging, responsive web experiences that combine creativity
        with functionality.
      </HeroTagline>
      <Navbar />
    </HeroSection>
  );
}
