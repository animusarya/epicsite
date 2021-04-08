import React from 'react';
import styled from 'styled-components';

import { Heading, BackgroundBlob } from '../elements';
// import BackgroundBlob from '../BackgroundBlob';
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
        <div className="columns is-centered">
          <div className="column is-7">
            <div className="columns mb-5">
              <div className="column pl-0">
                {contact.email && (
                  <div className="">
                    <a href="/">{contact.email}</a>
                  </div>
                )}
              </div>
              <div className="column pl-0">
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
