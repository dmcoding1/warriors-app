import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};

  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;
  }

  body {
    width: 100%;
    overflow-x: hidden;
    font-family: 'Montserrat', sans-serif;
  }

  #root {
    width: 100%;
  }
`;

export default GlobalStyle;
