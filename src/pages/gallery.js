import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/global/Layout';
import Seo from '../components/Seo';
// import HeroHeader from '../components/elements/HeroHeader';
import GalleryImage from '../components/Gallery';

export const query = graphql`
  query GalleryPageQuery {
    allSanityGallery {
      edges {
        node {
          _id
          alternative
          image {
            asset {
              fluid(maxWidth: 1200) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
    sanitySiteSettings {
      coverImage {
        galleryImage {
          asset {
            fluid(maxWidth: 1200) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

const Gallery = ({ data }) => {
  const galleryData = data.allSanityGallery.edges;
  // const cover = data.sanitySiteSettings.coverImage;
  return (
    <Layout>
      <Seo title="Gallery" />
      {/* <HeroHeader
        heading="Gallery"
        background={
          cover.galleryImage && cover.galleryImage.asset
            ? cover.galleryImage.asset.fluid.src
            : ''
        }
      /> */}
      <GalleryImage data={galleryData} />
    </Layout>
  );
};
export default Gallery;
