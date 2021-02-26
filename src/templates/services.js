/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import ReactMarkdown from 'react-markdown';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { theme } from '../utils/theme';
// import OverlayButton from '../components/elements/OverlayButton';
import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/global/Layout';
// import HeroHeader from '../components/elements/HeroHeader';

const Section = styled.div`
  .slick-dots li button:before {
    color: ${theme.darkAccent} !important;
    font-size: 15px;
    line-height: 20px;
  }

  margin-top: 3.5rem;
  ul {
    list-style: disc outside;
    margin-left: 2em;
  }
  .slick-slide {
    &:focus,
    a {
      outline: none !important;
    }
  }
  .slick-list {
    outline: none !important;
  }
  .slick-slide div {
    outline: none !important;
  }
  .image.is-1by1 {
    padding-top: 50%;
  }
  h2 {
    line-height: 1.2;
  }
  .slick-dots {
    bottom: 26px;
  }
  .slick-dots li.slick-active button:before {
    color: ${theme.lightAccent} !important;
    font-size: 10px;
  }
  .column.is-three-fifths {
    margin-right: 2px;
  }
`;

export const serviceQuery = graphql`
  query servicePageQuery($slug: String!) {
    sanityServices(slug: { current: { eq: $slug } }) {
      _id
      title
      slug {
        current
      }
      description
      coverImage {
        asset {
          fluid(maxWidth: 1200) {
            ...GatsbySanityImageFluid
          }
        }
      }
      images {
        _key
        asset {
          fluid(maxWidth: 1200) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;

const Services = ({ data }) => {
  const service = data.sanityServices;
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
  };
  return (
    <Layout>
      <Seo
        title={service.title}
        description={`Read ${service.title}`}
        url={`${config.siteUrl}/page/${
          service.slug ? service.slug.current : ''
        }`}
      />
      {/* <HeroHeader
        heading={service.title}
        background={
          service && service.coverImage
            ? service.coverImage.asset.fluid.src
            : '/images/contact.jpg'
        }
        title={`Services / ${service.slug ? service.slug.current : ''}`}
      /> */}
      <Section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-three-fifths">
              <Slider {...settings}>
                {service.images.map((item) => (
                  <Img
                    className="mb-5"
                    fluid={item.asset ? item.asset.fluid : ''}
                    key={item._key}
                    alt="services"
                  />
                ))}
              </Slider>
              <div className="markdown-container">
                <ReactMarkdown source={service.description} />
              </div>
              {/* <div className="mt-5">
                <OverlayButton linkTo="/contact" buttonText="GET A QUOTE" />
              </div> */}
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Services;
