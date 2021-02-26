import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import ReactMarkdown from 'react-markdown';
import { truncate } from 'lodash';
// import OverlayButton from './elements/OverlayButton';

const Wrapper = styled.div`
  flex-direction: ${(props) => (props.isSecondary ? 'row-reverse' : '')};
`;

const ServiceFeatures = ({ item, number }) => {
  const isSecondary = number % 2 === 0;

  return (
    <section className="section">
      <div className="container">
        <Wrapper
          isSecondary={isSecondary}
          className="columns is-vcentered is-variable is-6"
        >
          <div className="column content">
            <h3 className="title is-family-primary has-text-weight-normal is-size-4 mb-5 is-spaced has-text-centered">
              {item.title}
            </h3>
            <div className="line-height mb-5 react-markdown">
              <ReactMarkdown
                source={truncate(item.description, {
                  length: 300,
                })}
              />
            </div>
            {/* <OverlayButton
              linkTo={item.slug ? item.slug.current : ''}
              buttonText="View Details"
            /> */}
          </div>
          <div className="column">
            <Img
              fluid={item.images[0] ? item.images[0].asset.fluid : ''}
              alt={item.title ? item.title : 'Services'}
            />
          </div>
        </Wrapper>
      </div>
    </section>
  );
};
export default ServiceFeatures;
