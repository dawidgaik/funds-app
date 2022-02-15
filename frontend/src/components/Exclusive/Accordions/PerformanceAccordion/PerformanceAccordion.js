import React, { useCallback, useState } from 'react';
import { setDateTimeFormat } from 'helpers/setDateTimeFormat';
import {
  TableBody,
  TableCell,
  TableRow,
} from 'components/Generic/Table/Table.styles';
import { CollapseButton } from 'components/Generic/CollapseButton/CollapseButton.styles';
import PropTypes from 'prop-types';

const PerformanceAccordion = ({ title, data }) => {
  const getPeriodValue = useCallback(
    (dataArray, periodName) => {
      return dataArray.data?.find((e) => e.period === periodName)?.value ?? '-';
    },
    [data]
  );
  const [open, setOpen] = useState(false);
  if (data.length === 0) return false;

  return (
    <TableBody>
      <TableRow>
        <TableCell colSpan="100%">
          <CollapseButton aria-expanded={open} onClick={() => setOpen(!open)}>
            {title}
          </CollapseButton>
        </TableCell>
      </TableRow>
      {open &&
        data.map(({ isin, name, performance }) => (
          <TableRow key={isin}>
            <TableCell>{name}</TableCell>
            {['1M', '3M', '6M', '1Y', '3Y', 'Inf'].map((period) => {
              return (
                <TableCell key={period}>
                  {getPeriodValue(performance, period)}
                </TableCell>
              );
            })}
            <TableCell>{setDateTimeFormat(performance.asOfDate)}</TableCell>
          </TableRow>
        ))}
    </TableBody>
  );
};

PerformanceAccordion.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
};

export default PerformanceAccordion;
