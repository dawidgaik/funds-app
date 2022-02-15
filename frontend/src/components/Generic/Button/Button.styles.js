import styled from 'styled-components';

export const Button = styled('button')`
  color: ${({ theme }) => theme.colors.pink};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.pink};
  border-radius: 4px;
  padding: 7px 10px;
  text-transform: uppercase;
  transition: background-color 0.3s, color 0.3s;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.pink};
  }
`;
