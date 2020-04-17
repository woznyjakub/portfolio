import { createGlobalStyle } from 'styled-components';
import cssReset from './cssReset';
import { media, colors } from '../../../utils';

export const containerGutter = 18; // px

const repeat = (string, amount) => {
  const parts = [];
  for (let i = 0; i < amount; i++) {
    parts.push(string);
  }
  let result = parts.join('');
  if (result.endsWith(',')) {
    result = result.slice(0, -1);
  }
  return result;
};

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'caslongrad';
    src: url('fonts/CaslonGraD.ttf') format('truetype');
  }
  ${cssReset}
  html {
    font-size: 13px;
  }
  body {
    font-family: 'caslongrad', -apple-system, BlinkMacSystemFont, Roboto, 'Liberation Sans', Ubuntu, 'Open Sans', 'Helvetica Neue', Arial, sans-serif;
    background-color: ${colors.primary};
    color: ${colors.secondary};
  }
  a {
    color: inherit; 
  }

  .container-fluid {
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
  }

  .container {
    padding-left: ${containerGutter}px;
    padding-right: ${containerGutter}px;
    width: 100%;
  }

  .page-padding {
    padding: 4rem ${containerGutter}px 1rem;
  }

  .stretch {
    display: flex;
    width: 100%;
  }

  .img-fluid {
    max-width: 100%;
    height: auto;
  }

  .img-stretched {
    display: block;
    width: 100%;
    height: auto;
  }

  .saturate-on-hover {
    &-trigger:hover &-item {
      filter: none;
    }
    &-item {
      filter: saturate(0);
      transition: filter .2s;
      will-change: filter;
    }
  }

  .underline {
    text-decoration: none;
    background-image: linear-gradient(to top, currentColor 1px, transparent 2px);
    ${'' /* this prevents the letters from being crossed out by underline */}
    text-shadow: ${repeat(`0px 0px 2px ${colors.primary},`, 15)};
    && {
      line-height: 1;
    }
  }

  .list-unstyled {
    list-style: none;
    padding-left: 0;
  }

  .w-100 {
    width: 100%;
  }

  ${media.phone`
    .container {
      max-width: 500px;
      margin: 0 auto;
    }
  `}
  

  ${media.tablet`
    html {
      font-size: 15px;
    }
    .container {
      max-width: 750px;
      margin: 0 auto;
    }
    .page-padding {
      padding: 8rem ${containerGutter * 2}px 3rem
    }
  `}
  ${media.desktopSmall`
    .container {
      max-width: 1150px;
      margin: 0 auto;
    }
    .page-padding {
      padding-left: ${containerGutter * 3}px;
      padding-right: ${containerGutter * 3}px;
    }
  `}
  ${media.desktopLarge`
    html {
      font-size: 16px;
    }
  `}
`;

export default GlobalStyle;
