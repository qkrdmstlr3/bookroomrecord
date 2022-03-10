import React, { useEffect, useState } from 'react';
import { LENS_CAPTURE_SECOND } from '../../../common/variables';
import { BookroomType } from '../../templates/BookroomTemplate';
import BookroomImage from '../BookroomImage';
import * as Style from './styled';

interface LensProps {
  bookroom?: BookroomType;
}

function Lens({ bookroom }: LensProps) {
  const [capture, setCapture] = useState(false);

  const timeoutEvent = () => setCapture(false);

  useEffect(() => {
    setCapture(true);
    setTimeout(timeoutEvent, LENS_CAPTURE_SECOND * 1000);
  }, [bookroom?.img]);

  return (
    <Style.Container>
      {bookroom && (
        <Style.ImgWrapper>
          <BookroomImage src={bookroom.img} />
        </Style.ImgWrapper>
      )}
      {capture ? <Style.LensAnim src="/lens-ani.svg" /> : <Style.Lens src="/lens.svg" />}
    </Style.Container>
  );
}

export default Lens;
