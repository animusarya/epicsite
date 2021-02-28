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
      <div className="section">
        <div className="container">
          <QuoteForm />
        </div>
      </div>
    </Section>
  );
};
export default Quote;
