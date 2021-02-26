import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
  font-size: ${(props) => props.theme.fontSizeMedium};
  color: ${(props) => props.theme.darkShades};
`;

const Subtitle = ({ children, centered, hasWhite, ...props }) => (
  <div>
    <Text
      className={`line-height-medium is-size-5-mobile  ${
        centered ? 'has-text-centered' : ''
      } ${hasWhite ? 'has-text-white' : ''}`}
      {...props}
    >
      {children}
    </Text>
  </div>
);

export default Subtitle;
