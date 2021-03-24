import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Seo from '../components/Seo';
import Layout from '../components/global/Layout';
import { HeroHeader } from '../components/elements';
import ContactSection from '../components/contact/ContactSection';
import Reviews from '../components/home/Reviews';

const Container = styled.div`
  padding-top: 9rem;
`;

export const query = graphql`
  query ContactPageQuery {
    sanitySiteSettings {
      telephoneOne
      telephoneTwo
      address
      email
      footerDescription
      homeReviewHeading
      contactBanner {
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
    allSanityReview {
      edges {
        node {
          _id
          personName
          Type
          comment
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

const Contact = ({ data }) => {
  const contact = data.sanitySiteSettings;
  const { edges: review } = data.allSanityReview;
  return (
    <Layout>
      <Seo title="Contact Us" />
      <HeroHeader
        title={contact.contactBanner.title}
        subtitle={contact.contactBanner.description}
        bgImage={
          contact && contact.contactBanner && contact.contactBanner.image
            ? contact.contactBanner.image.asset.fluid.src
            : ''
        }
      />
      <ContactSection contact={contact} />
      <Container>
        <Reviews review={review} reviewHeading={contact.homeReviewHeading} />
      </Container>
    </Layout>
  );
};
export default Contact;
