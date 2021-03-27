import React from 'react';
import styled from 'styled-components';

import { withFormik } from 'formik';
import * as Yup from 'yup';
import { Heading, InputGroup, Subtitle, Button } from '../elements';

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
      <div className="section is-medium">
        <div className="container">
          <Heading centered title="Create An Account" />
          <Subtitle centered>
            Create an account to enjoy all the services without any ads for
            free!
          </Subtitle>
          <div className="columns is-centered">
            <div className="column is-6">
              <div className="mt-5">
                <form onSubmit={handleSubmit}>
                  <InputGroup
                    name="name"
                    placeholder="Name"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errors={
                      errors.name && touched.name ? errors.name : undefined
                    }
                  />
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
                    name="telephone"
                    placeholder="Telephone"
                    type="number"
                    value={values.telephone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errors={
                      errors.telephone && touched.telephone
                        ? errors.telephone
                        : undefined
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
                  <InputGroup
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    type="password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errors={
                      errors.password && touched.password
                        ? errors.password
                        : undefined
                    }
                  />
                  <div className="has-text-centered">
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
                <p className="has-text-weight-normal has-text-centered mt-4">
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
    name: '',
    telephone: '',
    confirmPassword: '',
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Name is required!'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
    telephone: Yup.string()
      // .matches('Invalid phone number')
      .required('Telephone is required'),
    password: Yup.string().required('Password is required!'),
    confirmPassword: Yup.string()
      .required('This field is required!')
      .label('Confirm password')
      .test('passwords-match', 'Passwords not matched!', function (values) {
        return this.parent.password === values;
      }),
  }),

  handleSubmit: (values, { setSubmitting, props }) => {
    props.onSubmit(values).finally(() => {
      setSubmitting(false);
    });
  },
  displayName: 'Register', // helps with React DevTools
})(Register);
