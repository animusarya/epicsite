import React from 'react';
import Layout from '../components/global/Layout';
import { HeroHeader, Heading, Subtitle } from '../components/elements';
import Blog from '../components/global/Blog';
import ContactForm from '../components/forms/ContactForm';
import Seo from '../components/Seo';

const FAQ = () => {
  return (
    <Layout>
      <Seo title="Faq" />
      <HeroHeader
        title="Lorem ipsum dolor"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <Blog />
      <div className="section is-medium">
        <div className="container">
          <div className="columns is-centered has-text-centered mb-5">
            <div className="column is-8">
              <Heading centered darkText="Get in " colouredText="touch" />
              <Subtitle centered>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pulvinar amet, id at volutpat eu elit malesuada at enim. Eros,
                morbi scelerisque proin rhoncus amet. Amet diam placerat luctus
                metus. Sem egestas vitae sed amet.
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
    </Layout>
  );
};
export default FAQ;
