import React from 'react';
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

const Testimonial = () => {
  return (
    <Section className="section is-medium">
      <div className="hero">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered is-variable is-8">
              <div className="column is-8 ">
                <i className="fas fa-quote-left is-size-2" />
                <Subtitle color>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem
                  odio quam nunc nulla non tincidunt. Praesent sed in mi urna
                  sed diam quis. Integer lacinia eget porta eleifend bibendum
                  elit proin. Neque, velit pellentesque egestas arcu. Sed nulla
                  massa, sed et magna pulvinar. Nisl nisl faucibus euismod dis.
                  Viverra velit amet ullamcorper turpis. Lectus tortor vulputate
                  a, scelerisque risus morbi proin arcu leo. Lorem sed
                  scelerisque.
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
      </div>
    </Section>
  );
};
export default Testimonial;
