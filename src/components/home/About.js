import React from 'react';
import styled from 'styled-components';
import { Button, Heading, ScrollAnimation, Subtitle } from '../elements';
import BackgroundBlob from '../BackgroundBlob';

const Container = styled.div`
  .slick-dots li button:before {
    color: ${(props) => props.theme.darkAccent} !important;
    font-size: 15px;
    line-height: 20px;
  }
  .buttonWrapper {
    margin-left: -1rem;
  }
`;

const About = () => {
  return (
    <>
      <BackgroundBlob size="70vh" right="-10%" />
      <Container className="section is-medium">
        <div className="container">
          <div className="columns">
            <div className="column is-4">
              <Heading
                lineAlignLeft
                darkText="Lorem ipsum dolor"
                colouredText="sit amet"
              />
              <Subtitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
                egestas non semper vitae orci, cursus eleifend nisi. Ut neque
                accumsan amet eget aenean. Facilisis dictum pharetra.
              </Subtitle>
              <div className="mt-4 buttonWrapper">
                <Button isLarge>Learn more</Button>
              </div>
            </div>
            <div className="column is-6 is-offset-2">
              <img src="/images/home-about-bg.png" alt="about" />
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

export default About;
