import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Navbar from "../components/Navbar"; // Import the Navbar component
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image"; // Import StaticImage
import Gallery from "../components/Gallery"; // Import the Gallery component

// Styled components for the page
const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: #66bdea; /* University Light Blue */
  margin-top: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 2em;
  text-align: center;
  color: #66bdea; /* University Light Blue */
  margin-top: 40px; /* Add extra margin-top for spacing */
`;

const Introduction = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  margin: 20px 0;
  color: #333; /* Dark text for readability */
  text-align: justify; /* Justify text alignment */
`;

const Location = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  margin: 20px 0;
  color: #f8c52b; /* University Yellow */
  text-align: center; /* Center the location text */
`;

const VideoLink = styled.div`
  margin: 20px 0;
  text-align: center;
  a {
    color: #66bdea; /* University Light Blue */
    text-decoration: none;
    font-weight: bold;
  }
  a:hover {
    text-decoration: underline;
  }
`;

const MapContainer = styled.div`
  margin: 20px 0;
  text-align: center;
`;

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

const FormContainer = styled.div`
  margin: 20px 0;
  text-align: center;
`;

const FeedbackText = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  margin: 20px 0;
  color: #333; /* Dark text for readability */
  text-align: justify; /* Justify text alignment */
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navbar />
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
        width={200} // Set the width to 200px
      />
    </SharksLogoContainer>
    <Title>LIU Children's Academy Swim Lessons</Title>
    <Introduction>
      From Saturday, July 4th through August 18, 2024, LIU Children's Academy is excited to offer a comprehensive morning swim program for children aged 8 months and older. Our program is designed to teach essential swimming skills, build confidence, and ensure a fun learning experience for all participants.
    </Introduction>
    <Introduction>
      Classes will be held in one of Brooklyn's premier swimming facilities, providing an optimal environment for swimmers of all levels. To ensure personalized and effective instruction, children will be grouped according to their experience and skill level.
    </Introduction>
    <Introduction>
      Our team of swim instructors comprises Division I athletes who bring a wealth of experience, exceptional patience, and a proven track record of achieving results. For the past 14 years, LIU Children's Academy has been recognized for offering the finest swimming classes in Brooklyn.
    </Introduction>
    <Introduction>
      Join us for a summer of skill-building, confidence-boosting, and enjoyable swimming lessons!
    </Introduction>
    <SectionTitle>Location</SectionTitle>
    <Location>
      STEINBERG WELLNESS CENTER, 161 Ashland Place, Brooklyn, NY 11201
    </Location>
    <VideoLink>
      <p>Watch the video to see how to access the pool through the required entrance:</p>
      <a href="https://youtu.be/46OFEB7zsE0" target="_blank" rel="noopener noreferrer">
        Access Video
      </a>
    </VideoLink>
    <MapContainer>
      <p>Find us on the map:</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9999999999995!2d-73.97899999999999!3d40.690999999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a19b0b0b0b0%3A0x0!2sSteinberg%20Wellness%20Center!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Steinberg Wellness Center"
      ></iframe>
    </MapContainer>
    <SectionTitle>Gallery</SectionTitle>
    <Gallery /> {/* Include the Gallery component */}

    {/* Add two lines of space */}
    <br />
    <br />

    <SectionTitle>Feedback</SectionTitle>
    <FeedbackText>
      We value your input on our Swimming Program at LIU Children's Academy. Please take a few minutes to share your thoughts on the quality of instruction, your child's progress, facility cleanliness, and overall experience. Your feedback will help us improve and provide a better experience for all participants. Thank you for your time and insights!
    </FeedbackText>
    <FormContainer>
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
    </FormContainer>
  </Layout>
);

export default IndexPage;











