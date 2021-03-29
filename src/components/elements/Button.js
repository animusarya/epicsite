import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const LinkWrapper = styled(Link)`
  .animated-link {
    --c: goldenrod;
    color: ${(props) =>
      props.hasBackgroundWhite
        ? props.theme.darkAccent
        : props.theme.backgroundWhite};
    font-size: 20px;
    font-weight: 500;
    border: ${(props) => (props.hasBorder ? '1.5px solid #ffffff' : '')};
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
    background: ${(props) =>
      props.hasDefaultBackgroundColor
        ? props.hasDefaultBackgroundColor
        : props.theme.lightShades};
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
    border-radius: 50%;
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
    background: transparent;
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
  type,
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
      <button to={to} type={type} className={`animated-link ${className}`}>
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
