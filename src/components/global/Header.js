import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Button from '../elements/Button';

const Section = styled.div`
  nav {
    background: ${(props) => props.theme.darkAccent};
  }
  .navbar-item {
    font-size: ${(props) => props.theme.fontSizeMedium};
  }
  .navbar-start,
  .navbar-end,
  .my-navbar-center {
    flex: 1;
  }
  a.navbar-item:hover {
    background-color: transparent;
  }
  .navbar-item img {
    max-height: 5.75rem !important;
  }
  .navbar-menu {
    margin-right: -1.5rem !important;
    @media screen and (max-width: 600px) {
      position: absolute;
      width: 100%;
      transition: 0.6s;
    }
  }
  .navbar-burger {
    background: ${(props) => props.theme.mainBrandColor};
    color: ${(props) => props.theme.darkAccent};
    opacity: 0.5;
    border-radius: 4px;
  }

  @media screen and (max-width: 700px) {
    .navbar-menu {
      background: ${(props) => props.theme.borderColor} !important;
    }
  }
`;

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Section>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <button
              type="button"
              className={
                isActive
                  ? 'is-active navbar-burger  mt-5'
                  : 'navbar-burger  mt-5'
              }
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
              onClick={() => setIsActive(!isActive)}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>
          <div
            className={
              isActive
                ? 'navbar-menu my-navbar-menu is-active'
                : 'navbar-menu my-navbar-menu'
            }
          >
            <div className="navbar-start">
              {' '}
              <Link
                to="/"
                className="navbar-item has-text-weight-normal has-text-white px-5"
              >
                Home
              </Link>
              <Link
                to="/"
                className="navbar-item has-text-weight-normal  has-text-white px-5"
              >
                Why Turner House?
              </Link>
              <Link
                to="/"
                className="navbar-item has-text-weight-normal has-text-white px-5"
              >
                How we can help
              </Link>
            </div>
            <div className="my-navbar-center">
              <Link className="navbar-item is-justify-content-center" to="/">
                <img src="/images/logo.png" alt="site logo" />
              </Link>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <Link
                  to="/"
                  className="navbar-item has-text-weight-normal has-text-white px-5"
                >
                  Stay in the loop
                </Link>
                <div className="navbar-item has-text-weight-normal has-text-white px-5">
                  <Button isTransparent>Contact Us</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Section>
  );
};

export default Header;
