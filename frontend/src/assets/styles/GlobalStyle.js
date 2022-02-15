import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
  }
  
  body {
    font-family: 'Libre Franklin', sans-serif;
    font-weight: 400;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  a, button {
    font-family: 'Libre Franklin', sans-serif;
  }
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.container.default};
  margin: 0 15px;

  @media only screen and (min-width: 1140px) {
    & {
      margin: 0 auto;
    }
  }
`;
