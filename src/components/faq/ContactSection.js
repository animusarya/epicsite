import React from 'react';
import { Heading, Subtitle } from '../elements';
import ContactForm from '../forms/ContactForm';

const ContactSection = ({ faq }) => {
  return (
    <div className="section is-medium">
      <div className="container">
        <div className="columns is-centered has-text-centered mb-5">
          <div className="column is-8">
            <Heading centered darkText="Get in" colouredText="Touch" />
            <Subtitle centered>{faq.getInTouchDescription}</Subtitle>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactSection;
