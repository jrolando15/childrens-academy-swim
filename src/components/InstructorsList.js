import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import instructors from "../data/instructors";

const InstructorProfile = ({ name, image, bio }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(width: 150, height: 150, placeholder: BLURRED, layout: FIXED)
            }
          }
        }
      }
    }
  `);

  const imageNode = data.allFile.edges.find(edge => edge.node.relativePath === image);
  const imageData = getImage(imageNode.node.childImageSharp.gatsbyImageData);

  return (
    <div>
      <h2>{name}</h2>
      {imageData ? (
        <GatsbyImage image={imageData} alt={name} style={{ borderRadius: '50%' }} />
      ) : (
        <p>Image not found</p>
      )}
      <p>{bio}</p>
    </div>
  );
};

const InstructorsList = () => {
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  return (
    <div>
      <div>
        {instructors.map((instructor, index) => (
          <div key={index} onClick={() => setSelectedInstructor(instructor)}>
            <h3>{instructor.name}</h3>
          </div>
        ))}
      </div>
      {selectedInstructor && (
        <div>
          <h2>{selectedInstructor.name}</h2>
          <p>{selectedInstructor.bio}</p>
          <InstructorProfile
            name={selectedInstructor.name}
            image={selectedInstructor.image}
            bio={selectedInstructor.bio}
          />
        </div>
      )}
    </div>
  );
};

export default InstructorsList;



