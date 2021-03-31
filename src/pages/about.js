import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/global/Layout';
import Seo from '../components/Seo';
import { HeroHeader } from '../components/elements';
import AboutSection from '../components/global/AboutSection';
import Testimonial from '../components/about/Testimonial';
import CountSection from '../components/about/CountSection';
import config from '../utils/config';

const Container = styled.div`
  .about-wrapper {
    position: relative;
  }
`;

export const aboutQuery = graphql`
  query myBlog {
    sanityAbout {
      aboutUs {
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
      information {
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
      testimonial {
        position
        name
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
`;

const About = ({ data }) => {
  const aboutUs = data.sanityAbout;
  return (
    <Layout>
      <Seo title="About" description={`About Us ${config.siteName}`} />
      <Container>
        <HeroHeader
          bgImage={
            aboutUs &&
            aboutUs.aboutUs.image &&
            aboutUs.aboutUs.image.asset &&
            aboutUs.aboutUs.image.asset.fluid.src
          }
          title={aboutUs.aboutUs.title}
          subtitle={aboutUs.aboutUs.description}
        />
        <div className="pt-6 about-wrapper">
          <AboutSection
            to={
              aboutUs.information && aboutUs.information.linkTo
                ? aboutUs.information.linkTo.current
                : ''
            }
            title={aboutUs.information.title}
            subtitle={aboutUs.information.subtitle}
            img={
              aboutUs &&
              aboutUs.information.image &&
              aboutUs.information.image.asset &&
              aboutUs.information.image.asset.fluid
            }
            alt={aboutUs.information.title}
          />
        </div>
        <Testimonial aboutUs={aboutUs} />
        <CountSection />
      </Container>
    </Layout>
  );
};
export default About;
