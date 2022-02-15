import styled from 'styled-components';

export const CollapseButton = styled('button')`
  border: none;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  padding: 25px;
  width: 100%;
  cursor: pointer;
  font-size: 14px;
  font-family: 'Libre Franklin', sans-serif;
  font-weight: 500;

  &:before {
    content: '+';
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    color: ${({ theme }) => theme.colors.pink};
    border: 1.5px solid ${({ theme }) => theme.colors.pink};
    border-radius: 2px;
    margin-right: 20px;
    padding: 0 0 1px 1px;
    transition: background-color 0.3s;
  }

  &:hover:before {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.pink};
  }

  &[aria-expanded='true'] {
    &:before {
      content: '-';
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.pink};
    }
  }
`;
