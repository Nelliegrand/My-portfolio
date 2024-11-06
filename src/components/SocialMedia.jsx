import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const SocialLinksContainer = styled.div`
  position: absolute;
  top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  font-family: "Chakra Petch", sans-serif;
`;

const IconLink = styled.a`
  color: #ffffff;
  display: flex;
  align-items: center;
  transition: color 0.3s ease;
  text-decoration: none;

  &:hover {
    color: #00d9ff;
  }

  &.first,
  &.last {
    margin: 0 40px;
  }

  span {
    margin-left: 8px;
    font-size: 0.9rem;
  }

  svg {
    font-size: 1.2rem;
  }
`;

const SocialMedia = () => {
  return (
    <SocialLinksContainer>
      <IconLink
        href="https://github.com/Nelliegrand"
        target="_blank"
        rel="noopener noreferrer"
        className="first"
      >
        <FaGithub />
        <span>GitHub</span>
      </IconLink>
      <IconLink
        href="https://www.linkedin.com/in/nellie-gränd-a6112729b"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
        <span>LinkedIn</span>
      </IconLink>
      <IconLink href="mailto:nellie.grand@hotmail.com" className="last">
        <FaEnvelope />
        <span>Email</span>
      </IconLink>
    </SocialLinksContainer>
  );
};

export default SocialMedia;
