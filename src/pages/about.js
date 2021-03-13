import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/global/Layout';
import Seo from '../components/Seo';
import { HeroHeader } from '../components/elements';
import AboutSection from '../components/global/AboutSection';
import Testimonial from '../components/about/Testimonial';
import CountSection from '../components/about/CountSection';

const Container = styled.div`
  .about-wrapper {
    position: relative;
  }
`;

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

const About = () => {
  // const { edges: posts } = data.allSanityArticle;
  // const aboutUs = data.sanityAbout;
  // const cover = data.sanitySiteSettings.coverImage;
  return (
    <Layout>
      <Seo title="About" />
      <Container>
        <HeroHeader
          title="Who we are"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <div className="pt-6 about-wrapper">
          <AboutSection
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci ut orci, orci, iaculis nunc. In aenean aenean pulvinar nibh in ipsum tempor semper aliquet. Aliquet ultricies interdum vel praesent egestas nisi amet orci massa. Tempor."
            Img="/images/about2.png"
          />
        </div>
        <Testimonial />
        <CountSection />
      </Container>
    </Layout>
  );
};
export default About;
