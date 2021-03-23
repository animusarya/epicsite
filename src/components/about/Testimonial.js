import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Subtitle } from '../elements';

const Section = styled.div`
  padding: 7rem 0rem 0rem 0rem !important;
  .hero {
    background: ${(props) => props.theme.backgroundInputColorDark};
  }
  .hero-body {
    padding: 6rem 1.5rem 0rem 1.5rem !important;
  }
  .svg-inline--fa {
    color: #d57694;
    margin-left: -3rem;
    margin-bottom: -1rem;
  }
  h1 {
    font-size: ${(props) => props.theme.fontSizeMedium} !important;
    color: ${(props) => props.theme.mainBrandColor} !important;
  }
  h2 {
    color: ${(props) => props.theme.primaryColor} !important;
  }
`;

const Testimonial = ({ aboutUs }) => {
  return (
    <Section className="section is-medium">
      <div className="hero">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered is-variable is-8">
              <div className="column is-8 ">
                <i className="fas fa-quote-left is-size-2" />
                <Subtitle color>{aboutUs.testimonial.description}</Subtitle>
                <div className="mt-6">
                  <h1 className="title has-text-weight-bold">
                    {aboutUs.testimonial.name}
                  </h1>
                  <h2 className="subtitle is-size-6">
                    {aboutUs.testimonial.position}
                  </h2>
                </div>
              </div>
              <div className="column is-3">
                <Img
                  fluid={
                    aboutUs.testimonial.image
                      ? aboutUs.testimonial.image.asset.fluid
                      : ''
                  }
                  alt={aboutUs.testimonial.position}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Testimonial;
