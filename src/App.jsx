import React from "react";
import styled from "styled-components";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import LottieBackground from "./components/LottieAnimation";
import ScrollToTopButton from "./components/ToTopButton";

const AppContainer = styled.div`
  position: relative;
  color: #ffffff;
`;

function App() {
  return (
    <AppContainer>
      <LottieBackground />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <ScrollToTopButton />
    </AppContainer>
  );
}

export default App;
