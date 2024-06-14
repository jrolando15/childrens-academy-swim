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
    <Navbar /> {/* Include the Navbar component */}
    <Title>Class Schedule (Eastern Time)</Title>
    <ScheduleContainer>
      <ScheduleSection>
        <ScheduleTitle>Mondays from 3:00pm to 5:00pm</ScheduleTitle>
        <ScheduleList>
          <ScheduleItem>07-01</ScheduleItem>
          <ScheduleItem>07-08</ScheduleItem>
          <ScheduleItem>07-15</ScheduleItem>
          <ScheduleItem>07-22</ScheduleItem>
          <ScheduleItem>07-29</ScheduleItem>
          <ScheduleItem>08-05</ScheduleItem>
          <ScheduleItem>08-12</ScheduleItem>
        </ScheduleList>
      </ScheduleSection>
      <ScheduleSection>
        <ScheduleTitle>Fridays from 2:00pm to 4:00pm</ScheduleTitle>
        <ScheduleList>
          <ScheduleItem>07-05</ScheduleItem>
          <ScheduleItem>07-12</ScheduleItem>
          <ScheduleItem>07-19</ScheduleItem>
          <ScheduleItem>07-26</ScheduleItem>
          <ScheduleItem>08-02</ScheduleItem>
          <ScheduleItem>08-09</ScheduleItem>
          <ScheduleItem>08-16</ScheduleItem>
        </ScheduleList>
      </ScheduleSection>
      <ScheduleSection>
        <ScheduleTitle>Saturdays from 8:00am to 12:00pm</ScheduleTitle>
        <ScheduleList>
          <ScheduleItem>07-06</ScheduleItem>
          <ScheduleItem>07-13</ScheduleItem>
          <ScheduleItem>07-20</ScheduleItem>
          <ScheduleItem>07-27</ScheduleItem>
          <ScheduleItem>08-03</ScheduleItem>
          <ScheduleItem>08-10</ScheduleItem>
          <ScheduleItem>08-17</ScheduleItem>
        </ScheduleList>
      </ScheduleSection>
      <ScheduleSection>
        <ScheduleTitle>Sundays from 11:00am to 1:00pm</ScheduleTitle>
        <ScheduleList>
          <ScheduleItem>07-07</ScheduleItem>
          <ScheduleItem>07-14</ScheduleItem>
          <ScheduleItem>07-21</ScheduleItem>
          <ScheduleItem>07-28</ScheduleItem>
          <ScheduleItem>08-04</ScheduleItem>
          <ScheduleItem>08-11</ScheduleItem>
          <ScheduleItem>08-18</ScheduleItem>
        </ScheduleList>
      </ScheduleSection>
    </ScheduleContainer>
  </Layout>
)

export default SchedulePage

