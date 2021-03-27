import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import Img from 'gatsby-image';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Swal from 'sweetalert2';

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
      articleViewBanner {
        title
        description
        image {
          asset {
            fluid(maxWidth: 1200) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

const registerMutation = gql`
  mutation register($input: RegisterInput) {
    register(input: $input) {
      jwt
      user {
        email
        fullName
        telephone
      }
    }
  }
`;

const logInMutation = gql`
  mutation login($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      jwt
      user {
        email
        fullName
        telephone
      }
    }
  }
`;

const ArticleView = ({ data }) => {
  const news = data.sanityArticle;
  const isLoggedIn = useStoreState((state) => state.isLoggedIn.value);
  const toggleLoggedIn = useStoreActions((action) => action.isLoggedIn.toggle);

  const [showLogInForm, setShowLogInForm] = useState(false);
  console.log(isLoggedIn);
  const [
    executeRegisterMutation,
    { data: registerData, error: registerError },
  ] = useMutation(registerMutation);
  const [
    executeLoginMutation,
    { data: loginData, error: loginError },
  ] = useMutation(logInMutation);

  const updateUser = useStoreActions((actions) => actions.user.update);

  // fetch project data from api

  if (registerData && registerData.register) {
    const { jwt, user } = registerData.register;
    window.localStorage.setItem('token', jwt);
    toggleLoggedIn(true);
    updateUser(user);
  }
  if (loginData && loginData.login) {
    const { jwt, user } = loginData.login;
    window.localStorage.setItem('token', jwt);
    toggleLoggedIn(true);
    updateUser(user);
  }

  useEffect(() => {
    if (loginError)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: loginError.message,
      });
    if (registerError)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: loginError.message,
      });
  }, [registerError, loginError]);

  return (
    <Layout>
      <Seo
        title={news.title}
        description={`Read blog post about ${news.title}`}
        url={`${config.siteUrl}/article/${news.slug ? news.slug.current : ''}`}
      />

      {isLoggedIn ? (
        <>
          <HeroHeader
            title={news.articleViewBanner.title}
            subtitle={news.articleViewBanner.description}
            bgImage={
              news &&
              news.articleViewBanner.image &&
              news.articleViewBanner.image.asset &&
              news.articleViewBanner.image.asset.fluid.src
            }
          />
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
        </>
      ) : (
        <>
          {showLogInForm ? (
            <LogIn
              onSubmit={(formData) =>
                executeLoginMutation({ variables: formData })
              }
              handleChangeForm={() => setShowLogInForm(!showLogInForm)}
            />
          ) : (
            <Register
              onSubmit={(formData) => {
                executeRegisterMutation({ variables: { input: formData } });
              }}
              handleChangeForm={() => setShowLogInForm(!showLogInForm)}
            />
          )}
        </>
      )}
    </Layout>
  );
};

export default ArticleView;
