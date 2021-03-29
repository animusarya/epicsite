import React from 'react';
import styled from 'styled-components';

import { withFormik } from 'formik';
import * as Yup from 'yup';
import { Heading, InputGroup, Subtitle, Button } from '../elements';

const LoginCard = styled.div``;

const phoneRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);

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
          {/* <Subtitle centered>
            Create an account to enjoy all the services without any ads for
            free!
          </Subtitle> */}
          <div className="columns is-centered">
            <div className="column is-6">
              <div className="mt-5">
                <form onSubmit={handleSubmit}>
                  <InputGroup
                    name="fullName"
                    placeholder="Full Name"
                    type="text"
                    value={values.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errors={
                      errors.fullName && touched.fullName
                        ? errors.fullName
                        : undefined
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
                      errors.confirmPassword && touched.confirmPassword
                        ? errors.confirmPassword
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
    fullName: '',
    telephone: '',
    confirmPassword: '',
  }),
  validationSchema: Yup.object().shape({
    fullName: Yup.string().required('Full Name is required!'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
    telephone: Yup.string()
      .matches(phoneRegex, 'Invalid phone number')
      .required('Telephone is required'),
    password: Yup.string()
      .required('Password is required!')
      .min(6, 'Seems a bit short...'),
    confirmPassword: Yup.string()
      .required('This field is required!')
      .label('Confirm password')
      .test('passwords-match', 'Passwords not matched!', function (values) {
        return this.parent.password === values;
      }),
  }),

  handleSubmit: (values, { setSubmitting, props }) => {
    // eslint-disable-next-line no-param-reassign
    delete values.confirmPassword;
    props
      .onSubmit({
        ...values,
        telephone: values.telephone.toString(),
      })
      .finally(() => {
        setSubmitting(false);
      });
  },
  displayName: 'Register', // helps with React DevTools
})(Register);
