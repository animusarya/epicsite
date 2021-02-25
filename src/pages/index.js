import React from 'react';
import { graphql } from 'gatsby';

import config from '../utils/config';
import HomeBanner from '../components/HomeBanner';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
// import Features from '../components/Features';
// import HomeAboutUs from '../components/HomeAboutUs';
// import Review from '../components/Review';
// import Members from '../components/Members';

export const query = graphql`
  query HomePageQuery {
    sanitySiteSettings {
      title
      description
      keywords
      informationTitle
      information

      homeHero {
        _key
        title
        subtitle
        linkTo
        image {
          asset {
            fluid(maxWidth: 1600) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      homeFeatures {
        _key
        title
        subtitle
        image {
          asset {
            fluid(maxWidth: 600) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }

      brands {
        _key
        title
        image {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      whyChoose {
        _key
        title
        description
        image {
          asset {
            fluid(maxWidth: 1000) {
              ...GatsbySanityImageFluid
            }
          }
        }
        featuresList
      }
      reviewBackground {
        asset {
          fluid(maxWidth: 1200) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
    allSanityReview {
      edges {
        node {
          _id
          personName
          comment
        }
      }
    }
  }
`;

const IndexPage = () => {
  // const home = data.sanitySiteSettings;
  // const homeFeatures = data.sanitySiteSettings;
  // const brands = data.sanitySiteSettings;
  // const homeAboutUs = data.sanitySiteSettings.whyChoose;
  // const review = data.allSanityReview.edges;
  return (
    <Layout>
      <Seo title="Home" />
      <HomeBanner />
      {/* <HomeAboutUs data={homeAboutUs} home={home} />
      <Features data={homeFeatures} />
      <Review review={review} home={home} />
      <Members data={brands} /> */}
    </Layout>
  );
};
export default IndexPage;
