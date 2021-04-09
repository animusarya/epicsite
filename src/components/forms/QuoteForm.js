import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import swal from 'sweetalert2';

import styled from 'styled-components';
import { InputGroup, Button } from '../elements';

const Section = styled.div`
  h1 {
    color: ${(props) => props.theme.textColorDark} !important;
    line-height: 1.5;
    margin-bottom: 2rem !important;
  }
  .columns {
    margin-left: -0.75rem !important;
    margin-right: -0.75rem !important;
  }
  .textarea {
    background: #f9f9f9 !important;
  }
`;

const QuoteForm = ({
  values,
  touched,
  errors,
  handleSubmit,
  handleChange,
  handleBlur,
  home,
}) => {
  return (
    <Section className="columns is-centered">
      <div className="column is-6">
        <div className="box p-6 has-radius-medium">
          <h1 className="is-size-2 has-text-weight-bold is-size-4-mobile">
            {home.homeQuoteHeading}
          </h1>
          <form
            // method="post"
            onSubmit={handleSubmit}
          >
            <InputGroup
              label="Name"
              name="name"
              placeholder="Full Name"
              type="text"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              errors={errors.name && touched.name ? errors.name : undefined}
            />
            <InputGroup
              label="Email"
              name="email"
              placeholder="example@gmail.com"
              type="text"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              errors={errors.email && touched.email ? errors.email : undefined}
            />
            <InputGroup
              label="Telephone*"
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
            {/* <InputGroup
              label="Country"
              name="country"
              placeholder="Country"
              type="text"
              value={values.country}
              onChange={handleChange}
              onBlur={handleBlur}
              errors={
                errors.country && touched.country ? errors.country : undefined
              }
            /> */}

            {/* <div className="dropdown">
              <div className="dropdown-trigger">
                <button
                  type="button"
                  className="button"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu3"
                >
                  <span>Click me</span>
                  <span className="icon is-small">
                    <i className="fas fa-angle-down" aria-hidden="true" />
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu3" role="menu">
                <div className="dropdown-content">
                  <a href="/" className="dropdown-item">
                    Overview
                  </a>
                  <a href="/src" className="dropdown-item">
                    Modifiers
                  </a>
                </div>
              </div>
            </div> */}
            <div className="field">
              <label className="label has-text-weight-semibold">Message*</label>
              <textarea
                className="textarea"
                name="message"
                id="message"
                placeholder="Say it your way"
                rows={6}
                defaultValue=""
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.message && touched.message && (
                <p className="help is-danger">{errors.message}</p>
              )}
            </div>
            <div className="mt-6">
              <Button
                hasHoverBackgroundColor={(props) => props.theme.lightShades}
                hasDefaultBackgroundColor={(props) => props.theme.darkAccent}
                hasHoverBackground={(props) => props.theme.lightShades}
                className="button is-fullwidth is-medium "
                type="submit"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    telephone: '',
    message: '',
    country: '',
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Name is required!'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
    telephone: Yup.string().required('Your telephone is required!'),
    message: Yup.string().required('Message is required!'),
  }),

  handleSubmit: (values, { setSubmitting, resetForm, props }) => {
    // console.log('handle submit', values);
    props.onFormSubmit(values);

    swal.fire({
      icon: 'success',
      title: 'Submit successfully',
      showConfirmButton: false,
      timer: 1500,
    });
    setSubmitting(false);
    resetForm();
  },

  displayName: 'QuoteForm',
})(QuoteForm);
