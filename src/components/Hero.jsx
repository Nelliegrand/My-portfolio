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

  margin-bottom: 1rem;
`;

const HeroTagline = styled.p`
  font-family: "Chakra Petch", sans-serif;
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 1.5rem;
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
