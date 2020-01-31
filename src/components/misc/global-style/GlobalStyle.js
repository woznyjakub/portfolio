import { createGlobalStyle } from 'styled-components';
import cssReset from './cssReset';
import media from '../../../utils/media';

export const containerGutter = '18px';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'caslongrad';
    src: url('fonts/CaslonGraD.ttf') format('truetype');
  }
  ${cssReset}
  html {
    font-size: 14px;
  }
  body {
    font-family: 'caslongrad', -apple-system, BlinkMacSystemFont, Roboto, 'Liberation Sans', Ubuntu, 'Open Sans', 'Helvetica Neue', Arial, sans-serif;
  }
  a {
   color: inherit; 
  }

  .container-fluid {
    padding-left: ${containerGutter};
    padding-right: ${containerGutter};
  }

  .container {
    padding-left: ${containerGutter};
    padding-right: ${containerGutter};
    width: 100%;
  }

  .page-padding {
    padding: 4rem 0 1rem;
  }

  .stretch {
    display: flex;
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
      padding: 8rem 0 3rem;
    }
  `}
  ${media.desktopSmall`
    html {
      font-size: 16px;
    }
    .container {
      max-width: 1150px;
      margin: 0 auto;
    }
  `}
`;

export default GlobalStyle;
