import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import styled from 'styled-components';

export const StyledTabs = styled(Tabs)`
  padding: 50px 0;
`;

export const StyledTabList = styled(TabList)`
  margin: 0;
  padding: 0;
`;
StyledTabList.tabsRole = 'TabList';

export const StyledTab = styled(Tab)`
  display: inline-block;
  border-bottom: 1px solid transparent;
  position: relative;
  text-transform: uppercase;
  padding: 15px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;

  &:not(:last-child) {
    margin-right: 30px;
  }

  &.is-selected {
    border-bottom: 3px solid ${({ theme }) => theme.colors.orange};
  }
`;
StyledTab.tabsRole = 'Tab';

export const StyledTabPanel = styled(TabPanel)`
  display: none;
  overflow-x: auto;

  &.is-selected {
    display: block;
  }
`;
StyledTabPanel.tabsRole = 'TabPanel';
