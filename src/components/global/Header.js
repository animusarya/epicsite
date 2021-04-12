import React, { useState } from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
import { Link } from 'gatsby';
import { theme } from '../../utils/theme';

import { Button } from '../elements';

const Section = styled.section`
  padding: 1rem 1.5rem;
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
  .navbar-item img {
    max-height: 4rem !important;
  }
  .navbar-menu {
    @media screen and (max-width: 600px) {
      width: 100%;
      transition: 0.6s;
    }
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
    <Section className="section">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
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
              className="navbar-item has-text-weight-medium has-text-white px-5"
            >
              Who we are
            </Link>
            <Link
              to="/about"
              className="navbar-item has-text-weight-medium  has-text-white px-5"
            >
              What we do
            </Link>
            <Link
              to="/service"
              className="navbar-item has-text-weight-medium has-text-white px-5"
            >
              How we help
            </Link>
            <Link
              to="/service"
              className="navbar-item has-text-weight-medium has-text-white px-5"
            >
              Who we Work with
            </Link>
            <Link
              to="/service"
              className="navbar-item has-text-weight-medium has-text-white px-5"
            >
              support
            </Link>
            <Link
              to="/service"
              className="navbar-item has-text-weight-medium has-text-white px-5"
            >
              News
            </Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item has-text-weight-medium has-text-white">
              <Button
                to="/contact"
                type="button"
                hasHoverBackgroundColor={(props) => props.theme.lightShades}
                hasDefaultBackgroundColor={(props) => props.theme.darkAccent}
                hasHoverBackground={(props) => props.theme.lightShades}
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </Section>
  );
};

export default Header;
