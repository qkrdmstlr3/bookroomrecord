import React, { useEffect, useState } from 'react';
import { LENS_CAPTURE_SECOND } from '../../../common/variables';
import * as Style from './styled';
import LensSVG from './LensSVG/index';

interface LensProps {
  children: React.ReactElement;
}

function Lens({ children }: LensProps) {
  const [capture, setCapture] = useState(false);

  const timeoutEvent = () => setCapture(false);

  useEffect(() => {
    setCapture(true);
    setTimeout(timeoutEvent, LENS_CAPTURE_SECOND * 1000);
  }, [children]);

  return (
    <Style.Container>
      <Style.LensWrapper>
        <LensSVG anim={false} />
      </Style.LensWrapper>
      <Style.ContentWrapper>{children}</Style.ContentWrapper>
      {capture && (
        <Style.LensWrapper>
          <LensSVG anim={capture} />
        </Style.LensWrapper>
      )}
    </Style.Container>
  );
}

export default Lens;
