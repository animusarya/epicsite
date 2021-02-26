import React from 'react';
import styled from 'styled-components';
import { Subtitle, Heading, Title } from './elements';

const CardWrapper = styled.div`
  border-radius: 20px;
`;

const ServiceItem = [
  {
    id: 1,
    title: 'Lorem ipsum',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    image: '/images/file-img.png',
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
    image: '/images/share.png',
  },
  {
    id: 4,
    title: 'Lorem ipsum',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    image: '/images/edit.png',
  },
  {
    id: 5,
    title: 'Lorem ipsum',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    image: '/images/ok.png',
  },
  {
    id: 6,
    title: 'Lorem ipsum',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    image: '/images/info.png',
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
        <div className="columns is-multiline is-variable is-6 is-centered mt-5">
          {ServiceItem.map((item) => (
            <div className="column is-4">
              <CardWrapper className="card p-6">
                <div className="card-image has-text-centered mb-5 ">
                  <figure className="image is-96x96">
                    <img src={item.image} alt="icon" />
                  </figure>
                </div>
                <div className="content">
                  <div className="media">
                    <div className="media-content">
                      <Title>{item.title}</Title>
                      <Subtitle Size>{item.subtitle}</Subtitle>
                    </div>
                  </div>
                </div>
              </CardWrapper>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Services;
