import React from 'react';
import styled from 'styled-components';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import { InputGroup, Button } from '../elements';

const Section = styled.div`
  .cXSUwC .field-body .field {
    margin-bottom: 0 !important;
  }
  textarea {
    color: ${(props) => props.theme.placeholderColor} !important;
    background: ${(props) => props.theme.backgroundInputColor} !important;
    margin-top: 0.6rem;
    border-color: ${(props) => props.theme.borderColor} !important;
    box-shadow: none;
    border-radius: 5px;
  }
  @media screen and (min-width: 769px) {
    .field-body > .field:not(:last-child) {
      margin-right: 2.75rem;
    }
  }
`;

const ContactForm = ({
  values,
  touched,
  errors,
  handleSubmit,
  handleChange,
  handleBlur,
}) => {
  return (
    <Section>
      <form method="post" action="#" onSubmit={handleSubmit}>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
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
            </div>
            <div className="field">
              <InputGroup
                label="Email*"
                name="email"
                placeholder="example@gmail.com"
                type="text"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={
                  errors.email && touched.email ? errors.email : undefined
                }
              />
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <InputGroup
                label="Telephone"
                placeholder="Telephone"
                name="telephone"
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
            </div>
            {/* <div className="field">
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
            </div> */}
          </div>
        </div>
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
        <div className="has-text-right mt-6">
          <Button
            hasHoverBackgroundColor={(props) => props.theme.lightShades}
            hasDefaultBackgroundColor={(props) => props.theme.darkAccent}
            hasHoverBackground={(props) => props.theme.lightShades}
            type="submit"
            isLarge
          >
            Send
          </Button>
        </div>
      </form>
    </Section>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    telephone: '',
    message: '',
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
    props
      .onSubmit({ ...values, telephone: values.telephone.toString() })
      .then(() => {
        setSubmitting(false);
        resetForm();
      })
      .catch(() => {
        setSubmitting(false);
      });
  },
  displayName: 'ContactForm', // helps with React DevTools
})(ContactForm);
