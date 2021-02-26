import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../components/global/Layout';
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

const NewsWrapper = styled.section`
  padding: 50px 0px;
  .columns {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
`;

const Blog = ({ data }) => {
  const { edges: aboutUs } = data.allSanityArticle;
  // const cover = data.sanitySiteSettings.coverImage;
  return (
    <Layout>
      <Seo
        title="Past Projects"
        description={`Latest news at ${config.siteName}`}
        url={`${config.siteUrl}/account`}
      />
      {/* <HeroHeader
        heading="Past Projects"
        background={
          cover && cover.blogPage ? cover.blogPage.asset.fluid.src : ''
        }
      /> */}
      <NewsWrapper className="section">
        <div className="container">
          <div className="columns is-multiline">
            {aboutUs.map(({ node }) => (
              <div className="column is-4" key={node._id}>
                <News node={node} />
              </div>
            ))}
          </div>
        </div>
      </NewsWrapper>
    </Layout>
  );
};

export default Blog;
