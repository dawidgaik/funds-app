import React, { useState } from 'react';
import {
  TableBody,
  TableCell,
  TableRow,
} from 'components/Generic/Table/Table.styles';
import { CollapseButton } from 'components/Generic/CollapseButton/CollapseButton.styles';
import { setDateTimeFormat } from 'helpers/setDateTimeFormat';
import PropTypes from 'prop-types';

const OverviewAccordion = ({ title, data }) => {
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
        data.map(({ name, isin, region, type, launchDate }) => (
          <TableRow key={isin}>
            <TableCell>{name}</TableCell>
            <TableCell>{isin}</TableCell>
            <TableCell>{region}</TableCell>
            <TableCell>{type}</TableCell>
            <TableCell>{setDateTimeFormat(launchDate)}</TableCell>
          </TableRow>
        ))}
    </TableBody>
  );
};

OverviewAccordion.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
};

export default OverviewAccordion;
