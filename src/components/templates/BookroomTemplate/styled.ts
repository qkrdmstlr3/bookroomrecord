import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { PAGE_BOOKROOM_LOADING_SECOND } from '../../../common/variables';

const guardAnim = keyframes`
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const Container = styled.main``;

export const Guard = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background-color: black;
  animation: ${guardAnim} ${PAGE_BOOKROOM_LOADING_SECOND}s linear;
  animation-fill-mode: forwards;
`;
