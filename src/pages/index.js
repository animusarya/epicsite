import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/Seo';
import Layout from '../components/global/Layout';

import HomeBanner from '../components/home/HomeBanner';
import Services from '../components/home/Services';
import About from '../components/home/About';
import Blog from '../components/home/Blog';
// import Features from '../components/Features';
// import HomeAboutUs from '../components/HomeAboutUs';
import Reviews from '../components/home/Reviews';
import Quote from '../components/home/Quote';
// import BackgroundBlob from '../components/BackgroundBlob';
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
      <Services />
      <About />
      <Reviews />
      <Blog />
      <Quote />
      {/* <HomeAboutUs data={homeAboutUs} home={home} />
      <Features data={homeFeatures} />
      <Review review={review} home={home} />
      <Members data={brands} /> */}
    </Layout>
  );
};
export default IndexPage;
