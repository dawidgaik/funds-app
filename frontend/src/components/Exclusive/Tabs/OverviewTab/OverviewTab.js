import React, { useContext } from 'react';
import OverviewAccordion from 'components/Exclusive/Accordions/OverviewAccordion/OverviewAccordion';
import { FundsAppContext } from 'providers/FundsAppProvider';
import {
  Table,
  TableHeaders,
  TableHeader,
  TableRow,
} from 'components/Generic/Table/Table.styles';

const OverviewTab = () => {
  const { applicationState } = useContext(FundsAppContext);

  return (
    <Table>
      <TableHeaders>
        <TableRow>
          {['Name', 'ISIN', 'Region', 'Type', 'Launch Date'].map((header) => {
            return <TableHeader key={header}>{header}</TableHeader>;
          })}
        </TableRow>
      </TableHeaders>
      {applicationState.fundsData.map(([fundName, data]) => (
        <OverviewAccordion key={fundName} title={fundName} data={data} />
      ))}
    </Table>
  );
};

export default OverviewTab;
