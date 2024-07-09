import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from "../components/Gallery"
import styled from "styled-components"

// Custom styled component for justified text with larger font size
const JustifiedText = styled.p`
  text-align: justify;
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="text-center text-primary mt-5">LIU Children's Academy Swim Lessons</h1>
    
    <JustifiedText>
      From Saturday, July 1th through August 18, 2024, LIU Children's Academy is excited to offer a comprehensive morning swim program for children aged 8 months and older. Our program is designed to teach essential swimming skills, build confidence, and ensure a fun learning experience for all participants.
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
    <JustifiedText className="text-center font-weight-bold " style={{textAlign: 'center'}}>
        STEINBERG WELLNESS CENTER, 161 Ashland Place, Brooklyn, NY 11201
    </JustifiedText>
    <div className="text-center mt-4">
      <JustifiedText style={{textAlign: 'center'}}>
         Watch the video to see how to access the pool through the required entrance:
      </JustifiedText>
      <a href="https://youtu.be/46OFEB7zsE0" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Access Video
      </a>
      <JustifiedText className="mt-3 text-danger" style={{textAlign: 'center'}}>
         <strong>Important Safety Notice:</strong> When leaving the LIU campus, please exit through the side gates or the main entrance. Do not use the Ashland exit.
      </JustifiedText>
    </div>

    <div className="text-center mt-5">
      <JustifiedText style={{textAlign: 'center'}}>Find us on the map:</JustifiedText>
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
    
        <JustifiedText>
          We value your input on our Swimming Program at LIU Children's Academy. Please take a few minutes to share your thoughts on the quality of instruction, your child's progress, facility cleanliness, and overall experience. Your feedback will help us improve and provide a better experience for all participants. Thank you for your time and insights!
        </JustifiedText>
      
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
  </Layout>
)

export default IndexPage









