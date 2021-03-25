import React from 'react';
import { graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/global/Layout';
import HeroHeader from '../components/elements/HeroHeader';

export const pageQuery = graphql`
  query PageByPath($slug: String!) {
    sanityPage(slug: { current: { eq: $slug } }) {
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
`;

const PageView = ({ data }) => {
  const page = data.sanityPage;

  if (!page.slug.current) {
    return null;
  }

  return (
    <Layout>
      <Seo
        title={page.title}
        description={`Read news & updates about ${page.title}`}
        url={`${config.siteUrl}/page/${page.slug.current}`}
      />
      <HeroHeader
        title={page.title}
        bgImage={
          page.image ? page.image.asset.fluid.src : '/images/contact.jpg'
        }
      />
      <section className="section">
        <div className="container">
          <div className="markdown-container">
            <ReactMarkdown source={page.description} />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PageView;
