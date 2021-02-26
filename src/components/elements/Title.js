import React from 'react';
import styled from 'styled-components';

const Text = styled.h1`
  color: ${(props) => props.theme.darkAccent} !important;
`;

const Title = ({ children, centered }) => (
  <div>
    <Text
      className={`is-size-4 has-text-weight-medium has-text-black  is-size-5-mobile  ${
        centered ? 'has-text-centered' : ''
      }`}
    >
      {children}
    </Text>
  </div>
);

export default Title;
