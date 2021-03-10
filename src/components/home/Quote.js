import React from 'react';
import styled from 'styled-components';
import QuoteForm from '../forms/QuoteForm';

const Section = styled.div`
  background-image: url(/images/quote-bg.png);
  background-repeat: no-repeat;
  background-size: cover;
`;

const Quote = () => {
  return (
    <Section>
      <div className="section is-medium">
        <div className="container">
          <QuoteForm onFormSubmit={(v) => console.log(v, 'data')} />
        </div>
      </div>
    </Section>
  );
};
export default Quote;
