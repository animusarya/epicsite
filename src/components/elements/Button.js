import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const LinkWrapper = styled(Link)`
  background-color: #f9a620;
  .animated-link {
    --c: goldenrod;
    color: ${(props) =>
      props.hasBackgroundWhite
        ? props.theme.darkAccent
        : props.theme.backgroundWhite};
    font-size: 20px;
    font-weight: 500;
    font-family: ${(props) => props.theme.primaryFontFamily};
    border-radius: 5px;
    padding: 0 1rem;
    height: 3.25rem;
    text-align: center;
    line-height: 3rem;
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: 0.5s;
    /* margin: 1rem; */
    padding-left: ${(props) => (props.isLarge ? '4rem' : '')};
    padding-right: ${(props) => (props.isLarge ? '4rem' : '')};
    background: #f9a620;
    /* padding: 0rem 4rem 0rem 4rem; */
  }
  .animated-link span {
    position: absolute;
    width: 25%;
    height: 100%;
    background-color: ${(props) =>
      props.hasHoverBackground
        ? props.hasHoverBackground
        : props.theme.darkAccent};
    transform: translateY(150%);
    left: calc((var(--n) - 1) * 25%);
    transition: 0.5s;
    transition-delay: calc((var(--n) - 1) * 0.1s);
    z-index: -1;
  }

  .animated-link:hover {
    color: ${(props) =>
      props.hasBackgroundWhite
        ? props.theme.backgroundWhite
        : props.theme.darkAccent};
    background: #f9a620;
    border: none;
  }

  .animated-link:hover span {
    transform: translateY(0) scale(2);
  }

  .animated-link span:nth-child(1) {
    --n: 1;
  }

  .animated-link span:nth-child(2) {
    --n: 2;
  }

  .animated-link span:nth-child(3) {
    --n: 3;
  }

  .animated-link span:nth-child(4) {
    --n: 4;
  }
  .button:focus:not(:active) {
    box-shadow: none;
    color: ${(props) => props.theme.backgroundWhite} !important;
  }
  button {
    cursor: pointer;
  }
`;

const Button = ({
  children,
  to,
  isLarge,
  hasBackgroundWhite,
  hasBorder,
  hasHoverBackground,
  hasDefaultBackgroundColor,
  className,
}) => {
  return (
    <LinkWrapper
      to={to}
      isLarge={isLarge}
      hasBackgroundWhite={hasBackgroundWhite}
      hasBorder={hasBorder}
      hasHoverBackground={hasHoverBackground}
      hasDefaultBackgroundColor={hasDefaultBackgroundColor}
    >
      <button to={to} type="submit" className={`animated-link ${className}`}>
        {children}
        <span />
        <span />
        <span />
        <span />
      </button>
    </LinkWrapper>
  );
};
export default Button;
