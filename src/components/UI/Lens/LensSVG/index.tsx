import React from 'react';
import * as Style from './styled';

interface LensSVGProps {
  anim: boolean;
}

function LensSVG({ anim }: LensSVGProps) {
  return (
    <Style.SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <defs>
        <mask id="lens-mask" maskUnits="userSpaceOnUse">
          <circle fill="white" r="49" cx="50" cy="50" />
        </mask>
      </defs>
      <Style.Lens id="lens" r="49" cx="50" cy="50" />
      <g mask="url(#lens-mask)">
        <Style.FirstLine anim={anim} id="first-line" d="M -10 45.7 L 52.5 45.7" stroke="black" strokeWidth="1px" />
        <Style.SecondLine anim={anim} id="second-line" d="M 47.7 54.3 L 110 54.3" stroke="black" strokeWidth="1px" />

        <Style.ThirdLine anim={anim} id="third-line" d="M 47.5 45.7 L 10 100" stroke="black" strokeWidth="1px" />
        <Style.FourthLine anim={anim} id="fourth-line" d="M 52.5 54.3 L 87 0" stroke="black" strokeWidth="1px" />

        <Style.FifthLine anim={anim} id="fifth-line" d="M 45 50 L 79.2 100" stroke="black" strokeWidth="1px" />
        <Style.SixthLine anim={anim} id="sixth-line" d="M 55 50 L 23.7 0" stroke="black" strokeWidth="1px" />
      </g>
    </Style.SVG>
  );
}

export default LensSVG;
