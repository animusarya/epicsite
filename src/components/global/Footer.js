import React from 'react';
import styled from 'styled-components';
import { ScrollAnimation, Subtitle } from '../elements';
import SocialIcons from './SocialIcons';

const Container = styled.footer`
  position: relative;
  background-color: ${(props) => props.theme.textColor};
  padding: 5rem 0rem;
  h1 {
    margin-bottom: 2rem !important;
  }
  li {
    margin-bottom: 1.5rem;
    color: ${(props) => props.theme.textColorLite} !important;
    font-size: ${(props) => props.theme.fontSizeMedium};
  }
  a:hover {
    color: ${(props) => props.theme.textColorLite} !important;
  }
  .column {
    @media screen and (max-width: 768px) {
      text-align: left !important;
    }
  }
`;

const LogoImg = styled.img`
  max-height: 5rem;
`;

const information = [
  { id: 1, name: 'FAQ', url: '/page/faq' },
  {
    id: 2,
    name: ' Term and Condition',
    url: '/page/terms-and-condition',
  },
  { id: 3, name: 'Privacy Policy', url: '/page/privacy-policy' },
  { id: 4, name: 'Return Policy', url: '/page/return-policy' },
];

const aboutInfo = [
  { id: 1, name: 'Service', url: '/service' },
  {
    id: 2,
    name: ' Contact Us',
    url: '/contact',
  },
  { id: 3, name: 'About Us', url: '/about' },
  { id: 4, name: 'Blog', url: '/blog' },
];
const Footer = ({ home }) => {
  return (
    <Container>
      <ScrollAnimation
        zIndex="auto"
        animation="animate__fadeInTopLeft"
        image="/images/Footer-dotted.png"
        bottom={0}
      />
      <div>
        <div className="section">
          <div className="container">
            <ScrollAnimation
              zIndex="auto"
              animation="animate__fadeInTopLeft"
              image="/images/Footer-dotted.png"
              top="-73%"
              left=" 110%"
            />
            <LogoImg
              src="/images/logo.png"
              alt="footer-logo"
              className="mb-5 ml-5"
            />
            <div className="columns  is-variable is-7">
              <div className="column is-4">
                <Subtitle small hasWhite>
                  {home.footerDescription}
                </Subtitle>
                <Subtitle small hasWhite className="mt-5">
                  ©Turner House Education 2021. All rights reserved
                </Subtitle>
              </div>
              <div className="column has-text-centered">
                <div>
                  <h1 className="has-text-weight-bold has-text-white is-size-5 ">
                    Information
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
                <h1 className="has-text-weight-bold has-text-white is-size-5 ">
                  Turner House
                </h1>
                <ul>
                  {aboutInfo.map((item) => (
                    <li key={item.id}>
                      <a href={item.url}>{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="column has-text-centered">
                <h1 className="has-text-weight-bold has-text-white is-size-5">
                  Social Icons
                </h1>
                <SocialIcons data={home} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Footer;
