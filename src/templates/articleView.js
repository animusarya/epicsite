import React, { useState } from 'react';
import { graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import Img from 'gatsby-image';
// import { useStoreState, useStoreActions } from 'easy-peasy';
import { HeroHeader, ScrollAnimation } from '../components/elements';
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

// const Image = styled(Img)`
//   .img {
//     max-height: 75% !important;
//     max-width: auto;
//   }
// `;

const ArticleView = ({ data }) => {
  const news = data.sanityArticle;
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
              <div className="column ">
                <div className="mb-5 mt-5">
                  <ScrollAnimation
                    top="0"
                    left="-3%"
                    animation="animate__fadeInUp"
                    image="/images/pink-dot.png"
                  />
                  <Img
                    fluid={
                      news.image && news.image.asset
                        ? news.image.asset.fluid
                        : ''
                    }
                  />
                </div>
              </div>
            </div>
            <div className="markdown-container">
              <ReactMarkdown source={news.description} />
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ArticleView;
