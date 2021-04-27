import { createGlobalStyle } from 'styled-components';

import OpenSansRegular from '../assets/fonts/open-sans/open-sans-regular.ttf';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    src: url(${OpenSansRegular}) format("truetype");
    font-weight: 400;
  }

  body {
    background-color: #0177d7;
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    margin: 0;user-select: none
  }
`;

export default GlobalStyles;
