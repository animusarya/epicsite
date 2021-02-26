import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/global/Layout';
import Seo from '../components/Seo';
import News from '../components/News';
import AboutFeatures from '../components/AboutFeatures';
import Heading from '../components/elements/Heading';
import config from '../utils/config';

export const aboutQuery = graphql`
  query myBlog {
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
    sanityAbout {
      _id
      heroTitle
      heroDescription
      featuredImage {
        asset {
          fluid(maxWidth: 1200) {
            ...GatsbySanityImageFluid
          }
        }
      }
      image {
        asset {
          fluid(maxWidth: 1200) {
            ...GatsbySanityImageFluid
          }
        }
      }
      services {
        _key
        title
        description
      }
    }
    sanitySiteSettings {
      coverImage {
        aboutPageCover {
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

const AboutUs = ({ data }) => {
  const { edges: posts } = data.allSanityArticle;
  const aboutUs = data.sanityAbout;
  // const cover = data.sanitySiteSettings.coverImage;
  return (
    <Layout>
      <Seo title="About" description={`About Us ${config.siteName}`} />
      {/* <HeroHeader
        heading="About"
        background={
          cover.aboutPageCover ? cover.aboutPageCover.asset.fluid.src : ''
        }
      />
      <Information
        title={aboutUs.heroTitle}
        description={aboutUs.heroDescription}
        image={aboutUs.image ? aboutUs.image.asset.fluid : ''}
      /> */}
      <AboutFeatures data={aboutUs} />
      <div className="section">
        <div className="container">
          <Heading centered>Past Projects</Heading>
          <div className="columns is-multiline">
            {posts.map(({ node: post }) => (
              <div className="column is-4" key={post._id}>
                <News node={post} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default AboutUs;
