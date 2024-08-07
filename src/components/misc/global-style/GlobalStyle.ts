import { createGlobalStyle } from 'styled-components';

import { cssReset } from './cssReset.style';
import { media, Color, Font } from '../../../utils';

export const containerGutter = 28; // px

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

export const GlobalStyle = createGlobalStyle`
  ${cssReset}
  html {
    font-size: 13px;
    min-height: -webkit-fill-available;
  }
  body {
    font-family: ${Font.PRIMARY};
    background-color: ${Color.PRIMARY};
    color: ${Color.SECONDARY};
    min-height: -webkit-fill-available;
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

  .text-container {
    margin: 0 auto;
    max-width: 800px;
  }

  .layout-wrapper {
    ${'' /* this class forces the footer to be on the bottom
            even when there is not enough content to push it down */}
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .page-padding {
    padding: 2.5rem ${containerGutter}px 1rem;
  }

  .stretch {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
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
    text-shadow: ${repeat(`0px 0px 2px ${Color.PRIMARY},`, 15)};
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

  .h-100 {
    height: 100%;
  }

  .m-auto {
    margin: auto;
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
      padding: 3rem ${containerGutter * 2}px 3rem;
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
