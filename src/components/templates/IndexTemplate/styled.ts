import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { CursorCoordinateType, PAGE_MOVING_SECOND } from '.';

const circleAnim = keyframes`
  100% {
    transform: scale(150);
  }
`;

export const Container = styled.main`
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 3rem;
  display: flex;
  justify-content: space-between;

  cursor: none;
`;

export const Title = styled.h1`
  margin: 0;

  font-size: 8rem;
  writing-mode: tb-rl;
  letter-spacing: 20px;
  text-orientation: upright;
  font-family: 'Noto Serif KR', serif;
`;

export const Expression = styled.h2`
  margin: 0;
  align-self: flex-end;

  font-size: 3rem;
  writing-mode: tb-rl;
  letter-spacing: 10px;
  text-orientation: upright;
  font-family: 'Noto Serif KR', serif;
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

export const Circle = styled.div<CursorCoordinateType>`
  position: absolute;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;
  width: 3rem;
  height: 3rem;

  border-radius: 1.5rem;
  background-color: black;
  animation: ${circleAnim} ${PAGE_MOVING_SECOND}s linear;
  animation-fill-mode: forwards;
`;
