import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import Slider from 'react-slick';
import styled from 'styled-components';

import Img from 'gatsby-image';
import Seo from '../components/Seo';
import Layout from '../components/global/Layout';
import Heading from '../components/elements/Heading';
import config from '../utils/config';

export const pageQuery = graphql`
  query ArticlePage($slug: String!) {
    sanityArticle(slug: { current: { eq: $slug } }) {
      _id
      title
      slug {
        current
      }
      description
      image {
        asset {
          fluid(maxWidth: 1200) {
            ...GatsbySanityImageFluid
          }
        }
      }
      otherImages {
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

const Image = styled(Img)`
  object-fit: cover;
  height: 90vh;
`;

const ArticleView = ({ data }) => {
  const news = data.sanityArticle;
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
        title={news.title}
        description={`Read blog post about ${news.title}`}
        url={`${config.siteUrl}/article/${news.slug ? news.slug.current : ''}`}
      />
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-9">
              <Heading centered>{news.title}</Heading>
              <div className="mb-5 mt-5">
                <Img
                  fluid={
                    news.image && news.image.asset ? news.image.asset.fluid : ''
                  }
                />
              </div>
              <div className="markdown-container">
                <ReactMarkdown source={news.description} />
              </div>
              <Slider {...settings}>
                {news.otherImages.map((item) => (
                  <Image
                    className="mb-5 mt-5"
                    fluid={item && item.asset ? item.asset.fluid : ''}
                    key={item._key}
                    alt={item.title}
                  />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ArticleView;
