import React, { useState } from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import emailjs from "emailjs-com";

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  font-family: "Chakra Petch", sans-serif;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  max-width: 900px;
  gap: 12rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

const FormContainer = styled.div`
  flex: 1;
  text-align: center;
  margin-left: 80px;

  h2 {
    font-size: 2rem;
  }
  form {
    display: flex;
    flex-direction: column;

    input,
    textarea {
      font-family: "Chakra Petch", sans-serif;
      margin-bottom: 1rem;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 1rem;
      width: 350px;
    }

    button {
      font-family: "Chakra Petch", sans-serif;
      padding: 0.5rem;
      background-color: #00d9ff;
      color: #fff;
      border: none;
      border-radius: 6px;
      width: 200px;
      cursor: pointer;
      font-size: 1rem;
      align-self: center;
      transition: background-color 0.3s;
      &:hover {
        background-color: #0099cc;
      }
    }
  }
`;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;

  h2 {
    font-size: 2rem;
  }
`;

const SocialLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 1rem;
`;

const IconLink = styled.a`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.3rem;
  gap: 0.5rem;

  &:hover {
    color: #00d9ff;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_pava9kc",
        "template_1hey98m",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "QwtSb1oAZhL_b-JN0"
      )
      .then(
        (response) => {
          setStatus("Message was sent!");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          console.log("Success:", response);
        },
        (error) => {
          setStatus("Failed to send message, please try again.");
          console.error("Error:", error.text);
        }
      );
  };

  return (
    <Section id="contact">
      <ContentWrapper>
        <FormContainer>
          <h2>Let's talk!</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows="5"
            ></textarea>
            <button type="submit">Send</button>
          </form>
          {status && <p>{status}</p>}
        </FormContainer>

        <SocialContainer>
          <h2>Social</h2>
          <SocialLinksContainer>
            <IconLink
              href="https://github.com/Nelliegrand"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={25} /> GitHub
            </IconLink>
            <IconLink
              href="https://www.linkedin.com/in/nellie-gränd-a6112729b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={25} /> LinkedIn
            </IconLink>
            <IconLink
              href="https://discord.com/users/nelliegrand"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord size={25} /> Discord
            </IconLink>
          </SocialLinksContainer>
        </SocialContainer>
      </ContentWrapper>
    </Section>
  );
};

export default Contact;
