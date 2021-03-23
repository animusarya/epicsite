import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Heading, Button, ScrollAnimation, Subtitle } from '../elements';
import BackgroundBlob from '../BackgroundBlob';

const Container = styled.div`
  position: relative;
  overflow: hidden;
  .slick-dots li button:before {
    color: ${(props) => props.theme.darkAccent} !important;
    font-size: 15px;
    line-height: 20px;
  }
  .buttonWrapper {
    margin-left: -1rem;
  }
`;

const AboutSection = ({ subtitle, hasButton, img, alt, to }) => {
  return (
    <>
      <Container className="section is-medium">
        <BackgroundBlob size="70vh" right="-1%" />
        <div className="container">
          <div className="columns">
            <div className="column is-4">
              <Heading
                lineAlignLeft
                darkText="Lorem ipsum dolor"
                colouredText="sit amet"
              />
              <Subtitle>{subtitle}</Subtitle>
              <div className="mt-4 buttonWrapper">
                {hasButton && (
                  <Button isLarge to={to}>
                    Learn more
                  </Button>
                )}
              </div>
            </div>
            <div className="column is-6 is-offset-2">
              <Img fluid={img} alt={alt} />
              <ScrollAnimation
                top="75%"
                left="50%"
                animation="animate__fadeInUp"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AboutSection;
