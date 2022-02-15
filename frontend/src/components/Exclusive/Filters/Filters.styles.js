import styled from 'styled-components';

export const Wrapper = styled('div')`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding: 80px 0;
`;

export const FiltersWrapper = styled('div')`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media only screen and (max-width: 900px) {
    & {
      flex-direction: column;
    }
  }
`;

export const Filter = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;

  &:not(:last-child) {
    margin-right: 20px;

    @media only screen and (max-width: 900px) {
      & {
        margin-right: 0;
        margin-bottom: 20px;
      }
    }
  }
`;

export const ButtonWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 30px;
`;
