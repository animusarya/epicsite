import React from 'react';
import styled from 'styled-components';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import swal from 'sweetalert2';
import { Heading, InputGroup, Button } from './elements';
import BackgroundBlob from './BackgroundBlob';
import config from '../utils/config';

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
    <Section className="section is-medium">
      <BackgroundBlob size="80vh" left="-30%" />
      <div className="container">
        <div className="columns is-centered has-text-centered">
          <div className="column is-8">
            <Heading centered darkText="Get in " colouredText="touch" />
          </div>
        </div>
        <div className="columns is-centered is-vcentered">
          <div className="column is-6">Map </div>
          <div className="column is-6">
            <div className="columns mb-5">
              <div className="column">
                <img src="/images/address.png" alt="address-icon" />
                <h1 className="is-size-5 has-text-black has-text-weight-semibold mt-3 mb-2">
                  Address
                </h1>
                <p className="has-text-black has-text-weight-normal is-size-6 pr-6">
                  {config.address}
                </p>
              </div>
              <div className="column">
                <img src="/images/phone01.png" alt="phone-icon" />
                <h1 className="is-size-5 has-text-black has-text-weight-semibold mt-3 mb-2">
                  Phone Number
                </h1>
                <p className="has-text-black has-text-weight-normal is-size-6 pr-6">
                  {' '}
                  {config.telephoneOne}
                </p>
                <p className="has-text-black has-text-weight-normal is-size-6 pr-6">
                  {' '}
                  {config.telephoneTwo}
                </p>
              </div>
            </div>
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
                      errors={
                        errors.name && touched.name ? errors.name : undefined
                      }
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
                      label="Lorem ipsum"
                      placeholder="Lorem ipsum"
                      name="subject"
                      type="text"
                      value={values.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errors={
                        errors.subject && touched.subject
                          ? errors.subject
                          : undefined
                      }
                    />
                  </div>
                  <div className="field">
                    <InputGroup
                      label="Lorem ipsum"
                      placeholder="Lorem ipsum"
                      name="subject"
                      type="text"
                      value={values.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errors={
                        errors.subject && touched.subject
                          ? errors.subject
                          : undefined
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label has-text-weight-semibold">
                  Message*
                </label>
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
              <div className="has-text-right">
                <Button isLarge>Send</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    subject: '',
    message: '',
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Name is required!'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
    subject: Yup.string().required('Your subject is required!'),
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
