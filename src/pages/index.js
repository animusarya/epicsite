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
      # reviewBackground {
      #   asset {
      #     fluid(maxWidth: 1200) {
      #       ...GatsbySanityImageFluid
      #     }
      #   }
      # }
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
    # allSanityServices {
    #   edges {
    #     node {
    #       _id
    #       order
    #       title
    #       description
    #       slug {
    #         current
    #       }
    #       image {
    #         asset {
    #           fluid(maxWidth: 1200) {
    #             ...GatsbySanityImageFluid
    #           }
    #         }
    #       }
    #     }
    #   }
    # }
  }
`;

const IndexPage = ({ data }) => {
  const { edges: article } = data.allSanityArticle;
  const home = data.sanitySiteSettings;
  console.log(home, 'hgfj');
  return (
    <Layout>
      <Seo title="Home" />
      <HomeBanner home={home} />
      <Services home={home} />
      <AboutSection
        hasButton
        subtitle={home.homeAbout.subtitle}
        img={home.homeAbout.image.asset.fluid}
      />
      <Reviews />
      <BlogSection article={article} />
      <Quote />
    </Layout>
  );
};
export default IndexPage;
