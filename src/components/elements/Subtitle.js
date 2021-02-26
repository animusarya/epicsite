import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
  font-size: ${(props) =>
    props.Size ? props.theme.fontSize : props.theme.fontSizeMedium};
  color: ${(props) => props.theme.textColor} !important;
`;

const Subtitle = ({ children, centered, ...props }) => (
  <div>
    <Text
      {...props}
      className={` has-text-weight-semibold line-height-medium is-size-5-mobile  ${
        centered ? 'has-text-centered' : ''
      }`}
    >
      {children}
    </Text>
  </div>
);

export default Subtitle;
