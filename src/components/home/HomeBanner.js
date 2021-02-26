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
`;

const HomeBanner = () => {
  return (
    <Section className="hero is-large">
      <div className="hero-body has-text-centered">
        <div className="columns is-centered">
          <div className="column is-6">
            <h1 className="title mb-6 has-text-weight-bold">
              Lorem ipsum dolor amet, consectetur{' '}
            </h1>
            <p className="subtitle has-text-weight-normal is-size-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sit amet,
              consectetur adipiscing elit
            </p>
            <Button isLarge>Consult Today</Button>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default HomeBanner;
