import { createGlobalStyle } from 'styled-components';

// Global styles but theme- and update-able!
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
  }

  html, body {
    min-height: 100% !important;
    height: 100%;
  }

  body {
    position: relative;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => `${theme.fontSizes[1]}px`};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }
  
  #root {
    height: 100%;
  }
  
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default GlobalStyle;
