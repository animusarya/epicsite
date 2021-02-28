import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const Section = styled.div`
  h1 {
    color: ${(props) => props.theme.textColorDark} !important;
  }
  .columns {
    margin-left: -0.75rem !important;
    margin-right: -0.75rem !important;
  }
  input,
  textarea {
    background: ${(props) => props.theme.backgroundInputColor} !important;
    margin-top: 0.6rem;
    border-color: ${(props) => props.theme.borderColor} !important;
    box-shadow: none;
    border-radius: 5px;
  }
  input:active,
  .input:focus,
  .textarea:active,
  .textarea:focus {
    border-color: ${(props) => props.theme.borderColor};
    box-shadow: none;
  }
  input ::placeholder,
  textarea ::placeholder {
    background: ${(props) => props.theme.backgroundInputColor};
    font-size: ${(props) => props.theme.fontSizeSmall};
    font-weight: 400;
  }
  .field {
    margin-bottom: 1.5rem;
  }
  .label {
    font-size: ${(props) => props.theme.fontSizeSmall};
  }
  .button {
    background: ${(props) => props.theme.textColor};
    border-radius: 8px;
  }
`;

const QuoteForm = ({
  values,
  touched,
  errors,
  handleSubmit,
  handleChange,
  handleBlur,
}) => {
  return (
    <Section className="columns is-centered">
      <div className="column is-6">
        <form
          method="post"
          onSubmit={handleSubmit}
          className="box p-6 has-radius-medium"
        >
          <h1 className="is-size-2 has-text-weight-bold is-size-4-mobile mb-6 ">
            Get A Free Quote Here
          </h1>
          <div className="field">
            <label className="label mb-0  has-text-weight-semibold">
              Name*
            </label>
            <div className="control">
              <input
                className="input "
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name && (
                <p className="help is-danger">{errors.name}</p>
              )}
            </div>
          </div>
          <div className="field">
            <label className="label mb-0 has-text-weight-semibold">
              Email*
            </label>
            <div className="control">
              <input
                className="input "
                type="text"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <p className="help is-danger">{errors.email}</p>
              )}
            </div>
          </div>
          <div className="field">
            <label className="label mb-0 has-text-weight-semibold">
              Department *
            </label>
            <div className="control">
              <input
                className="input "
                type="text"
                name="email"
                id="email"
                placeholder="Your email*"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <p className="help is-danger">{errors.email}</p>
              )}
            </div>
          </div>
          <div className="field">
            <label className="label mb-0 has-text-weight-semibold ">
              Time *
            </label>
            <div className="control">
              <input
                className="input "
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
                value={values.subject}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.subject && touched.subject && (
                <p className="help is-danger">{errors.subject}</p>
              )}
            </div>
          </div>
          <div className="field">
            <label className="label mb-0 has-text-weight-semibold">
              Lorem ipsum
            </label>
            <div className="control">
              <input
                className="input "
                type="text"
                name="subject"
                id="subject"
                placeholder="Lorem ipsum"
                value={values.subject}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.subject && touched.subject && (
                <p className="help is-danger">{errors.subject}</p>
              )}
            </div>
          </div>
          <div className="field">
            <label className="label mb-0 has-text-weight-semibold">
              Lorem ipsum
            </label>
            <div className="control">
              <input
                className="input "
                type="text"
                name="subject"
                id="subject"
                placeholder="Lorem ipsum "
                value={values.subject}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.subject && touched.subject && (
                <p className="help is-danger">{errors.subject}</p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="button is-fullwidth is-medium has-text-white"
          >
            Subscribe
          </button>
        </form>
      </div>
    </Section>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Name is required!'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
    phoneNumber: Yup.number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(8)
      .required('A phone number is required'),
    subject: Yup.string().required('Your subject is required!'),
    message: Yup.string().required('Message is required!'),
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    props.onSubmit(values).finally(() => {
      setSubmitting(false);
    });
  },

  displayName: 'QuoteForm', // helps with React DevTools
})(QuoteForm);
