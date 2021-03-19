import React from 'react';
import Img from 'gatsby-image';

import { Subtitle, Heading, Title } from '../elements';
import BackgroundBlob from '../BackgroundBlob';

const Services = ({ service }) => {
  console.log(service, 'service');
  return (
    <>
      <div className="section is-medium">
        <BackgroundBlob size="90vh" left="-20%" />
        <div className="container">
          <div className="columns is-centered has-text-centered">
            <div className="column is-8">
              <Heading centered darkText="Our" colouredText="services" />
              <Subtitle centered>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Subtitle>
            </div>
          </div>
          <div className="columns is-variable is-5 is-multiline is-centered mt-5">
            {service.map(({ node }) => (
              <div key={node.id} className="column is-4">
                <div className="card p-6 has-radius-medium mb-4">
                  <div className="card-image has-text-centered mb-5 ">
                    <figure className="image is-96x96">
                      <Img fluid={node.image.asset.fluid} alt="icon" />
                    </figure>
                  </div>
                  <div className="content">
                    <div className="media">
                      <div className="media-content">
                        <Title>{node.title}</Title>
                        <Subtitle small>{node.description}</Subtitle>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
