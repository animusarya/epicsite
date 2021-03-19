import React from 'react';
import styled from 'styled-components';

import config from '../../utils/config';

import { Heading } from '../elements';
import BackgroundBlob from '../BackgroundBlob';
import GoogleMap from '../map/GoogleMap';
import ContactForm from '../forms/ContactForm';

const Section = styled.div``;

const ContactSection = () => {
  return (
    <Section className="section is-medium">
      <BackgroundBlob size="90vh" left="-20%" />
      <div className="container">
        <div className="columns is-centered has-text-centered">
          <div className="column is-8">
            <Heading centered darkText="Get in " colouredText="touch" />
          </div>
        </div>
        <div className="columns is-centered is-vcentered is-variable is-6">
          <div className="column is-6">
            <GoogleMap />
          </div>
          <div className="column is-6">
            <div className="columns mb-5">
              <div className="column pl-0">
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
            <ContactForm />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
