import React from 'react';
import Contact from '../contact/Contact';
import { Heading, Subtitle } from '../elements';

const ContactSection = ({ faq }) => {
  return (
    <div className="section is-medium">
      <div className="container">
        <div className="columns is-centered has-text-centered mb-5">
          <div className="column is-8">
            <Heading centered title="Get in Touch" />
            <Subtitle centered>{faq.getInTouchDescription}</Subtitle>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-10">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactSection;
