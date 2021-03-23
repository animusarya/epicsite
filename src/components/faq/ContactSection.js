import React from 'react';
import { Heading, Subtitle } from '../elements';
import ContactForm from '../forms/ContactForm';

const ContactSection = () => {
  return (
    <div className="section is-medium">
      <div className="container">
        <div className="columns is-centered has-text-centered mb-5">
          <div className="column is-8">
            <Heading centered darkText="Get in " colouredText="Touch" />
            <Subtitle centered>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar
              amet, id at volutpat eu elit malesuada at enim. Eros, morbi
              scelerisque proin rhoncus amet. Amet diam placerat luctus metus.
              Sem egestas vitae sed amet.
            </Subtitle>
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
