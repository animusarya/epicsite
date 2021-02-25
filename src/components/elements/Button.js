import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  button {
    background: ${(props) =>
      props.isTransparent ? 'transparent' : props.theme.backgroundWhite};
    border: 1.5px solid ${(props) => props.theme.backgroundWhite};
    color: ${(props) =>
      props.isTransparent
        ? props.theme.backgroundWhite
        : props.theme.textColor};
    padding-left: ${(props) => (props.isLarge ? '4rem' : '')};
    padding-right: ${(props) => (props.isLarge ? '4rem' : '')};
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    :hover {
      color: ${(props) =>
        props.isTransparent
          ? props.theme.textColorLite
          : props.theme.textColor} !important;
    }
  }
`;

const Button = ({ children, ...props }) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ButtonWrapper {...props}>
      <button
        type="button"
        className="button is-size-5  has-text-weight-medium"
      >
        {children}
      </button>
    </ButtonWrapper>
  );
};
export default Button;