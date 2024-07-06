import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div className="container">
      <div className="row">
        <div className="col-12">
          <GalleryContainer>
            <ImageGallery 
              items={images} 
              showPlayButton={false}
              showFullscreenButton={true}
              showNav={true}
              showThumbnails={true}
              thumbnailPosition="bottom"
              className="img-fluid"
            />
          </GalleryContainer>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
