import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

interface LineProps {
  anim: boolean;
}

const firstLineAnim = keyframes`
  0%, 30%, 100% { transform: translate(17.5px, -30.3px); }
  50%, 70% { transform: none; }
`;

const secondLineAnim = keyframes`
  0%, 30%, 100% { transform: translate(-17.8px, 30.3px); }
  50%, 70% { transform: none; }
`;

const thirdLineAnim = keyframes`
  0%, 30%, 100% { transform: translate(-17.5px, -30.3px); }
  50%, 70% { transform: none; }
`;

const fourthLineAnim = keyframes`
  0%, 30%, 100% { transform: translate(17.5px, 30.3px); }
  50%, 70% { transform: none; }
`;

const fifthLineAnim = keyframes`
  0%, 30%, 100% { transform: translate(-39px, 0); }
  50%, 70% { transform: none; }
`;

const sixthLineAnim = keyframes`
  0%, 30%, 100% { transform: translate(37px, 0); }
  50%, 70% { transform: none; }
`;

export const SVG = styled.svg`
  width: 100%;
  height: 100%;
`;

export const Lens = styled.circle`
  fill: white;
  stroke: black;
  stroke-width: 1px;
`;

export const FirstLine = styled.path<LineProps>`
  transform: translate(17.5px, -30.3px);
  animation: ${(prosp) =>
    prosp.anim
      ? css`
          ${firstLineAnim} 2s linear infinite;
        `
      : 'none'};
`;

export const SecondLine = styled.path<LineProps>`
  transform: translate(-17.8px, 30.3px);
  animation: ${(prosp) =>
    prosp.anim
      ? css`
          ${secondLineAnim} 2s linear infinite;
        `
      : 'none'};
`;

export const ThirdLine = styled.path<LineProps>`
  transform: translate(-17.5px, -30.3px);
  animation: ${(prosp) =>
    prosp.anim
      ? css`
          ${thirdLineAnim} 2s linear infinite;
        `
      : 'none'};
`;

export const FourthLine = styled.path<LineProps>`
  transform: translate(17.5px, 30.3px);
  animation: ${(prosp) =>
    prosp.anim
      ? css`
          ${fourthLineAnim} 2s linear infinite;
        `
      : 'none'};
`;

export const FifthLine = styled.path<LineProps>`
  transform: translate(-39px, 0);
  animation: ${(prosp) =>
    prosp.anim
      ? css`
          ${fifthLineAnim} 2s linear infinite;
        `
      : 'none'};
`;

export const SixthLine = styled.path<LineProps>`
  transform: translate(37px, 0);
  animation: ${(prosp) =>
    prosp.anim
      ? css`
          ${sixthLineAnim} 2s linear infinite;
        `
      : 'none'};
`;
