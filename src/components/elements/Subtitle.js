import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
  font-size: ${(props) =>
    props.small ? props.theme.fontSize : props.theme.fontSizeMedium};
  color: ${(props) => props.theme.darkShades};
`;

const Subtitle = ({ children, centered, hasWhite, ...props }) => (
  <div>
    <Text
      className={`line-height-medium is-size-5-mobile has-text-weight-semibold  ${
        centered ? 'has-text-centered' : 'has-text-left'
      } ${hasWhite ? 'has-text-white' : ''}`}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </Text>
  </div>
);

export default Subtitle;
