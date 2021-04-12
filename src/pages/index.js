import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/Seo';
import Layout from '../components/global/Layout';
import HomeBanner from '../components/home/HomeBanner';

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
      homeReviewHeading
      homeBlogHeading
      homeQuoteHeading
      servicesInformation
      homeServices {
        _key
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
    allSanityArticle(limit: 3, sort: { fields: _createdAt, order: DESC }) {
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
    </Layout>
  );
};
export default IndexPage;
