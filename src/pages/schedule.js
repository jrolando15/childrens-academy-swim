import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

// Styled components for the page
const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: #0d6efd; /* University Light Blue */
  margin-top: 20px;
`

const ScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
`

const ScheduleSection = styled.div`
  margin-bottom: 20px;
  text-align: center; /* Center text within each section */
`

const ScheduleTitle = styled.h2`
  font-size: 1.8em;
  color: #f8c52b; /* University Yellow */
`

const ScheduleList = styled.ul`
  list-style: none;
  padding: 0;
`

const ScheduleItem = styled.li`
  font-size: 1.2em;
  line-height: 1.6;
  color: #333; /* Dark text for readability */
`

const SchedulePage = () => (
  <Layout>
    <SEO title="Schedule" />
    <Title>Class Schedule (Eastern Time)</Title>
    <ScheduleContainer>
      <ScheduleSection>
        <ScheduleTitle>Monday</ScheduleTitle>
        <ScheduleList>
          <ScheduleItem>3:00PM - 4:00PM: Advanced Swim , Sharks , Guppy 1 , Free Swim , Private Lesson </ScheduleItem>
          <ScheduleItem>4:00PM - 5:00PM: Adult (beginner) , Adult (intermediate) </ScheduleItem>
        </ScheduleList>
      </ScheduleSection>
      <ScheduleSection>
        <ScheduleTitle>Friday</ScheduleTitle>
        <ScheduleList>
          <ScheduleItem>2:00PM - 3:00PM: Advanced Swim , Sharks , Guppy 2 , Free Swim , Private Lesson </ScheduleItem>
          <ScheduleItem>3:00PM - 4:00PM: Minnow , Adult (beginner) , Adult (intermediate) , Private Lesson </ScheduleItem>
        </ScheduleList>
      </ScheduleSection>
      <ScheduleSection>
        <ScheduleTitle>Saturday</ScheduleTitle>
        <ScheduleList>
          <ScheduleItem>8:00AM - 9:00AM: Advanced Swim , Adult (beginner) , Adult (intermediate) , Private Lesson </ScheduleItem>
          <ScheduleItem>9:00AM - 10:00AM: Shark , Minnow , Free Swim , Guppy 2 , Private Lesson </ScheduleItem>
          <ScheduleItem>10:00AM - 11:00AM: Baby+Me , Guppy 1 , Minnow </ScheduleItem>
          <ScheduleItem>11:00AM - 12:00PM: Baby+Me , Guppy 1 , Guppy 2 </ScheduleItem>
        </ScheduleList>
      </ScheduleSection>
      <ScheduleSection>
        <ScheduleTitle>Sunday</ScheduleTitle>
        <ScheduleList>
          <ScheduleItem>11:00AM - 12:00PM: Guppy 1 , Minnow , Free Swim , Private Lesson </ScheduleItem>
          <ScheduleItem>12:00PM - 1:00PM: Guppy 1 , Minnow , Free Swim , Private Lesson </ScheduleItem>
        </ScheduleList>
      </ScheduleSection>
    </ScheduleContainer>
  </Layout>
)

export default SchedulePage
