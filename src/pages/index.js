import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Navbar from "../components/Navbar";
import { StaticImage } from "gatsby-plugin-image";
import Gallery from "../components/Gallery";
import styled from "styled-components";

// Styled components for the logos (keep these as they were)
const LogoContainer = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1000;
  width: 15vw;
  max-width: 200px;
  min-width: 100px;

  @media (max-width: 768px) {
    width: 20vw;
    min-width: 80px;
  }

  @media (max-width: 480px) {
    width: 25vw;
    min-width: 60px;
  }
`;

const SharksLogoContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 35px;
  z-index: 1000;
  width: 15vw;
  max-width: 200px;
  min-width: 100px;

  @media (max-width: 768px) {
    width: 20vw;
    min-width: 80px;
  }

  @media (max-width: 480px) {
    width: 25vw;
    min-width: 60px;
  }
`;

// Custom styled component for justified text with larger font size
const JustifiedText = styled.p`
  text-align: justify;
  font-size: 1.2rem; // Increased font size
  line-height: 1.6;
  margin-bottom: 1rem;
`;

// New styled component for the Rules section
const RulesSection = styled.div`
  position: fixed;
  top: 200px; // Increase this value to move it further down from the logo
  left: 20px;
  z-index: 999;
  width: 15vw;
  max-width: 200px;
  min-width: 100px;
  margin-top: 30px; // Add margin-top to create space
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 20vw;
    min-width: 80px;
    top: 150px; // Adjust for smaller screens
  }

  @media (max-width: 480px) {
    width: 25vw;
    min-width: 60px;
    top: 120px; // Further adjust for very small screens
  }
`;

const RulesTitle = styled.h3`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const RulesLink = styled.a`
  display: inline-block;
  margin-top: 10px;
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 0.9rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
    color: white;
    text-decoration: none;
  }
`;

const FlyerSection = styled.div`
  position: fixed;
  top: 250px; // Increased from 200px to add more margin
  right: 35px;
  z-index: 999;
  width: 15vw;
  max-width: 200px;
  min-width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    width: 20vw;
    min-width: 80px;
    top: 200px;
  }

  @media (max-width: 480px) {
    width: 25vw;
    min-width: 60px;
    top: 170px;
  }
`;

const FlyerTitle = styled.h4`
  font-size: 0.9rem;
  margin-bottom: 10px;
  color: #007bff;
`;

const FlyerLink = styled.a`
  display: inline-block;
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 0.8rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
    color: white;
    text-decoration: none;
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navbar />
    <div className="container">
      <LogoContainer>
        <StaticImage 
          src="../images/CA_DAY_logo_no_triangle.png" 
          alt="Company Logo" 
          layout="fullWidth"
          placeholder="blurred"
        />
      </LogoContainer>
      <SharksLogoContainer>
        <StaticImage 
          src="../images/4510_liu_sharks-primary-2019.png" 
          alt="Sharks Logo" 
          width={200}
        />
      </SharksLogoContainer>
      
      {/* Updated Rules of the Pool section */}
      <RulesSection>
        <RulesTitle className="text-primary">Rules of the Pool</RulesTitle>
        <RulesLink 
          href="https://drive.google.com/file/d/1PAasED2Y6Epses02YF8HM5ofXNrpAEH2/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          View Rules
        </RulesLink>
      </RulesSection>

      {/* Updated Flyer section */}
      <FlyerSection>
        <FlyerTitle>Share our flyer with your friends!</FlyerTitle>
        <FlyerLink 
          href="https://drive.google.com/file/d/1IE9LMwPMeijUZy8OQyZYZKrZ2m921t3F/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Download Flyer
        </FlyerLink>
      </FlyerSection>
      
      <h1 className="text-center text-primary mt-5">LIU Children's Academy Swim Lessons</h1>
      
      <JustifiedText>
        From Saturday, July 4th through August 18, 2024, LIU Children's Academy is excited to offer a comprehensive morning swim program for children aged 8 months and older. Our program is designed to teach essential swimming skills, build confidence, and ensure a fun learning experience for all participants.
      </JustifiedText>
      <JustifiedText>
        Classes will be held in one of Brooklyn's premier swimming facilities, providing an optimal environment for swimmers of all levels. To ensure personalized and effective instruction, children will be grouped according to their experience and skill level.
      </JustifiedText>
      <JustifiedText>
        Our team of swim instructors comprises Division I athletes who bring a wealth of experience, exceptional patience, and a proven track record of achieving results. For the past 14 years, LIU Children's Academy has been recognized for offering the finest swimming classes in Brooklyn.
      </JustifiedText>
      <JustifiedText>
        Join us for a summer of skill-building, confidence-boosting, and enjoyable swimming lessons!
      </JustifiedText>

      <h2 className="text-center text-primary mt-5">Location</h2>
      <p className="text-center font-weight-bold text-warning">
        STEINBERG WELLNESS CENTER, 161 Ashland Place, Brooklyn, NY 11201
      </p>
      <div className="text-center mt-4">
        <p>Watch the video to see how to access the pool through the required entrance:</p>
        <a href="https://youtu.be/46OFEB7zsE0" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Access Video
        </a>
      </div>

      <div className="text-center mt-5">
        <p>Find us on the map:</p>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9999999999995!2d-73.97899999999999!3d40.690999999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a19b0b0b0b0%3A0x0!2sSteinberg%20Wellness%20Center!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            title="Steinberg Wellness Center"
          ></iframe>
        </div>
      </div>

      <h2 className="text-center text-primary mt-5">Gallery</h2>
      <Gallery />

      <h2 className="text-center text-primary mt-5">Feedback</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <JustifiedText>
            We value your input on our Swimming Program at LIU Children's Academy. Please take a few minutes to share your thoughts on the quality of instruction, your child's progress, facility cleanliness, and overall experience. Your feedback will help us improve and provide a better experience for all participants. Thank you for your time and insights!
          </JustifiedText>
        </div>
      </div>
      <div className="text-center mt-4">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScv8RCeLPSR2eFIhRjReJ-Drnmlz1fw4Zqn1YgF2k78hCS_6A/viewform?embedded=true"
          width="640"
          height="800"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Google Form"
        >
          Loading…
        </iframe>
      </div>
    </div>
  </Layout>
);

export default IndexPage;










