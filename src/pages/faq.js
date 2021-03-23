import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/global/Layout';
import { HeroHeader } from '../components/elements';
import BlogSection from '../components/global/BlogSection';
import ContactSection from '../components/faq/ContactSection';
import VideoSection from '../components/faq/VideoSection';
import Seo from '../components/Seo';

export const query = graphql`
  query FaqPageQuery {
    allSanityVideo(sort: { fields: order, order: ASC }) {
      edges {
        node {
          _id
          order
          title
          description
          url
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

const FAQ = ({ data }) => {
  const { edges: article } = data.allSanityArticle;
  const { edges: video } = data.allSanityVideo;
  return (
    <Layout>
      <Seo title="Faq" />
      <HeroHeader
        bgImage="/images/herobg.png"
        title="Lorem ipsum dolor"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <VideoSection video={video} />
      <BlogSection article={article} />
      <ContactSection />
    </Layout>
  );
};
export default FAQ;
