import React from 'react';
import styled from 'styled-components';
import { Subtitle } from '../elements';

const Container = styled.footer`
  background-color: ${(props) => props.theme.textColor};
  li {
    margin-bottom: 1rem;
    color:${(props) => props.theme.textColorLite}; !important;
    font-size:${(props) => props.theme.fontSizeMedium};
  }
  a:hover{
      color:${(props) => props.theme.textColorLite}; !important;
    }
`;

const LogoImg = styled.img`
  max-height: 5rem;
`;

const information = [
  { id: 1, name: ' Lorem ipsum', url: '' },
  {
    id: 2,
    name: ' Lorem ipsum',
    url: '',
  },
  { id: 3, name: ' Lorem ipsum', url: '' },
  { id: 4, name: ' Lorem ipsum', url: '' },
];
const Footer = () => {
  return (
    <>
      <Container className="section">
        <div className="container">
          <div className="columns">
            <div className="column has-text-centered ">
              <LogoImg
                src="/images/logo.png"
                alt="footer-logo"
                className="mb-5"
              />
              <Subtitle small hasWhite>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
                amet lorem in gravida porta odio. Nunc malesuada metus pretium
                faucibus.
              </Subtitle>
              <Subtitle small hasWhite>
                ©Turner House Education 2021. All rights reserved
              </Subtitle>
            </div>
            <div className="column has-text-centered">
              <div>
                <h1 className="has-text-weight-bold has-text-white is-size-5 mb-4">
                  Lorem ipsum
                </h1>
                <ul>
                  {information.map((item) => (
                    <li key={item.id}>
                      <a href={item.url}>{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="column has-text-centered">
              <h1 className="has-text-weight-bold has-text-white is-size-5 mb-4">
                Lorem ipsum
              </h1>
              <ul>
                {information.map((item) => (
                  <li key={item.id}>
                    <a href={item.url}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="column has-text-centered">
              <h1 className="has-text-weight-bold has-text-white is-size-5 mb-4">
                Lorem ipsum
              </h1>
              <ul>
                {information.map((item) => (
                  <li key={item.id}>
                    <a href={item.url}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Footer;
