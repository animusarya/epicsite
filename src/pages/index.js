import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/Seo';
import Layout from '../components/global/Layout';

import HomeBanner from '../components/home/HomeBanner';
import Services from '../components/home/Services';
import AboutSection from '../components/global/AboutSection';
import Reviews from '../components/home/Reviews';
import Quote from '../components/home/Quote';
import BlogSection from '../components/global/BlogSection';

export const query = graphql`
  query HomePageQuery {
    sanitySiteSettings {
      title
      description
      keywords
      homeHero {
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
      servicesInformation
      homeServices {
        title
        subtitle
        image {
          asset {
            fluid(maxWidth: 1200) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      homeAbout {
        title
        subtitle
        linkTo {
          current
        }
        image {
          asset {
            fluid(maxWidth: 1200) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      quoteBackground {
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
          Type
          comment
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
  const home = data.sanitySiteSettings;
  const { edges: review } = data.allSanityReview;
  return (
    <Layout>
      <Seo
        title={home.title}
        description={home.description}
        keywords={home.keywords}
      />
      <HomeBanner home={home} />
      <Services home={home} />
      <AboutSection
        hasButton
        subtitle={home.homeAbout.subtitle}
        img={home.homeAbout.image.asset.fluid}
        alt={home.homeAbout.title}
        to={home.homeAbout.linkTo.current}
      />
      <Reviews review={review} />
      <BlogSection article={article} />
      <Quote home={home} />
    </Layout>
  );
};
export default IndexPage;
