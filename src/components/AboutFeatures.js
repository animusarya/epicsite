import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Heading from './elements/Heading';

const Section = styled.section`
  .counting {
    background: ${(props) => props.theme.mainBrandColor} !important;
    width: 65px !important;
    height: 65px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
  }
  .media + .media {
    border: none;
  }
`;

const AboutFeatures = ({ data }) => {
  if (!data) {
    return null;
  }
  return (
    <Section className="section">
      <div className="container my-6">
        <Heading centered>Our Service</Heading>
        <div className="columns is-centered ">
          <div className="column">
            {data.services.slice(0, 2).map((item, index) => (
              <div
                key={item._key}
                className="media is-flex-direction-row-reverse mb-5"
              >
                <div className="media-left ml-6">
                  <div className="counting is-size-5 has-text-white has-text-weight-semibold is-flex has-text-centered">
                    {index + 1}
                  </div>
                </div>
                <div className="media-content">
                  <p className="title is-size-4 has-text-right has-text-weight-normal mb-3 is-family-primary">
                    {item.title}
                  </p>
                  <p className="subtitle is-size-6  has-text-right mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="column">
            <Img fluid={data.featuredImage.asset.fluid} alt="about us" />
          </div>
          <div className="column ">
            {data.services.slice(2, 4).map((item, index) => (
              <div className="media  mb-5" key={item._key}>
                <div className="media-left mr-6">
                  <div className="counting is-size-5 has-text-white has-text-weight-semibold is-flex has-text-centered">
                    {index + 3}
                  </div>
                </div>
                <div className="media-content">
                  <p className="title is-size-4 has-text-weight-normal mb-3 is-family-primary">
                    {item.title}
                  </p>
                  <p className="subtitle is-size-6 mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
export default AboutFeatures;
