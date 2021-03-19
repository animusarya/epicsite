import React from 'react';
import styled from 'styled-components';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { InputGroup } from '../elements';

const FormCard = styled.div`
  .button {
    background: ${(props) => props.theme.textColor};
    border-radius: 8px;
    margin: auto 0 !important;
    :hover {
      color: #000 !important;
    }
  }
`;

const LoginSignUpForm = ({
  values,
  touched,
  errors,
  handleChange,
  handleSubmit,
  handleBlur,
}) => {
  return (
    <FormCard>
      <form onSubmit={handleSubmit}>
        <InputGroup
          name="email"
          placeholder="Email Address"
          type="text"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          errors={errors.email && touched.email ? errors.email : undefined}
        />
        <InputGroup
          name="password"
          placeholder="Password"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          errors={
            errors.password && touched.password ? errors.password : undefined
          }
        />
        <div className="has-text-centered">
          <button
            type="submit"
            className="button  is-medium has-text-white animated-link"
          >
            Create Account
            <span />
            <span />
            <span />
            <span />
          </button>
        </div>
      </form>
    </FormCard>
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
})(LoginSignUpForm);
