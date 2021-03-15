import React from 'react';

import Heading from './elements/Heading';

const Gallery = ({ heading }) => {
  return (
    <section className="section">
      <div className="container">
        {heading && <Heading centered>Gallery</Heading>}
      </div>
    </section>
  );
};
export default Gallery;
