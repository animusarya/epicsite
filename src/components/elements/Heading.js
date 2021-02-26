import React from 'react';
import styled from 'styled-components';

const Text = styled.h1`
  line-height: 1.2em;
  .dark {
    color: ${(props) => props.theme.darkAccent};
  }
  .coloured {
    color: ${(props) => props.theme.mainBrandColor};
  }
`;

const Line = styled.div`
  height: 3px;
  width: 50px;
  background-color: ${(props) => props.theme.backgroundColor};
  margin: ${(props) => (props.lineAlignLeft ? 0 : '0 auto')};
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

const Heading = ({
  children,
  darkText,
  colouredText,
  centered,
  hasWhite,
  lineAlignLeft,
  hasUnderlineHidden,
  ...props
}) => (
  <div>
    <Text
      className={`is-size-2 has-text-weight-semibold mb-4 is-size-4-mobile  ${
        centered ? 'has-text-centered' : ''
      } ${hasWhite ? 'has-text-white' : ''}`}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {darkText && <span className="dark mr-3">{darkText}</span>}
      {colouredText && <span className="coloured">{colouredText}</span>}
      {children}
    </Text>
    {!hasUnderlineHidden && <Line lineAlignLeft={lineAlignLeft} />}
  </div>
);
export default Heading;
