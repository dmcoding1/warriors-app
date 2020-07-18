import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
  
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
