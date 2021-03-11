import React from 'react';
import styled from 'styled-components';
import { Subtitle } from '../elements';

const Section = styled.div`
  background: ${(props) => props.theme.backgroundInputColorDark};
  h1 {
    font-size: ${(props) => props.theme.fontSizeMedium} !important;
    color: ${(props) => props.theme.mainBrandColor} !important;
  }
  h2 {
    color: ${(props) => props.theme.primaryColor} !important;
  }
`;

const Testimonial = () => {
  return (
    <Section className="hero is-medium ">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered is-variable is-8">
            <div className="column is-8 ">
              <Subtitle color>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem
                odio quam nunc nulla non tincidunt. Praesent sed in mi urna sed
                diam quis. Integer lacinia eget porta eleifend bibendum elit
                proin. Neque, velit pellentesque egestas arcu. Sed nulla massa,
                sed et magna pulvinar. Nisl nisl faucibus euismod dis. Viverra
                velit amet ullamcorper turpis. Lectus tortor vulputate a,
                scelerisque risus morbi proin arcu leo. Lorem sed scelerisque.
              </Subtitle>
              <div className="mt-6">
                <h1 className="title has-text-weight-bold">John Doe</h1>
                <h2 className="subtitle is-size-6">CEO </h2>
              </div>
            </div>
            <div className="column is-3">
              <img src="images/client01.png" alt="client-img" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Testimonial;
