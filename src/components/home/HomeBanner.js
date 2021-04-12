import React from 'react';
import styled from 'styled-components';

import { Title, Button, Subtitle } from '../elements';

const Container = styled.div`
  background-color: ${(props) => props.theme.mainBrandColor};

  }
  .image-box {
    position: relative;
  }
  .tracker-bg {
    width: 87%;
  }
  .tracker {
    position: absolute;
    left: 0px;
  }
`;

const HomeBanner = () => (
  <Container className="section is-normal">
    <div className="container">
      <div className="columns is-vcentered">
        <div className="column">
          <Title>Professional training and practical advice</Title>
          <Subtitle small>
            We help those recovering from gambling addiction to positively
            restart their lives. We believe that treatment alone is not enough.
            More help is needed. Our programmes start after treatment, and equip
            recovering gambling addicts with useful and constructive tools to
            support their ongoing recovery and rehabilitation.
          </Subtitle>
          <div className="mt-4">
            <Button
              type="button"
              isLarge
              hasHoverBackgroundColor={(props) => props.theme.lightShades}
              hasDefaultBackgroundColor={(props) => props.theme.darkAccent}
              hasHoverBackground={(props) => props.theme.lightShades}
            >
              Who we are
            </Button>
          </div>
        </div>
        <div className="column">
          <div className="image-box">
            <img
              src="/images/tracker-bg.png"
              className="tracker-bg"
              alt="map"
            />
            <img src="/images/tracker.png" className="tracker" alt="map" />
          </div>
        </div>
      </div>
    </div>
  </Container>
);
export default HomeBanner;
