import styled from 'styled-components';

export const Paragraph = styled('p')`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: 12px;
  line-height: 1.4;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
