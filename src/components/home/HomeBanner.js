import React from 'react';
import styled from 'styled-components';
import { Button } from '../elements';

const Section = styled.div`
  background-image: url(${(props) => props.bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  .title {
    font-size: 74px;
  }
  .mb-5 {
    margin-bottom: 40px !important;
  }
`;

const TriangleSection = styled.div`
  clip-path: polygon(0 0, 0 92%, 50% 100%, 100% 92%, 100% 0, 51% 0);
`;

const HomeBanner = ({ home }) => {
  return (
    <TriangleSection>
      <Section
        className="hero is-large"
        bgImage={home.homeHero.image.asset.fluid.src}
      >
        <div className="hero-body has-text-centered">
          <div className="columns is-centered">
            <div className="column is-7">
              <h1 className="title  has-text-weight-bold line-height-large is-size-2-mobile">
                {home.homeHero.title}
              </h1>
            </div>
          </div>
          <div className="columns is-centered">
            <div className="column is-5">
              <p className="subtitle has-text-weight-normal is-size-4 mb-5">
                {home.homeHero.subtitle}
              </p>
              <Button hasBackgroundWhite isLarge to={home.homeHero.linkTo}>
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
