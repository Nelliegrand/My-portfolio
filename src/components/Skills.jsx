import React from "react";
import styled from "styled-components";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPalette,
  FaNode,
  FaGit,
  FaGithub,
} from "react-icons/fa";
import { SiFigma, SiCypress, SiTailwindcss } from "react-icons/si";

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Chakra Petch", sans-serif;
  font-size: 1.4rem;
  padding: 2rem;
  color: #fff;
  margin-top: 7rem;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 4rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
  color: white;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  & > svg {
    font-size: 3rem;
    margin-bottom: 0.5rem;
    transition: transform 0.3s ease;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  &:hover > svg {
    transform: scale(1.2);
  }
`;

const Skills = () => {
  return (
    <Section id="skills">
      <h2>Skills</h2>
      <SkillsContainer>
        <Row>
          <SkillCard>
            <FaHtml5 />
            <span>HTML</span>
          </SkillCard>
          <SkillCard>
            <FaCss3Alt />
            <span>CSS</span>
          </SkillCard>
          <SkillCard>
            <FaJsSquare />
            <span>JavaScript</span>
          </SkillCard>
          <SkillCard>
            <FaReact />
            <span>React</span>
          </SkillCard>
          <SkillCard>
            <FaPalette />
            <span>UX/UI</span>
          </SkillCard>
          <SkillCard>
            <SiFigma />
            <span>Figma</span>
          </SkillCard>
        </Row>

        <Row>
          <SkillCard>
            <FaGit />
            <span>Git</span>
          </SkillCard>
          <SkillCard>
            <FaNode />
            <span>Node.js</span>
          </SkillCard>
          <SkillCard>
            <SiCypress />
            <span>Cypress</span>
          </SkillCard>
          <SkillCard>
            <FaGithub />
            <span>GitHub</span>
          </SkillCard>
          <SkillCard>
            <SiTailwindcss />
            <span>Tailwind</span>
          </SkillCard>
        </Row>
      </SkillsContainer>
    </Section>
  );
};

export default Skills;
