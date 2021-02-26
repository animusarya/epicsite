import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

// import OverlayButton from './elements/OverlayButton';

const Section = styled.div`
  .columns {
    margin-left: -0.75rem !important;
    margin-right: -0.75rem !important;
  }
  input,
  textarea {
    margin-top: 1rem;
    border-color: #e8edf0;
    box-shadow: none;
    border-radius: 0;
  }
  input:active,
  .input:focus,
  .textarea:active,
  .textarea:focus {
    border-color: ${(props) => props.theme.backgroundInputColor};
    box-shadow: none;
  }
  input ::placeholder,
  textarea ::placeholder {
    color: ${(props) => props.theme.backgroundInputColor};
    font-size: ${(props) => props.theme.fontSizeSmall}px;
    font-weight: 400;
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
    <Section>
      <form method="post" onSubmit={handleSubmit}>
        <div className="columns ">
          <div className="column">
            <input
              className="input is-medium"
              type="text"
              name="name"
              id="name"
              placeholder="Your name*"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name && (
              <p className="help is-danger">{errors.name}</p>
            )}

            <div>
              <input
                className="input is-medium"
                type="number"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Phone number"
                value={values.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.phoneNumber && touched.phoneNumber && (
                <p className="help is-danger">{errors.phoneNumber}</p>
              )}
            </div>
          </div>
          <div className="column">
            <input
              className="input is-medium"
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

            <div>
              <input
                className="input is-medium"
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
        </div>
        <div>
          <textarea
            className="textarea"
            name="message"
            id="message"
            placeholder="Message*"
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
        {/* <div className="send-button mt-5">
          <OverlayButton buttonText="Send" onClick={handleSubmit} />
        </div> */}
      </form>
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
