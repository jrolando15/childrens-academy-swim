import React from 'react';
import Layout from "../components/layout";
import SEO from "../components/seo";
import Gallery from "../components/Gallery_2";
import styled from "styled-components";


const JustifiedText = styled.p`
  text-align: justify;
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const TestimonialsPage = () => (
  <Layout>
    <SEO title="Testimonials" />
    <div className="container mt-5">
      <h1 className="text-center text-primary">Testimonials</h1>
      <JustifiedText>
      If you have had a great experience at our camp, we'd love to hear about it! 
      Please feel free to fill out this testimonial. Your feedback helps our program 
      tremendously and allows us to continue providing exceptional experiences for 
      future campers.
      </JustifiedText>
      <div className="text-center mt-4">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScPm82RcU20nJZhsI0Rc0LXJdotWlycB5qtP_vQ5r2y_z8Odg/viewform?usp=sf_link"
          width="640"
          height="800"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Testimonials Form"
        >
          Loading…
        </iframe>
      </div>
      <h2 className="text-center text-primary mt-5">These are the testimonials from our participants</h2>
      <Gallery />
    </div>
  </Layout>
);

export default TestimonialsPage;
