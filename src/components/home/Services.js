import React from 'react';
import { Subtitle, Heading, Title } from '../elements';

const ServiceItem = [
  {
    id: 1,
    title: 'Lorem ipsum',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    image: '/images/Plus.png',
  },
  {
    id: 2,
    title: 'Lorem ipsum',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    image: '/images/Plus.png',
  },
  {
    id: 3,
    title: 'Lorem ipsum',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    image: '/images/Plus.png',
  },
  {
    id: 4,
    title: 'Lorem ipsum',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    image: '/images/Plus.png',
  },
  {
    id: 5,
    title: 'Lorem ipsum',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    image: '/images/Plus.png',
  },
  {
    id: 6,
    title: 'Lorem ipsum',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    image: '/images/Plus.png',
  },
];

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
        <div className="columns is-multiline">
          {ServiceItem.map((item) => (
            <div className="column is-4">
              <div className="card">
                <div className="card-image has-text-centered">
                  <figure className="image is-64x64">
                    <img src={item.image} alt="icon" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <Title>{item.title}</Title>
                      <Subtitle>{item.subtitle}</Subtitle>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Services;
