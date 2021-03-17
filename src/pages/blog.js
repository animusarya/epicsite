import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/global/Layout';
import { HeroHeader } from '../components/elements';
import Seo from '../components/Seo';
import config from '../utils/config';
import News from '../components/News';

export const blogQuery = graphql`
  query blog {
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
    sanitySiteSettings {
      coverImage {
        blogPage {
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

const Blog = ({ data }) => {
  const { edges: aboutUs } = data.allSanityArticle;
  return (
    <Layout>
      <Seo
        title="Past Projects"
        description={`Latest news at ${config.siteName}`}
        url={`${config.siteUrl}/account`}
      />
      <HeroHeader
        title="Lorem ipsum dolor"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <div className="section">
        <div className="container">
          <div className="columns is-multiline">
            {aboutUs.map(({ node }) => (
              <div className="column is-4" key={node._id}>
                <News node={node} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
