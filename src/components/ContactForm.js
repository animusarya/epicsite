import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import swal from 'sweetalert2';

// import OverlayButton from './elements/OverlayButton';

const Section = styled.div`
  input,
  textarea {
    margin-top: 1rem;
    border: 1px solid #bdbdbd;
    box-shadow: none;
    border-radius: 4px;
    background-color: ${(props) => props.theme.backgroundInputColor};
  }
  input:active,
  .input:focus,
  .textarea:active,
  .textarea:focus {
    border-color: 1px solid #bdbdbd;
    box-shadow: none;
  }
  input ::placeholder,
  textarea ::placeholder {
    font-size: ${(props) => props.theme.fontSizeSmall}px;
    font-weight: 400;
  }
  label {
    margin-bottom: 0 !important;
  }
  @media screen and (min-width: 769px) {
    .field-body .field {
      margin-bottom: 1.5rem !important;
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
              <label className="label has-text-weight-semibold">Name</label>
              <input
                className="input is-medium"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name && (
                <p className="help is-danger">{errors.name}</p>
              )}
            </div>
            <div className="field">
              <label className="label has-text-weight-semibold">Email</label>
              <input
                className="input is-medium"
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <p className="help is-danger">{errors.email}</p>
              )}
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <label className="label has-text-weight-semibold">
                Lorem ipsum*
              </label>
              <input
                className="input is-medium"
                type="text"
                name="loremIpsum"
                id="loremIpsum"
                placeholder="Lorem ipsum*"
                value={values.loremIpsum}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.loremIpsum && touched.loremIpsum && (
                <p className="help is-danger">{errors.loremIpsum}</p>
              )}
            </div>
            <div className="field">
              <label className="label has-text-weight-semibold">
                Lorem ipsum*
              </label>
              <input
                className="input is-medium"
                type="text"
                name="loremIpsum"
                id="loremIpsum"
                placeholder="Lorem ipsum*"
                value={values.loremIpsum}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.loremIpsum && touched.loremIpsum && (
                <p className="help is-danger">{errors.loremIpsum}</p>
              )}
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label has-text-weight-semibold">Message*</label>
          <textarea
            className="textarea"
            name="message"
            id="message"
            placeholder="Message"
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

        {/* <div className="mt-5">
          <OverlayButton buttonText="Send Message" />
        </div> */}
      </form>
    </Section>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    message: '',
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Name is required!'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
    message: Yup.string().required('Message is required!'),
  }),
  handleSubmit: () => {
    swal('Subscribed successfully, thank you!');
    // addToMailchimp(values.email)
    //   .then(() => {
    //     swal('Subscribed successfully, thank you!');
    //     setSubmitting(false);
    //   })
    //   .catch(() => {
    //     swal('Subscription failed, please try again.', 'error');
    //     setSubmitting(false);
    //   });
  },
  displayName: 'ContactForm', // helps with React DevTools
})(ContactForm);
