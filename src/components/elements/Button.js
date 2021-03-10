import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  /* button {
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
     padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    :hover,
    :focus {
      color: ${(props) =>
    props.isTransparent
      ? props.theme.textColorLite
      : props.theme.textColor} !important;
      box-shadow: none !important;
    } */
`;

const LinkWrapper = styled(Link)`
  display: inline-block !important;
  background: ${(props) =>
    props.hasBackgroundWhite
      ? props.theme.lightShades
      : props.theme.darkAccent};
  color: ${(props) =>
    props.hasBackgroundWhite
      ? props.theme.darkAccent
      : props.theme.backgroundWhite};
  padding-left: ${(props) => (props.isLarge ? '4rem' : '')};
  padding-right: ${(props) => (props.isLarge ? '4rem' : '')};
  /* padding-top: 1.5rem;
  padding-bottom: 1.5rem; */
  span {
    background-color: ${(props) =>
      props.hasBackgroundWhite
        ? props.theme.darkAccent
        : props.theme.lightShades};
  }

  :hover {
    border-color: ${(props) =>
      props.hasBackgroundWhite
        ? props.theme.darkAccent
        : props.theme.backgroundWhite} !important;
    color: ${(props) =>
      props.hasBackgroundWhite
        ? props.theme.backgroundWhite
        : props.theme.darkAccent};
  }
`;

const Button = ({ children, hasButton, hasBackgroundWhite, isLarge, to }) => {
  if (hasButton) {
    return (
      <ButtonWrapper>
        <button type="button" className=" animated-link">
          {children}
          <span />
          <span />
          <span />
          <span />
        </button>
      </ButtonWrapper>
    );
  }

  if (!hasButton) {
    return (
      <LinkWrapper
        to={to}
        hasBackgroundWhite={hasBackgroundWhite}
        isLarge={isLarge}
        className=" animated-link"
      >
        {children}
        <span />
        <span />
        <span />
        <span />
      </LinkWrapper>
    );
  }
};
export default Button;
