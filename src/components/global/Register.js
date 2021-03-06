import React from 'react';
import styled from 'styled-components';

import { withFormik } from 'formik';
import * as Yup from 'yup';
import { Heading, InputGroup, Button } from '../elements';

const LoginCard = styled.div``;

const Register = ({
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
      <div className="section ">
        <div className="container">
          <Heading centered title="Create An Account" />
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
                      Create Account
                    </Button>
                  </div>
                </form>
                <p className="has-text-weight-normal has-text-centered mt-6">
                  Already Have An Account?
                  <a className="ml-1" onClick={handleChangeForm}>
                    Sign In
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
    password: Yup.string()
      .required('Password is required!')
      .min(6, 'Seems a bit short...'),
  }),

  handleSubmit: (values, { setSubmitting, props }) => {
    props.onSubmit(values).finally(() => {
      setSubmitting(false);
    });
  },
  displayName: 'Register', // helps with React DevTools
})(Register);
