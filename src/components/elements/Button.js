import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  button {
    background: ${(props) =>
      props.isTransparent ? 'transparent' : props.theme.darkAccent};
    border: 1.5px solid
      ${(props) =>
        props.borderDark ? props.theme.darkAccent : props.theme.darkAccent};
    color: ${(props) =>
      props.isTransparent
        ? props.theme.backgroundWhite
        : props.theme.backgroundWhite};
    padding-left: ${(props) => (props.isLarge ? '4rem' : '')};
    padding-right: ${(props) => (props.isLarge ? '4rem' : '')};
    /* padding-top: 1.5rem;
    padding-bottom: 1.5rem; */
    :hover,
    :focus {
      color: ${(props) =>
        props.isTransparent
          ? props.theme.textColorLite
          : props.theme.textColor} !important;
      box-shadow: none !important;
    }
  }
`;

const Button = ({ children, ...props }) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ButtonWrapper {...props}>
      <button type="button" className=" animated-link">
        {children}
        <span />
        <span />
        <span />
        <span />
      </button>
    </ButtonWrapper>
  );
};
export default Button;
