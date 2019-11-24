import { createGlobalStyle } from 'styled-components';
import cssReset from './css-reset';
import media from '../../utils/media'

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
  ${media.tablet`
    html {
      font-size: 15px;
    }
  `}
  ${media.desktop`
    html {
      font-size: 16px;
    }
  `}
`;

export default GlobalStyle;
