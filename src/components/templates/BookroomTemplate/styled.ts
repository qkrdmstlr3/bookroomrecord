import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { PAGE_BOOKROOM_LOADING_SECOND } from '../../../common/variables';
import { CursorCoordinateType } from '../../../hooks/useCursor';

const guardAnim = keyframes`
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  cursor: none;
`;

export const Cursor = styled.div<CursorCoordinateType>`
  position: absolute;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
  background-color: black;
`;

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
