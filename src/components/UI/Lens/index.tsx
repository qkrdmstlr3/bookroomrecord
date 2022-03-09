import React, { useEffect, useState } from 'react';
import { LENS_CAPTURE_SECOND } from '../../../common/variables';
import BookroomImage from '../BookroomImage';
import * as Style from './styled';

interface LensProps {
  src: string;
}

function Lens({ src }: LensProps) {
  const [capture, setCapture] = useState(false);

  const timeoutEvent = () => setCapture(false);

  useEffect(() => {
    setCapture(true);
    setTimeout(timeoutEvent, LENS_CAPTURE_SECOND * 1000);
  }, [src]);

  return (
    <Style.Container>
      <Style.ImgWrapper>
        <BookroomImage src={src} />
      </Style.ImgWrapper>
      {capture ? <Style.LensAnim src="/lens-ani.svg" /> : <Style.Lens src="/lens.svg" />}
    </Style.Container>
  );
}

export default Lens;
