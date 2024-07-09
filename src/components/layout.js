import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import NavbarComponent from "./Navbar"; // Ensure correct import
import "./layout.css";

// Styled components for logos and other elements
const LogoContainer = styled.div`
  position: fixed;
  top: 80px; // Adjusted to account for navbar height
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
  top: 80px; // Adjusted to account for navbar height
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

const RulesSection = styled.div`
  position: fixed;
  top: 260px; // Adjusted to account for navbar and logo height
  left: 20px;
  z-index: 999;
  width: 15vw;
  max-width: 200px;
  min-width: 100px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 20vw;
    min-width: 80px;
    top: 210px;
  }

  @media (max-width: 480px) {
    width: 25vw;
    min-width: 60px;
    top: 180px;
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
  top: 300px;
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

const MainContent = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding-top: 5px; // Reduced top padding to display content higher
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <NavbarComponent />
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

      <MainContent>
        <main>{children}</main>
      </MainContent>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
