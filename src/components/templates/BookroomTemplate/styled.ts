import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import mq from '../../../style/mq';
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

interface ContainerProps {
  isCursorNone: boolean;
}

interface BookroomNameItemProps {
  selected: boolean;
}

export const Container = styled.main<ContainerProps>`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  position: relative;
  cursor: ${(props) => (props.isCursorNone ? 'none' : 'initial')};
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
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: black;
  animation: ${guardAnim} ${PAGE_BOOKROOM_LOADING_SECOND}s linear;
  animation-fill-mode: forwards;
`;

export const IconWrapper = styled.div`
  width: 10rem;

  ${mq('md')} {
    width: 7rem;
  }
`;

export const LensWrapper = styled.div`
  height: 90%;
  background-color: black;
`;

export const BookroomNameList = styled.ul`
  margin: 0;
  padding: 0 2rem;
  height: 10%;
  display: flex;
  align-items: center;
  width: 100%;
  overflow: auto;
`;

export const BookroomNameItem = styled.li<BookroomNameItemProps>`
  margin: 0 1rem;
  margin-bottom: ${(props) => (props.selected ? 2 : 0)}rem;
  font-size: 2.4rem;
  font-family: 'Noto Serif KR', serif;
  flex: 0 0 auto;
  cursor: pointer;

  transition: all 0.5s linear;

  ${mq('md')} {
    font-size: 2rem;
  }
`;
