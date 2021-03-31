import React from 'react';
import Img from 'gatsby-image';

import { Subtitle, Heading, Title, BackgroundBlob } from '../elements';

const Services = ({ home }) => {
  return (
    <>
      <div className="section is-medium">
        <BackgroundBlob size="90vh" left="-20%" />
        <div className="container">
          <div className="columns is-centered has-text-centered">
            <div className="column is-8">
              <Heading centered title="Our Services" />
              <Subtitle centered>{home.servicesInformation}</Subtitle>
            </div>
          </div>
          <div className="columns is-variable is-5 is-multiline is-centered mt-5">
            {home.homeServices.map((item) => (
              <div key={item._key} className="column is-4">
                <div className="card p-6 has-radius-medium mb-4">
                  <div className="card-image has-text-centered mb-5 ">
                    <figure className="image is-96x96">
                      <Img
                        fluid={
                          item && item.image && item.image.asset
                            ? item.image.asset.fluid
                            : ''
                        }
                        alt={item.title}
                      />
                    </figure>
                  </div>
                  <div className="content">
                    <div className="media">
                      <div className="media-content">
                        <Title>{item.title}</Title>
                        <Subtitle small>{item.subtitle}</Subtitle>
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
