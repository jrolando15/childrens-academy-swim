import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/Navbar" // Import the Navbar component
import styled from "styled-components"

// Styled components for the page
const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: #66bdea; /* University Light Blue */
  margin-top: 20px;
`

const ContactContainer = styled.div`
  margin: 20px 0;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
`

const ContactInfo = styled.div`
  margin-bottom: 20px;
`

const ContactLink = styled.a`
  color: #66bdea; /* University Light Blue */
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Navbar /> {/* Include the Navbar component */}
    <Title>Contact Us</Title>
    <ContactContainer>
      <p>Reach out to us through the following ways:</p>
      <ContactInfo>
        <p>Phone: 718.780.6025</p>
        <p>Fax: 718.780.6086</p>
        <p>Email: <ContactLink href="mailto:ChildrensAcademy@liu.edu">ChildrensAcademy@liu.edu</ContactLink></p>
      </ContactInfo>
      <p>To know more about us:</p>
      <p>
        Web: <ContactLink href="https://www.LIU.edu/childrensacademy" target="_blank" rel="noopener noreferrer">www.LIU.edu/childrensacademy</ContactLink>
      </p>
      <p>
        Link regarding registration: <ContactLink href="https://childrensacademy.liu.edu/" target="_blank" rel="noopener noreferrer">Register</ContactLink>
      </p>
    </ContactContainer>
  </Layout>
)

export default ContactPage


