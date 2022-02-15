import styled from 'styled-components';

export const Loader = styled('div')`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.9);

  &:after {
    content: ' ';
    display: inline-block;
    position: fixed;
    top: 50%;
    left: 46%;
    transform: translateX(-50%);
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid ${({ theme }) => theme.colors.pink};
    border-color: ${({ theme }) => theme.colors.pink} transparent
      ${({ theme }) => theme.colors.pink} transparent;
    animation: rotateRing 1.2s linear infinite;

    @keyframes rotateRing {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
