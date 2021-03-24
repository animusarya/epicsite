import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Heading, Subtitle, ScrollAnimation } from './elements';

const Wrapper = styled.div`
  flex-direction: ${(props) => (props.isSecondary ? 'row-reverse' : '')};
`;

const ServiceFeatures = ({ item, number, reverseColumn }) => {
  const isSecondary = number % 2 === 0;
  return (
    <section className="section is-medium">
      <div className="container">
        <Wrapper
          className="columns is-vcentered is-variable is-8"
          isSecondary={isSecondary}
        >
          <div className="column content">
            <Heading lineAlignLeft title={item.title} />
            <Subtitle>{item.description}</Subtitle>
          </div>
          <div className="column ">
            <Img
              fluid={item.image ? item.image.asset.fluid : ''}
              alt={item.title ? item.title : 'Services'}
            />
            <ScrollAnimation
              top="-7%"
              left={reverseColumn ? '48%' : '42%'}
              animation="animate__fadeInUp"
              image="/images/pink-dot.png"
            />
          </div>
        </Wrapper>
      </div>
    </section>
  );
};
export default ServiceFeatures;
