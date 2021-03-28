import React, { useState } from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
import { Link } from 'gatsby';
import { theme } from '../../utils/theme';

import { Button } from '../elements';

const Section = styled.div`
  nav {
    background: ${(props) => props.theme.darkAccent};
  }
  .navbar-item {
    font-size: ${(props) => props.theme.fontSizeMedium};
    color: ${(props) => props.theme.textColorLite} !important;
    :focus {
      background-color: transparent !important;
    }
  }
  .navbar-start,
  .navbar-end {
    flex: 1;
  }
  a.navbar-item:hover {
    background-color: transparent;
  }
  a.has-text-white:hover {
    color: ${(props) => props.theme.textColorLite} !important;
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
  .navbar-dropdown {
    background-color: ${(props) => props.theme.darkAccent};
    border-top: 0;
  }
  .navbar-item.has-dropdown:hover .navbar-link {
    background-color: transparent;
  }
  .navbar-burger {
    background: ${(props) => props.theme.mainBrandColor};
    border-radius: 4px;
    color: ${(props) => props.theme.textColorLite} !important;
  }
  @media screen and (max-width: 768px) {
    .navbar-menu {
      background: ${(props) => props.theme.mainBrandColor} !important;
    }
    .navbar-dropdown {
      background: ${(props) => props.theme.mainBrandColor} !important;
    }
  }
  .drop-down {
    :hover {
      background-color: ${lighten(0.1, theme.darkAccent)} !important;
      transition: 0.5s;
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
                to="/service"
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
              <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-item has-text-weight-normal has-text-white px-5 is-clickable">
                  Stay in the loop
                </div>

                <div className="navbar-dropdown">
                  <Link
                    to="/blog"
                    className="navbar-item has-text-weight-normal has-text-white px-5 drop-down"
                  >
                    Blog
                  </Link>
                  <Link
                    to="/faq"
                    className="navbar-item has-text-weight-normal has-text-white px-5 drop-down"
                  >
                    FAQ
                  </Link>
                </div>
              </div>
              <div className="navbar-item has-text-weight-normal has-text-white px-5">
                <Button
                  to="/contact"
                  type="button"
                  hasBorder
                  hasHoverBackground={(props) => props.theme.backgroundWhite}
                  hasDefaultBackgroundColor="transparent"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Section>
  );
};

export default Header;
