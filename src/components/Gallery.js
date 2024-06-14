import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

// Styled component for the gallery container
const GalleryContainer = styled.div`
  margin: 20px 0;
`;

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { extension: { regex: "/(jpg|jpeg|png)/" }, relativeDirectory: { eq: "gallery" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
            publicURL
          }
        }
      }
    }
  `);

  const images = data.allFile.edges.map(({ node }) => ({
    original: node.publicURL,
    thumbnail: node.publicURL,
  }));

  return (
    <GalleryContainer>
      <ImageGallery items={images} />
    </GalleryContainer>
  );
};

export default Gallery;