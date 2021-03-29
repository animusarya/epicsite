import React from 'react';
import styled from 'styled-components';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { Heading, InputGroup, Subtitle, Button } from '../elements';

const LoginCard = styled.div``;

const LogIn = ({
  handleChangeForm,
  values,
  touched,
  errors,
  handleChange,
  handleSubmit,
  handleBlur,
}) => {
  return (
    <LoginCard>
      <div className="section is-medium">
        <div className="container">
          <Heading centered title="Log In" />
          {/* <Subtitle centered>Login into your account</Subtitle> */}
          <div className="columns is-centered">
            <div className="column is-6">
              <div className="mt-5">
                <form onSubmit={handleSubmit}>
                  <InputGroup
                    name="email"
                    placeholder="Email Address"
                    type="text"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errors={
                      errors.email && touched.email ? errors.email : undefined
                    }
                  />
                  <InputGroup
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errors={
                      errors.password && touched.password
                        ? errors.password
                        : undefined
                    }
                  />
                  <div className="has-text-centered mt-6">
                    <Button
                      hasHoverBackgroundColor={(props) =>
                        props.theme.lightShades
                      }
                      hasDefaultBackgroundColor={(props) =>
                        props.theme.darkAccent
                      }
                      hasHoverBackground={(props) => props.theme.lightShades}
                      type="submit"
                      isLarge
                    >
                      {' '}
                      Sign In
                    </Button>
                  </div>
                </form>
                <p className="has-text-weight-normal has-text-centered mt-6">
                  Dont have an Account?
                  <a className="ml-1" onClick={handleChangeForm}>
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LoginCard>
  );
};
export default withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
    password: Yup.string().required('Password is required!'),
  }),

  handleSubmit: (values, { setSubmitting, props }) => {
    props.onSubmit(values).finally(() => {
      setSubmitting(false);
    });
  },
  displayName: 'LoginSignUpForm', // helps with React DevTools
})(LogIn);
