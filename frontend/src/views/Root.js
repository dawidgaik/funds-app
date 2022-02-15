import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import FundCentre from 'components/Exclusive/FundCentre/FundCentre';
import FundsAppProvider from 'providers/FundsAppProvider';
import Filters from 'components/Exclusive/Filters/Filters';
import HeroBanner from 'components/Exclusive/HeroBanner/HeroBanner';
import Disclaimer from 'components/Exclusive/Disclaimer/Disclaimer';

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HeroBanner />
      <FundsAppProvider>
        <Filters />
        <FundCentre />
      </FundsAppProvider>
      <Disclaimer />
    </ThemeProvider>
  );
}

export default Root;
