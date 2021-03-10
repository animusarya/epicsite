import React from 'react';
import styled from 'styled-components';
import { Button } from '../elements';

const Section = styled.div`
  background-image: url(/images/hero-img.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  .title {
    font-size: 56px !important;
  }
  .mb-5 {
    margin-bottom: 40px !important;
  }
`;

const TriangleSection = styled.div`
  clip-path: polygon(0 0, 0 92%, 50% 100%, 100% 92%, 100% 0, 51% 0);
`;

const HomeBanner = () => {
  return (
    <TriangleSection>
      <Section className="hero is-large">
        <div className="hero-body has-text-centered">
          <div className="columns is-centered">
            <div className="column is-6">
              <h1 className="title mb-5 has-text-weight-bold line-height-large">
                Lorem ipsum dolor amet, consectetur{' '}
              </h1>
              <p className="subtitle has-text-weight-normal is-size-4 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sit
                amet, consectetur adipiscing elit
              </p>
              <Button hasBackgroundWhite isLarge to="/">
                Consult Today
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </TriangleSection>
  );
};
export default HomeBanner;
