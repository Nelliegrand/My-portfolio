import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";

const Button = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  display: ${({ $show }) => ($show ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  padding: 10px;
  color: #ffffff;
  border-radius: 50%;
  cursor: pointer;
  font-size: 24px;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const Label = styled.span`
  margin-top: 5px;
  font-size: 12px;
  font-family: "Chakra Petch", sans-serif;
`;

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button $show={showButton} onClick={scrollToTop}>
      <FaArrowUp />
      <Label>TOP</Label>
    </Button>
  );
}
