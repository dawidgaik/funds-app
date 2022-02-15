import styled from 'styled-components';

export const Wrapper = styled('div')`
  background: linear-gradient(
    260.3deg,
    #c6ffdd 8.1%,
    #fbd786 42.84%,
    #f7797d 73.37%
  );
  padding: 50px 0 100px 0;
  color: ${({ theme }) => theme.colors.white};
`;

export const Heading = styled('h1')`
  margin-top: 120px;
  font-size: 48px;
  font-weight: 600;
`;

export const Paragraph = styled('p')`
  max-width: 445px;
  font-size: 18px;
  line-height: 1.6;
`;
