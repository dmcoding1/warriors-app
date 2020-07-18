import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  
  html {
    font-size: 62.5%;
  }

  body {
    width: 100%;
    overflow-x: hidden;
    font-family: 'Montserrat', sans-serif;
  }
`;

export default GlobalStyle;
