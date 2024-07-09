import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

// Styled components for the page
const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: #0d6efd; /* Bootstrap primary color (mt-5) */
  margin-top: 3rem; /* Equivalent to mt-5 */
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
  color: #0d6efd; /* Bootstrap primary color */
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`

const JustifiedText = styled.p`
  text-align: center; /* Center the text */
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: black;
`

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Title>Contact Us</Title>
    <ContactContainer>
      <JustifiedText>Reach out to us through the following ways:</JustifiedText>
      <ContactInfo>
        <JustifiedText>Phone: 718.780.6025</JustifiedText>
        <JustifiedText>Fax: 718.780.6086</JustifiedText>
        <JustifiedText>Email: <ContactLink href="mailto:ChildrensAcademy@liu.edu">ChildrensAcademy@liu.edu</ContactLink></JustifiedText>
      </ContactInfo>
      <JustifiedText>To know more about us:</JustifiedText>
      <JustifiedText>
        Web: <ContactLink href="https://www.LIU.edu/childrensacademy" target="_blank" rel="noopener noreferrer">www.LIU.edu/childrensacademy</ContactLink>
      </JustifiedText>
      <JustifiedText>
        Link regarding registration: <ContactLink href="https://childrensacademy.liu.edu/" target="_blank" rel="noopener noreferrer">Register</ContactLink>
      </JustifiedText>
    </ContactContainer>
  </Layout>
)

export default ContactPage


