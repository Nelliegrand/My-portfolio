import React from "react";
import styled from "styled-components";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import LottieBackground from "./components/LottieAnimation";
import ScrollToTopButton from "./components/ToTopButton";

function App() {
  return (
    <div>
      <LottieBackground />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
