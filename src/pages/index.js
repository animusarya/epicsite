import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/global/Layout';

import HomeBanner from '../components/home/HomeBanner';
import Services from '../components/home/Services';
import AboutSection from '../components/global/AboutSection';
// import Blog from '../components/global/Blog';
// import Features from '../components/Features';
// import HomeAboutUs from '../components/HomeAboutUs';
import Reviews from '../components/home/Reviews';
import Quote from '../components/home/Quote';
import News from '../components/News';
import { ScrollAnimation, Heading, Button } from '../components/elements';

// import Members from '../components/Members';

const BlogWrapper = styled.div`
  position: relative;
  padding-top: 3rem;
  .hero {
    background: ${(props) => props.theme.mainBrandColor} !important;
  }
`;

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
    allSanityArticle(sort: { fields: _createdAt, order: DESC }) {
      edges {
        node {
          _id
          title
          slug {
            current
          }
          description
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
  }
`;

const IndexPage = ({ data }) => {
  const { edges: article } = data.allSanityArticle;
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
      <AboutSection
        hasButton
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus egestas non semper vitae orci, cursus eleifend nisi. Ut neque accumsan amet eget aenean. Facilisis dictum pharetra."
        Img="/images/home-about-bg.png"
      />
      <Reviews />
      <BlogWrapper>
        <div className="hero is-medium">
          <ScrollAnimation
            zIndex="0"
            top="23.5%"
            left="14%"
            animation="animate__fadeInUp"
          />
          <div className="hero-body container">
            <Heading centered hasWhite>
              Check out our latest article
            </Heading>
            <div className="columns is-variable is-5 is-multiline is-centered mt-6">
              {article.map(({ node }) => (
                <div className="column is-4" key={node._id}>
                  <News node={node} />
                </div>
              ))}
            </div>
            <div className="has-text-centered mt-6 pt-5">
              <Button hasBackgroundWhite isLarge to="/blog">
                View all
              </Button>
            </div>
          </div>
        </div>
      </BlogWrapper>
      <Quote />
      {/* <HomeAboutUs data={homeAboutUs} home={home} />
      <Features data={homeFeatures} />
      <Review review={review} home={home} />
      <Members data={brands} /> */}
    </Layout>
  );
};
export default IndexPage;
