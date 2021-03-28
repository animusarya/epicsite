import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';

import styled from 'styled-components';
import { ScrollAnimation, Subtitle } from '../elements';
import SocialIcons from './SocialIcons';

const query = graphql`
  query LayoutQuery {
    sanitySiteSettings {
      footerDescription
      facebook
      instagram
      twitter
      pinterest
      linkdin
    }
    allSanityPage {
      edges {
        node {
          _id
          title
          slug {
            current
          }
        }
      }
    }
  }
`;

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

const aboutInfo = [
  { id: 1, name: 'Blog', url: '/blog' },
  { id: 2, name: 'Service', url: '/service' },
  { id: 3, name: 'About Us', url: '/about' },
  {
    id: 4,
    name: ' Contact Us',
    url: '/contact',
  },
];

const Footer = () => (
  <StaticQuery
    query={query}
    render={(data) => {
      const footerData = data.sanitySiteSettings;
      const { edges: pageView } = data.allSanityPage;
      return (
        <>
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
                        {footerData.footerDescription}
                      </Subtitle>
                      <Subtitle small hasWhite className="mt-5">
                        ©Turner House Education 2021. All rights reserved
                      </Subtitle>
                    </div>
                    <div className="column ">
                      <div>
                        <h1 className="has-text-weight-bold has-text-white is-size-5 ">
                          Information
                        </h1>
                        <ul>
                          {pageView.map(({ node: page }) => (
                            <li key={page._id}>
                              <Link
                                to={`/page/${
                                  page.slug ? page.slug.current : ''
                                }`}
                              >
                                {page.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="column ">
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
                    <div className="column ">
                      <h1 className="has-text-weight-bold has-text-white is-size-5">
                        Social Icons
                      </h1>
                      <SocialIcons data={footerData} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </>
      );
    }}
  />
);

export default Footer;
