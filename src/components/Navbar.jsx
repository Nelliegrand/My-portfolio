import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  position: absolute;
  bottom: 20px;
  padding: 1rem;
  color: #ffffff;
  font-family: "Chakra Petch", sans-serif;
  font-size: 15px;

  @media (max-width: 768px) {
    font-size: 10px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    font-size: 8px;
    position: static;
    padding: 1rem;
  }
`;

const NavLink = styled(Link)`
  cursor: pointer;
  color: #ffffff;
  text-transform: uppercase;
  transition: color 0.3s ease;
  &:hover {
    color: #00d9ff;
  }
`;

export default function Navbar() {
  return (
    <NavbarContainer>
      <NavLink to="about" smooth={true} duration={500}>
        About
      </NavLink>
      <NavLink to="skills" smooth={true} duration={500}>
        Skills
      </NavLink>
      <NavLink to="projects" smooth={true} duration={500}>
        Projects
      </NavLink>
      <NavLink to="contact" smooth={true} duration={500}>
        Contact
      </NavLink>
    </NavbarContainer>
  );
}
