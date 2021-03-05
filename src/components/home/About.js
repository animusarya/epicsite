import React from 'react';
import styled from 'styled-components';
import { Button, Heading, Subtitle } from '../elements';
import BackgroundBlob from '../BackgroundBlob';

const Container = styled.div`
  .slick-dots li button:before {
    color: ${(props) => props.theme.darkAccent} !important;
    font-size: 15px;
    line-height: 20px;
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
              <Button borderDark className="mt-5">
                Learn more
              </Button>
            </div>
            <div className="column is-6 is-offset-2">
              <img src="/images/home-about-bg.png" alt="about" />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;
