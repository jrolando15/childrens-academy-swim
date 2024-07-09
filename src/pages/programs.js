import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/Navbar" // Import the Navbar component
import styled from "styled-components"

// Styled components for the page
const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: #0d6efd; /* University Light Blue */
  margin-top: 20px;
`

const Section = styled.div`
  margin: 20px 0;
`

const ProgramTitle = styled.h2`
  font-size: 1.8em;
  color: #f8c52b; /* University Yellow */
`

const ProgramDescription = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  color: #333; /* Dark text for readability */
  text-align: justify; /* Justify text alignment */
`

const ProgramsPage = () => (
  <Layout>
    <SEO title="Programs" />
    <Title>Swim Programs</Title>
    <Section>
      <ProgramTitle>Baby and Me Classes</ProgramTitle>
      <ProgramDescription>
        <strong>Baby and Me:</strong> Designed for infants and toddlers (6 months to 3 years) to get comfortable in the water alongside their parents. Focuses on water acclimation, safety skills, and basic movements like kicking, floating, and submersion. Parents are in the water to provide comfort, support, and ensure a positive, safe experience. <strong>Price: $35 for 30 minutes.</strong>
      </ProgramDescription>
    </Section>
    <Section>
      <ProgramTitle>Guppy Levels</ProgramTitle>
      <ProgramDescription>
        <strong>Guppy 1:</strong> For children new to swimming or not yet comfortable in the water. Focuses on becoming comfortable, blowing bubbles, submerging the face, and basic water safety skills. Children will also start learning to float with assistance and practice basic kicking and arm movements. <strong>Price: $55 for 45 minutes.</strong>
      </ProgramDescription>
      <ProgramDescription>
        <strong>Guppy 2:</strong> Builds on skills from Guppy 1, focusing on independent floating on both front and back, gliding through the water, and basic arm and leg actions. Aims to increase confidence and develop coordination in the water. <strong>Price: $55 for 45 minutes.</strong>
      </ProgramDescription>
    </Section>
    <Section>
      <ProgramTitle>Minnows</ProgramTitle>
      <ProgramDescription>
        <strong>Minnows:</strong> For swimmers who can swim one lap (25 yards) independently without stopping. Focuses on refining basic skills like floating and gliding, and introducing more coordinated arm and leg movements. Swimmers will work on freestyle and backstroke techniques, improving their breathing and overall endurance. <strong>Price: $55 for 45 minutes.</strong>
      </ProgramDescription>
    </Section>
    <Section>
      <ProgramTitle>Sharks</ProgramTitle>
      <ProgramDescription>
        <strong>Sharks:</strong> For advanced swimmers who can swim multiple laps using various strokes (freestyle, backstroke, breaststroke, and butterfly) but are not yet swimming competitively. Focuses on refining stroke techniques, building endurance, and learning advanced skills like flip turns and treading water for extended periods. Swimmers will also work on improving their speed and efficiency in the water. <strong>Price: $55 for 45 minutes.</strong>
      </ProgramDescription>
    </Section>
    <Section>
      <ProgramTitle>Adult Lessons</ProgramTitle>
      <ProgramDescription>
        <strong>Beginner:</strong> For adults new to swimming or with a fear of water. Focuses on building water confidence, learning basic strokes, and understanding essential water safety. Skills include floating, gliding, and basic arm and leg actions. <strong>Price: $55 for 45 minutes.</strong>
      </ProgramDescription>
      <ProgramDescription>
        <strong>Intermediate:</strong> For adults who can swim but want to improve their technique and build endurance. Focuses on refining freestyle and backstroke, learning new strokes like breaststroke, and increasing overall swimming stamina. <strong>Price: $55 for 45 minutes.</strong>
      </ProgramDescription>
    </Section>
    <Section>
      <ProgramTitle>Specialized Class</ProgramTitle>
      <ProgramDescription>
        <strong>Advanced Swimming:</strong> Designed for swimmers aiming to compete or significantly improve their swimming skills. Focuses on advanced stroke refinement, developing speed and endurance, and mastering competitive techniques such as starts, turns, and finishes. Swimmers will undergo rigorous training sessions that mimic competitive swimming environments to prepare them for meets and competitions. <strong>Price: $55 for 55 minutes.</strong>
      </ProgramDescription>
    </Section>
    <Section>
      <ProgramTitle>Free Swimming</ProgramTitle>
      <ProgramDescription>
        <strong>Free Swimming:</strong> Designated time for parents or kids to swim on their own without the structure of a class. Provides an opportunity for relaxation, personal exercise, or practicing skills learned in classes. Lifeguards are present to ensure safety, but there is no formal instruction during this time. <strong>Price: $25 for 30 minutes.</strong>
      </ProgramDescription>
    </Section>
    <Section>
      <ProgramTitle>Private Lessons</ProgramTitle>
      <ProgramDescription>
        <strong>Private Lessons:</strong> This one-on-one session is tailored for both kids and adults, providing personalized instruction for an entire hour. One of our certified instructors will work closely with the student to focus on specific techniques and approaches for the swimming strokes they aim to improve. The individualized attention ensures that each lesson is customized to the student's unique needs and goals, whether they are beginners looking to build confidence in the water or advanced swimmers seeking to refine their technique and increase their efficiency. <strong>Price: $70 for 60 minutes.</strong>
      </ProgramDescription>
    </Section>
  </Layout>
)

export default ProgramsPage



