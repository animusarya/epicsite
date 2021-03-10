import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import swal from 'sweetalert2';

import styled from 'styled-components';
import { InputGroup, SelectGroup } from '../elements';

const Section = styled.div`
  h1 {
    color: ${(props) => props.theme.textColorDark} !important;
  }
  .columns {
    margin-left: -0.75rem !important;
    margin-right: -0.75rem !important;
  }
  .button {
    background: ${(props) => props.theme.textColor};
    border-radius: 8px;
    margin: auto 0 !important;
    :hover {
      color: #000 !important;
    }
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
          // method="post"
          onSubmit={handleSubmit}
          className="box p-6 has-radius-medium"
        >
          <h1 className="is-size-2 has-text-weight-bold is-size-4-mobile mb-6 ">
            Get A Free Quote Here
          </h1>
          <InputGroup
            label="Name*"
            name="name"
            placeholder="Full Name"
            type="text"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={errors.name && touched.name ? errors.name : undefined}
          />
          <InputGroup
            label="Email*"
            name="email"
            placeholder="example@gmail.com"
            type="text"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={errors.email && touched.email ? errors.email : undefined}
          />
          <SelectGroup label="Department*" text="Please Select" />
          <SelectGroup label="Time *" text="4:00 Available" />
          <InputGroup
            label="Lorem ipsum"
            placeholder="Lorem ipsum"
            name="subject"
            type="text"
            value={values.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={
              errors.subject && touched.subject ? errors.subject : undefined
            }
          />
          <InputGroup
            label="Lorem ipsum"
            placeholder="Lorem ipsum"
            name="subject"
            type="text"
            value={values.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={
              errors.subject && touched.subject ? errors.subject : undefined
            }
          />

          <button
            type="submit"
            className="button is-fullwidth is-medium has-text-white animated-link"
          >
            Subscribe
            <span />
            <span />
            <span />
            <span />
          </button>
        </form>
      </div>
    </Section>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    subject: '',
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Name is required!'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
    subject: Yup.string().required('Your subject is required!'),
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
