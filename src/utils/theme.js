import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';
import { lighten } from 'polished';

const mainBrandColor = '#00B5B1';
const lightShades = '#F9A620';
const darkAccent = '#FFFFFF';
const darkShades = '#7D7987';

export const theme = {
  // It can be liberally applied to your layout as its main identity.
  mainBrandColor,
  // Accent colors can be used to bring attention to design elements
  // by contrasting with the rest of the palette.
  lightAccent: '#7A2540',
  // Use this color as the background for your dark-on-light designs,
  // or the text color of an inverted design.
  lightShades,
  // Another accent color to consider. Not all colors have to be used -
  // sometimes a simple color scheme works best.
  darkAccent,
  // Use as the text color for dark-on-light designs,
  // or as the background for inverted designs.
  darkShades,
  dangerColor: '#f44336',

  primaryColor: '#18191F',
  borderColor: '#BDBDBD',
  backgroundColor: ' #4F4F4F;',
  backgroundInputColor: '#F9F9F9',
  backgroundInputColorDark: '#EDC4D1',
  hoverTextColor: '#e6e6e6',
  fontSize: '16px',
  fontSizeSmall: '14px',
  fontSizeMedium: '18px',
  fontSizeLarge: '20px',
  fontSizeExtraLarge: '40px',
  textColor: '#F3FAFE',
  textColorInverse: lightShades,
  backgroundWhite: '#FFFFFF',
  textColorLite: '#445368',
  textColorDark: '#252B42',
  placeholderColor: '#737373',
  menuTintColor: darkAccent,
  primaryFontFamily: 'Roboto',
  secondaryFontFamily: "'Raleway', sans-serif",
  boxShadow: 'rgba(0,0,0,0.08) 0px 7px 18px',
};

const GlobalStyle = createGlobalStyle`
  ${reset};

  body {
    font-family: ${theme.secondaryFontFamily};
    color: ${theme.textColor};
    letter-spacing: 0.7px !important;
    font-size: 17px;
    .columns {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  }

  h1, h2, button {
    font-family: ${theme.secondaryFontFamily};
  }

  p {
    line-height: 1.5rem;
    font-family: ${theme.primaryFontFamily};
    font-style: normal;
    font-weight: normal;
  }

  .title, .box {
    color: ${theme.textColorLite} !important;
  }

  .subtitle {
    color: ${lighten(0.06, theme.textColorLite)} !important;
    line-height: 1.5;
  }

  .has-text-primary{
    color:${theme.mainBrandColor} !important;
  }
  a.has-text-primary:hover,:focus {
      color: ${theme.mainBrandColor}!important;
  }
  .button, .input, .card {
    box-shadow: ${theme.boxShadow};
  }

  .has-text-warning {
    color: ${theme.lightAccent} !important;
  }

  .help.is-danger {
    color:${theme.dangerColor} !important;
  }

  .is-family-primary {
    font-family: ${theme.primaryFontFamily} !important;

  }

  .line-height-medium{
    line-height:30px !important;
  }

  .line-height-large {
    line-height: 70px !important;
    @media screen and (max-width: 768px) {
      line-height:40px !important;
    }
  }

  .has-radius-medium{
  border-radius:20px
  }

  .markdown-container {
    h1 {
      font-size: 40px;
      margin-top: 1.2rem;
      margin-bottom: 1.5rem;
      color: ${theme.darkAccent} !important;
      line-height: 48px;
    }
    strong {
      color: ${theme.darkAccent} !important;
      font-weight:600 !important;
    }
      h4, h5, h6 {
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
      font-size: 1.5rem;
      color: ${theme.darkAccent};
    }
    h2 {
      font-size: 24px;
      margin-top: 1.3rem;
      margin-bottom: 1.3rem;
      color: ${theme.darkAccent};
    }
    h3 {
      margin-top: 1.3rem;
      margin-bottom: 1.3rem;
      color: ${theme.darkAccent};
    }
    p {
      margin-block-start: 0em;
      margin-block-end: 0.7em;
    }
    ol, ul {
      list-style: disc !important;
    }
  }
`;

export default GlobalStyle;
