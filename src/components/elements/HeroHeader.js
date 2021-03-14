import React from 'react';
import styled from 'styled-components';
import Heading from './Heading';
import Subtitle from './Subtitle';

const SectionHero = styled.div`
  background-image: url(/images/herobg.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const HeroHeader = ({ title, subtitle }) => {
  return (
    <SectionHero className="hero is-medium">
      <div className="hero-body has-text-centered">
        <div className="columns is-centered mb-0">
          <div className="column is-6">
            <Heading hasWhite>{title}</Heading>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-6">
            <Subtitle centered hasWhite>
              {subtitle}
            </Subtitle>
          </div>
        </div>
      </div>
    </SectionHero>
  );
};
export default HeroHeader;
