import React, { useEffect, useState } from 'react';
import { LENS_CAPTURE_SECOND } from '../../../common/variables';
import { BookroomType } from '../../templates/BookroomTemplate';
import BookroomImage from '../BookroomImage';
import * as Style from './styled';
import LensSVG from './LensSVG/index';

interface LensProps {
  bookroom?: BookroomType;
}

// TODO: bookroom을 children으로 변경하기
function Lens({ bookroom }: LensProps) {
  const [capture, setCapture] = useState(false);

  const timeoutEvent = () => setCapture(false);

  useEffect(() => {
    setCapture(true);
    setTimeout(timeoutEvent, LENS_CAPTURE_SECOND * 1000);
  }, [bookroom?.img]);

  return (
    <Style.Container>
      <Style.LensWrapper>
        <LensSVG anim={false} />
      </Style.LensWrapper>
      {bookroom && (
        <Style.ContentWrapper>
          <Style.Address>{bookroom.address}</Style.Address>
          <BookroomImage src={bookroom.img} />
          <Style.Date>{bookroom.date}</Style.Date>
          <Style.Book>{bookroom.book}</Style.Book>
        </Style.ContentWrapper>
      )}
      {capture && (
        <Style.LensWrapper>
          <LensSVG anim={capture} />
        </Style.LensWrapper>
      )}
    </Style.Container>
  );
}

export default Lens;
