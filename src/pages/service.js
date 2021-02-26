import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../components/global/Layout';
import Seo from '../components/Seo';
// import HeroHeader from '../components/elements/HeroHeader';
import ServiceFeatures from '../components/ServiceFeatures';

const Wrapper = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

export const query = graphql`
  query servicePageQueries {
    allSanityServices(sort: { fields: order, order: ASC }) {
      edges {
        node {
          _id
          order
          title
          slug {
            current
          }
          description
          images {
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
        servicePage {
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

const Service = ({ data }) => {
  const service = data.allSanityServices.edges;
  // const cover = data.sanitySiteSettings.coverImage;
  return (
    <Layout>
      <Seo title="Services" />
      {/* <HeroHeader
        heading="Services"
        background={
          cover && cover.servicePage && cover.servicePage.asset
            ? cover.servicePage.asset.fluid.src
            : ''
        }
      /> */}
      <Wrapper>
        {service.map(({ node }, index) => (
          <ServiceFeatures key={node._id} item={node} number={index + 1} />
        ))}
      </Wrapper>
    </Layout>
  );
};
export default Service;
