import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/global/Layout';
import Seo from '../components/Seo';
// import HeroHeader from '../components/elements/HeroHeader';
import { HeroHeader } from '../components/elements';
import ServiceFeatures from '../components/ServiceFeatures';

export const query = graphql`
  query ServicePageQuery {
    allSanityServices {
      edges {
        node {
          _id
          order
          slug {
            current
          }
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
    }
  }
`;

const Service = ({ data }) => {
  const service = data.allSanityServices.edges;
  return (
    <Layout>
      <Seo title="Services" />
      <HeroHeader
        title="Services"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      {service.map(({ node }, index) => (
        <ServiceFeatures
          key={node._id}
          item={node}
          number={index + 1}
          reverseColumn={index % 2 === 0}
        />
      ))}
    </Layout>
  );
};
export default Service;
