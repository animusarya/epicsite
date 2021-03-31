import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/global/Layout';
import { HeroHeader } from '../components/elements';
import Seo from '../components/Seo';
import config from '../utils/config';
import News from '../components/global/News';

export const blogQuery = graphql`
  query blog {
    sanitySiteSettings {
      blogBanner {
        title
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

const Blog = ({ data }) => {
  const { edges: aboutUs } = data.allSanityArticle;
  const blogHero = data.sanitySiteSettings;
  return (
    <Layout>
      <Seo
        title="Blog"
        description={`Latest news at ${config.siteName}`}
        url={`${config.siteUrl}/account`}
      />
      <HeroHeader
        bgImage={
          blogHero &&
          blogHero.blogBanner.image &&
          blogHero.blogBanner.image.asset &&
          blogHero.blogBanner.image.asset.fluid.src
        }
        title={blogHero.blogBanner.title}
        subtitle={blogHero.blogBanner.description}
      />
      <div className="section">
        <div className="container">
          <div className="columns is-multiline is-variable is-5">
            {aboutUs.map(({ node }) => (
              <div className="column is-4 mb-4" key={node._id}>
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
