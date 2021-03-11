import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import ContactForm from '../components/ContactForm';
import Seo from '../components/Seo';
import Layout from '../components/global/Layout';
import { HeroHeader } from '../components/elements';
// import HeroHeader from '../components/elements/HeroHeader';
// import Information from '../components/elements/Information';
import Reviews from '../components/home/Reviews';
import { theme } from '../utils/theme';

const Container = styled.div``;

export const query = graphql`
  query ContactPageQuery {
    sanitySiteSettings {
      email
      telephone
      contact {
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
      coverImage {
        contactPage {
          asset {
            fluid(maxWidth: 1000) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

const Contact = () => {
  // const contact = data.sanitySiteSettings;
  return (
    <Layout>
      <Seo title="Contact Us" />
      <HeroHeader
        title="Contact Us"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <Container className="section">
        <div className="container mb-6">
          <div className="columns is-centered is-vcentered">
            <div className="column is-6">Map </div>
            <div className="column is-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
      <Reviews bgColor={theme.mainBrandColor} />
    </Layout>
  );
};
export default Contact;
