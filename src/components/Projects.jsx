import React from "react";
import styled from "styled-components";
import projectImage from "../assets/chatify.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import companyinfo from "../assets/companyinfo.png";
import contact from "../assets/contact.png";
import dark from "../assets/dark.png";
import history from "../assets/history.png";
import login from "../assets/login.png";
import numbers from "../assets/numbers.png";
import users from "../assets/users.png";
import registration from "../assets/registration.png";
import onboarding from "../assets/onboarding.png";
import userdetails from "../assets/userdetails.png";
import swedish from "../assets/swedish.png";
import success from "../assets/success.png";
import support from "../assets/support.png";
import qrcode from "../assets/qrcode.png";
import step3 from "../assets/step3.png";
import modal from "../assets/modal.png";

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
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 400px;
  max-height: 90vh;
  img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
    height: 270px;
    object-fit: cover;
    object-position: top;
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

  button {
    align-self: center;
    padding: 0.5rem 1rem;
    background-color: #00d9ff;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0099cc;
    }
  }

  @media (max-width: 768px) {
    align-items: center;
    padding: 0 1rem;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const CarouselContainer = styled.div`
  max-width: 1000px;
  max-height: 90vh;

  .carousel .control-arrow {
    background: none !important;
    background-color: transparent !important;
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 1;
  }

  .carousel .control-arrow svg {
    width: 100%;
    height: 100%;
    fill: white;
    filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.8))
      drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.9))
      drop-shadow(0px 0px 12px rgba(0, 0, 0, 1));
  }

  .carousel .control-arrow:hover svg {
    filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.9))
      drop-shadow(0px 0px 10px rgba(0, 0, 0, 1))
      drop-shadow(0px 0px 14px rgba(0, 0, 0, 1));
  }

  .carousel .control-prev.control-arrow {
    left: 20px;
    color: white;
    filter: drop-shadow(2px 2px 8px rgba(0, 0, 0, 0.7))
      drop-shadow(2px 2px 12px rgba(0, 0, 0, 0.9))
      drop-shadow(2px 2px 15px rgba(0, 0, 0, 1));
  }

  .carousel .control-next.control-arrow {
    right: 20px;
    color: white;
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.7))
      drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.9))
      drop-shadow(0px 0px 10px rgba(0, 0, 0, 1));
  }

  .carousel .control-dots {
    display: none;
  }

  .carousel .carousel-status {
    font-size: 16px;
    right: 20px;
    position: absolute;
    top: 400px;
    color: white;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.9), 0px 0px 15px rgba(0, 0, 0, 1);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-weight: bold;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  background-color: #ff5555;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  font-family: "Chakra Petch", sans-serif;
`;

const Projects = () => {
  const [showCarousel, setShowCarousel] = useState(false);
  return (
    <Section id="projects">
      <Title>Projects</Title>
      <ProjectContainer>
        <ContentContainer>
          <h2>Chatifyer</h2>
          <p>
            Chatifyer is a fictional chat application created as an early school
            project, designed with secure user authentication via JWT. It lets
            you create an account, log in and out securely, choose an avatar,
            send messages, and delete them as needed.
          </p>
          <button
            onClick={() =>
              window.open("https://chatifyer.netlify.app", "_blank")
            }
          >
            Visit project
          </button>
        </ContentContainer>
        <ImageContainer>
          <img src={projectImage} alt="Chatifyer Project Screenshot" />
        </ImageContainer>
      </ProjectContainer>

      <ProjectContainer>
        <ContentContainer>
          <h2>TrustCall</h2>
          <p>
          I played a key role in building TrustCall’s new "My Pages" service from the ground up, working closely with a fellow intern and our supervisor. Together, we designed and developed a brand new user experience that allows businesses to manage phone numbers, view call statistics, and administer user accounts. The result is a modern, secure, and mobile-friendly web application - currently in pre-release - that gives companies full control over their communications.
          </p>
          <button onClick={() => setShowCarousel(!showCarousel)}>
            {showCarousel ? "Hide screenshots" : "View screenshots"}
          </button>

          {showCarousel && (
            <Overlay
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setShowCarousel(false);
                }
              }}
            >
              <CloseButton onClick={() => setShowCarousel(false)}>
                Close
              </CloseButton>
              <CarouselContainer>
                <Carousel showThumbs={false} infiniteLoop useKeyboardArrows>
                  <div>
                    <img src={registration} alt="Register page for new account" />
                  </div>
                  <div>
                    <img src={qrcode} alt="QR code to verify with BankID" />
                  </div>
                  <div>
                    <img src={success} alt="Landing page for successful registration" />
                  </div>
                  <div>
                    <img src={login} alt="Login page" />
                  </div>
                  <div>
                    <img src={onboarding} alt="Onboarding" />
                  </div>
                  <div>
                    <img src={step3} alt="Step 3 of onboarding tour" />
                  </div>
                  <div>
                    <img
                      src={companyinfo}
                      alt="Page to view and edit company information"
                    />
                  </div>
                  <div>
                    <img src={dark} alt="App set in dark mode" />
                  </div>
                  <div>
                    <img src={swedish} alt="App translated to swedish" />
                  </div>
                  <div>
                    <img src={numbers} alt="List view of numbers" />
                  </div>
                  <div>
                    <img src={users} alt="List view of users" />
                  </div>
                  <div>
                    <img src={userdetails} alt="Edit user information" />
                  </div>
                  <div>
                    <img src={modal} alt="Modal" />
                  </div>
                  <div>
                    <img src={history} alt="List of call history" />
                  </div>
                  <div>
                    <img src={support} alt="Support page" />
                  </div>
                  <div>
                    <img src={contact} alt="Contact page" />
                  </div>
                </Carousel>
              </CarouselContainer>
            </Overlay>
          )}
        </ContentContainer>
        <ImageContainer>
          <img src={qrcode} alt="TrustCall Project Screenshot" />
        </ImageContainer>
      </ProjectContainer>
    </Section>
  );
};

export default Projects;
