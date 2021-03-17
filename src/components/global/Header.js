import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Button } from '../elements';

const Section = styled.div`
  nav {
    background: ${(props) => props.theme.darkAccent};
  }
  .navbar-item {
    font-size: ${(props) => props.theme.fontSizeMedium};
    :focus {
      background-color: transparent !important;
    }
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
    border-radius: 4px;
    color: #fff !important;
  }
  .animated-link {
    border: 1.5px solid #ffffff;
  }
  @media screen and (max-width: 700px) {
    .navbar-menu {
      background: ${(props) => props.theme.mainBrandColor} !important;
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
            <Link
              className="navbar-item is-justify-content-center is-hidden-desktop"
              to="/"
            >
              <img src="/images/logo.png" alt="site logo" />
            </Link>
            <button
              type="button"
              className={
                isActive
                  ? 'is-active navbar-burger  mt-5 mr-3 has-text-white'
                  : 'navbar-burger mt-5 mr-3 has-text-white'
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
                to="/about"
                className="navbar-item has-text-weight-normal  has-text-white px-5"
              >
                Why Turner House?
              </Link>
              <Link
                to="/faq"
                className="navbar-item has-text-weight-normal has-text-white px-5"
              >
                How we can help
              </Link>
            </div>
            <div className="my-navbar-center is-hidden-mobile">
              <Link className="navbar-item is-justify-content-center" to="/">
                <img src="/images/logo.png" alt="site logo" />
              </Link>
            </div>
            <div className="navbar-end">
              <Link
                to="/"
                className="navbar-item has-text-weight-normal has-text-white px-5"
              >
                Stay in the loop
              </Link>
              <div className="navbar-item has-text-weight-normal has-text-white px-5">
                <Button to="/contact">Contact Us</Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Section>
  );
};

export default Header;
