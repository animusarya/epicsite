import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Swal from 'sweetalert2';
import Layout from '../components/global/Layout';
import { HeroHeader } from '../components/elements';
import BlogSection from '../components/global/BlogSection';
import ContactSection from '../components/faq/ContactSection';
import VideoSection from '../components/faq/VideoSection';
import Seo from '../components/Seo';
import LogIn from '../components/global/LogIn';
import Register from '../components/global/Register';

export const query = graphql`
  query FaqPageQuery {
    allSanityVideo(sort: { fields: order, order: ASC }) {
      edges {
        node {
          _id
          order
          title
          description
          url
        }
      }
    }
    sanityFaq {
      banner {
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
      blogHeading
      getInTouchDescription
    }
    allSanityArticle(limit: 6, sort: { fields: _createdAt, order: DESC }) {
      edges {
        node {
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
      }
    }
  }
`;

const VideoPage = ({ data }) => {
  const isLoggedIn = useStoreState((state) => state.isLoggedIn.value);

  const updateUser = useStoreActions((actions) => actions.user.update);
  const toggleLoggedIn = useStoreActions((action) => action.isLoggedIn.toggle);
  const [showLogInForm, setShowLogInForm] = useState(false);

  const [
    executeRegisterMutation,
    { data: registerData, error: registerError },
  ] = useMutation(registerMutation);
  const [
    executeLoginMutation,
    { data: loginData, error: loginError },
  ] = useMutation(logInMutation);

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

  const { edges: article } = data.allSanityArticle;
  const { edges: video } = data.allSanityVideo;
  const faq = data.sanityFaq;
  return (
    <Layout>
      <Seo title="Video" />
      <HeroHeader
        bgImage={
          faq &&
          faq.banner.image &&
          faq.banner.image.asset &&
          faq.banner.image.asset.fluid.src
        }
        title={faq.banner.title}
        subtitle={faq.banner.description}
      />
      {isLoggedIn ? (
        <>
          <VideoSection video={video} />
        </>
      ) : (
        <>
          {showLogInForm ? (
            <>
              <LogIn
                onSubmit={(formData) =>
                  executeLoginMutation({ variables: formData })
                }
                handleChangeForm={() => setShowLogInForm(!showLogInForm)}
              />
            </>
          ) : (
            <>
              <Register
                onSubmit={(formData) => {
                  executeRegisterMutation({ variables: { input: formData } });
                }}
                handleChangeForm={() => setShowLogInForm(!showLogInForm)}
              />
            </>
          )}
        </>
      )}
      <BlogSection article={article} heading={faq.blogHeading} />
      <ContactSection faq={faq} />
    </Layout>
  );
};
export default VideoPage;
