import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
// import { GraphQLClient, gql } from 'graphql-request';
import Seo from '../components/Seo';
import Layout from '../components/global/Layout';
// import HeroHeader from '../components/elements/HeroHeader';
import QuoteForm from '../components/QuoteForm';

const Container = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  padding: 5rem 1.5rem !important;
`;

// const quoteMutation = gql`
//   mutation quote($email: String!, $name: String!, $message: message!) {
//     contact(input: { email: $email, name: $name, message: $message }) {
//       email
//     }
//   }
// `;
export const query = graphql`
  query QuotePageQuery {
    sanitySiteSettings {
      coverImage {
        quotePage {
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

const QuoteFormPage = () => {
  // const image = data.sanitySiteSettings.coverImage;
  return (
    <Layout>
      <Seo title="Quote" />
      {/* <HeroHeader
        heading="Get a Quote"
        title="Quote"
        background={
          image && image.quotePage
            ? image.quotePage.asset.fluid.src
            : '/images/contact.jpg'
        }
      /> */}
      <Container className="section">
        <div className="container ">
          <div className="columns is-centered ">
            <div className="column is-6 ">
              <QuoteForm />
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};
export default QuoteFormPage;
