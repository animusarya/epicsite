import React from 'react';
import Img from 'gatsby-image';
import { Subtitle, Heading, Title } from '../elements';

const Services = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="columns is-centered has-text-centered">
          <div className="column is-8">
            <Heading centered darkText="Our" colouredText="services" />
            <Subtitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Subtitle>
          </div>
        </div>
        <div className="columns is-centered has-text-centered">
          <div className="column is-8">
            <div className="card">
              <div className="card-image">
                <figure className="image is-64x64">
                  <Img src="/images/Plus.png" alt="Plus image" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <Title>Lorem ipsum</Title>
                    <Subtitle>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor
                    </Subtitle>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
