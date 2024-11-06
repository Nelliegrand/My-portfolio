import React from "react";
import styled from "styled-components";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import cubeImage from "./assets/cube.jpg";

const AppContainer = styled.div`
  background: url(${cubeImage}) no-repeat center center fixed;
  background-size: cover;
  color: #ffffff;
`;

function App() {
  return (
    <AppContainer>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </AppContainer>
  );
}

export default App;
