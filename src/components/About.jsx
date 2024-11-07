import React from "react";
import styled from "styled-components";
import aboutMe from "../assets/aboutme.jpg";

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 100px;
  font-size: 18px;
  font-family: "Chakra Petch", sans-serif;
  color: white;
  padding: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const Content = styled.div`
  flex: 1;
  max-width: 500px;
  padding-right: 1.5rem;

  h2 {
    font-size: 2.2rem;
  }

  @media (max-width: 768px) {
    padding-right: 0;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
    margin-top: 1rem;
  }
`;

const About = () => {
  return (
    <Section id="about">
      <Content>
        <h2>Hi,</h2>
        <p>
          I'm Nellie. A curious and driven web developer who thrives on solving
          creative challenges and building meaningful, user-centered digital
          experiences. Frontend development is where I get to combine my
          technical skills with my passion for design, crafting projects that
          don’t just look great but also feel intuitive to use. I’m constantly
          exploring new tools and techniques to keep my work fresh and
          innovative. Whether it's coding, collaborating, or brainstorming the
          next big idea, I’m excited by the opportunities that lie ahead. Let’s
          connect and create something impactful together!
        </p>
      </Content>
      <ImageContainer>
        <ProfileImage src={aboutMe} alt="Bild på mig" />
      </ImageContainer>
    </Section>
  );
};

export default About;
