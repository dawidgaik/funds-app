import React, { useContext } from 'react';
import { FundsAppContext } from 'providers/FundsAppProvider';
import PerformanceAccordion from 'components/Exclusive/Accordions/PerformanceAccordion/PerformanceAccordion';
import {
  Table,
  TableHeader,
  TableHeaders,
  TableRow,
} from 'components/Generic/Table/Table.styles';

const PerformanceTab = () => {
  const { applicationState } = useContext(FundsAppContext);

  return (
    <Table>
      <TableHeaders>
        <TableRow>
          {['Name', '1M', '3M', '6M', '1Y', '3Y', 'SI', 'As of date'].map(
            (header) => {
              return <TableHeader key={header}>{header}</TableHeader>;
            }
          )}
        </TableRow>
      </TableHeaders>
      {applicationState.fundsData.map(([fundName, data]) => (
        <PerformanceAccordion key={fundName} title={fundName} data={data} />
      ))}
    </Table>
  );
};

export default PerformanceTab;
