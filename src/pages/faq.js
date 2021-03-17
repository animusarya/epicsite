import React from 'react';
import Layout from '../components/global/Layout';
import { HeroHeader } from '../components/elements';
import Blog from '../components/global/Blog';
import ContactSection from '../components/faq/ContactSection';
import VideoSection from '../components/faq/VideoSection';
import Seo from '../components/Seo';

const FAQ = () => {
  return (
    <Layout>
      <Seo title="Faq" />
      <HeroHeader
        title="Lorem ipsum dolor"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <VideoSection />
      <Blog />
      <ContactSection />
    </Layout>
  );
};
export default FAQ;
