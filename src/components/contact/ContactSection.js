import React from 'react';
import styled from 'styled-components';

import { Heading } from '../elements';
import BackgroundBlob from '../BackgroundBlob';
import GoogleMap from '../map/GoogleMap';
import ContactForm from '../forms/ContactForm';
import Contact from './Contact';

const Section = styled.div`
  li {
    line-height: 1.5;
  }
`;

const ContactSection = ({ contact }) => {
  return (
    <Section className="section is-medium">
      <BackgroundBlob size="90vh" left="-20%" />
      <div className="container">
        <div className="columns is-centered has-text-centered">
          <div className="column is-8">
            <Heading centered title="Get in Touch" />
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
                <ul>
                  {contact.address && (
                    <li className="has-text-black has-text-weight-normal is-size-6 pr-6">
                      {contact.address}
                    </li>
                  )}
                  {contact.email && (
                    <li className="mt-2">
                      {contact.email && (
                        <a
                          href={`mailto:${contact.email}`}
                          className="has-text-black has-text-weight-normal is-size-6"
                        >
                          <i className="far fa-envelope mr-2" />
                          {contact.email}
                        </a>
                      )}
                    </li>
                  )}
                </ul>
              </div>
              <div className="column pl-0">
                <img src="/images/phone01.png" alt="phone-icon" />
                <h1 className="is-size-5 has-text-black has-text-weight-semibold mt-3 mb-2">
                  Phone Number
                </h1>
                <ul>
                  <li>
                    {contact.telephoneOne && (
                      <a
                        className="has-text-black has-text-weight-normal is-size-6 "
                        href={`tel:${contact.telephoneOne}`}
                      >
                        {contact.telephoneOne}
                      </a>
                    )}
                  </li>
                  <li>
                    {contact.telephoneTwo && (
                      <a
                        className="has-text-black has-text-weight-normal is-size-6"
                        href={`tel:${contact.telephoneTwo}`}
                      >
                        {contact.telephoneTwo}
                      </a>
                    )}{' '}
                  </li>
                </ul>
              </div>
            </div>
            <Contact />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
