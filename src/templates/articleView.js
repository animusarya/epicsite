import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import Slider from 'react-slick';
import styled from 'styled-components';
import Img from 'gatsby-image';
// import { useStoreState, useStoreActions } from 'easy-peasy';
import { HeroHeader } from '../components/elements';
import Seo from '../components/Seo';
import Layout from '../components/global/Layout';
import config from '../utils/config';
import LogIn from '../components/global/LogIn';
import Register from '../components/global/Register';

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
  // const isLoggedIn = useStoreState((state) => state.isLoggedIn.value);
  // const toggleLoggedIn = useStoreActions(
  //   (actions) => actions.isLoggedIn.toggle,
  // );
  // console.log('isLoggedIn', isLoggedIn);
  // const isLoggedIn = useStoreActions((actions) => actions.user.update);
  const [showLogInForm, setShowLogInForm] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleSubmit = () => {
    setLoggedIn(true);
  };
  return (
    <Layout>
      <Seo
        title={news.title}
        description={`Read blog post about ${news.title}`}
        url={`${config.siteUrl}/article/${news.slug ? news.slug.current : ''}`}
      />

      <HeroHeader
        title="Lorem ipsum dolor"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      {!isLoggedIn ? (
        <>
          {showLogInForm ? (
            <LogIn
              onSubmit={handleSubmit}
              handleChangeForm={() => setShowLogInForm(!showLogInForm)}
            />
          ) : (
            <Register
              onSubmit={handleSubmit}
              handleChangeForm={() => setShowLogInForm(!showLogInForm)}
            />
          )}
        </>
      ) : (
        <section className="section">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-9">
                <div className="mb-5 mt-5">
                  <Img
                    fluid={
                      news.image && news.image.asset
                        ? news.image.asset.fluid
                        : ''
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
      )}
    </Layout>
  );
};

export default ArticleView;
