import { createGlobalStyle, css } from 'styled-components';

export const bodyStyles = css`
  html {
    font-family: ${({ theme }) => theme.fonts.primary};
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${bodyStyles}
`;
