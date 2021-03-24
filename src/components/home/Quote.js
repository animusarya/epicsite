import React from 'react';
import styled from 'styled-components';
import QuoteForm from '../forms/QuoteForm';

const Section = styled.div`
  background-image: url(${(props) => props.bgImage});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Quote = ({ home }) => {
  return (
    <Section
      bgImage={
        home.quoteBackground.asset ? home.quoteBackground.asset.fluid.src : ''
      }
    >
      <div className="section is-medium">
        <div className="container">
          <QuoteForm home={home} onFormSubmit={(v) => console.log(v, 'data')} />
        </div>
      </div>
    </Section>
  );
};
export default Quote;
