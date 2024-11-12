import React from "react";
import styled from "styled-components";
import projectImage from "../assets/chatify.jpg";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  font-family: "Chakra Petch", sans-serif;
  color: white;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: white;
  margin-bottom: 4rem;
  text-align: center;
`;

const ProjectContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 1000px;
  gap: 2rem;
  flex-direction: row;
  padding: 2rem;
  border-radius: 8px;
  justify-content: center; /* Centrerar innehållet horisontellt */

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem; // säkerställer mellanrum mellan bild och innehåll
    padding: 1rem; // Minskar padding på mindre skärmar
    text-align: center; // Centrerar texten i mobilvy
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 400px; /* Begränsar bildens bredd på mindre skärmar */

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1.5rem;
    color: white;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }

  a {
    align-self: center; /* Centrerar knappen i mobilvy */
    padding: 0.5rem 1rem;
    background-color: #00d9ff;
    color: #fff;
    text-decoration: none;
    border-radius: 4px;
    font-weight: bold;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0099cc;
    }
  }

  @media (max-width: 768px) {
    align-items: center; /* Centrerar innehållet på mobilskärm */
    padding: 0 1rem; /* Lägger till lite padding för bättre läsbarhet */
  }
`;

const Projects = () => {
  return (
    <Section id="projects">
      <Title>Projects</Title>
      <ProjectContainer>
        <ContentContainer>
          <h2>Chatifyer</h2>
          <p>
            Chatifyer is a fictional chat application created as a school
            project, designed with secure user authentication via JWT. It lets
            you create an account, log in and out securely, choose an avatar,
            send messages, and delete them as needed.
          </p>
          <a
            href="https://chatifyer.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit project
          </a>
        </ContentContainer>
        <ImageContainer>
          <img src={projectImage} alt="Chatifyer Project Screenshot" />
        </ImageContainer>
      </ProjectContainer>
    </Section>
  );
};

export default Projects;
