import React from 'react';
import 'react-tabs/style/react-tabs.css';
import {
  StyledTabs,
  StyledTabList,
  StyledTab,
  StyledTabPanel,
} from 'components/Generic/Tab/Tab.styles';
import OverviewTab from 'components/Exclusive/Tabs/OverviewTab/OverviewTab';
import PerformanceTab from 'components/Exclusive/Tabs/PerformanceTab/PerformanceTab';
import { Container } from 'assets/styles/GlobalStyle';

const FundCentre = () => {
  return (
    <Container>
      <StyledTabs
        selectedTabClassName="is-selected"
        selectedTabPanelClassName="is-selected"
        forceRenderTabPanel={true}
      >
        <StyledTabList>
          <StyledTab>Overview</StyledTab>
          <StyledTab>Performance</StyledTab>
        </StyledTabList>
        <StyledTabPanel>
          <OverviewTab />
        </StyledTabPanel>
        <StyledTabPanel>
          <PerformanceTab />
        </StyledTabPanel>
      </StyledTabs>
    </Container>
  );
};

export default FundCentre;
