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
    sanityFaq {
      banner {
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
      blogHeading
      getInTouchDescription
    }
    allSanityArticle(limit: 6, sort: { fields: _createdAt, order: DESC }) {
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
  const faq = data.sanityFaq;
  return (
    <Layout>
      <Seo title="Faq" />
      <HeroHeader
        bgImage={faq.banner.image.asset.fluid.src}
        title={faq.banner.title}
        subtitle={faq.banner.description}
      />
      <VideoSection video={video} />
      <BlogSection article={article} heading={faq.blogHeading} />
      <ContactSection faq={faq} />
    </Layout>
  );
};
export default FAQ;
