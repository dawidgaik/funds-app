import styled from 'styled-components';

export const Table = styled('table')`
  width: 100%;
  border-collapse: collapse;
`;

export const TableBody = styled('tbody')`
  tr:not(:first-child) {
    background-color: ${({ theme }) => theme.colors.lightGrey};
    transition: background-color 0.3s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.grey};
    }
  }

  tr:first-child {
    td {
      padding: 0;
    }
  }
`;

export const TableHeaders = styled('thead')`
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;

export const TableHeader = styled('th')`
  text-align: left;
  padding: 25px;
  white-space: nowrap;
  font-size: 14px;
  font-family: 'Heebo', sans-serif;
  font-weight: 500;
`;

export const TableRow = styled('tr')`
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey};
`;

export const TableCell = styled('td')`
  padding: 25px;
  white-space: nowrap;
  font-size: 14px;
  font-family: 'Libre Franklin', sans-serif;
  font-weight: 500;

  &:first-child {
    width: 30%;
  }
`;
