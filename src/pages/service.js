import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/global/Layout';
import Seo from '../components/Seo';
import { HeroHeader } from '../components/elements';
import ServiceFeatures from '../components/ServiceFeatures';

export const query = graphql`
  query ServicePageQuery {
    sanitySiteSettings {
      servicesBanner {
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
    allSanityServices {
      edges {
        node {
          _id
          order
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
  const heroService = data.sanitySiteSettings;
  return (
    <Layout>
      <Seo title="Services" />
      <HeroHeader
        bgImage={
          heroService &&
          heroService.servicesBanner.image &&
          heroService.servicesBanner.image.asset &&
          heroService.servicesBanner.image.asset.fluid.src
        }
        title={heroService.servicesBanner.title}
        subtitle={heroService.servicesBanner.description}
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
