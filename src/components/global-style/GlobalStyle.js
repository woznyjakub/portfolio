import { createGlobalStyle } from 'styled-components';
import cssReset from './css-reset';
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'caslongrad';
    src: url('fonts/CaslonGraD.ttf') format('truetype');
  }
  ${cssReset}
  body {
    font-family: 'caslongrad', -apple-system, BlinkMacSystemFont, Roboto, 'Liberation Sans', Ubuntu, 'Open Sans', 'Helvetica Neue', Arial, sans-serif;
  }
  a {
   color: inherit; 
  }
`;

export default GlobalStyle;
