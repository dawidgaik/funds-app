import styled, { css } from 'styled-components';
import SelectIcon from 'assets/images/select-icon.svg';

const inputsGlobalStyles = css`
  border: 1px solid rgba(0, 0, 0, 0.38);
  border-radius: 8px;
  padding: 12px 10px;
  min-width: 200px;
`;

export const Input = styled('input')`
  ${inputsGlobalStyles}
`;

Input.defaultProps = {
  type: 'text',
  placeholder: 'Type text',
};

export const Select = styled('select')`
  ${inputsGlobalStyles};
  font-family: 'Libre Franklin', sans-serif;
  font-size: 16px;
  background: url(${SelectIcon}) no-repeat calc(100% - 0.75rem) center;
  background-color: ${({ theme }) => theme.colors.white};
  appearance: none;
  padding-right: 2rem;
  cursor: pointer;
`;

export const Label = styled('label')`
  font-size: 14px;
  font-family: 'Libre Franklin', sans-serif;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-transform: uppercase;
  padding-bottom: 10px;
  background-color: transparent;
`;
