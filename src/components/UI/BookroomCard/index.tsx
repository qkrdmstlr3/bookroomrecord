import React, { useEffect, useState } from 'react';
import { LENS_CAPTURE_SECOND } from '../../../common/variables';
import { BookroomType } from '../../templates/BookroomTemplate';
import BookroomImage from '../BookroomImage';
import * as Style from './styled';

interface BookroomCardProps {
  bookroom?: BookroomType;
}

/**
 * LENS_CAPTURE_SECOND / 2의 시간을 줌으로써
 * 바뀐 이미지가 너무 빨리 렌더링되거나 느리게 렌더링되는 문제를 해결
 */
function BookroomCard({ bookroom }: BookroomCardProps) {
  const [lazyBookroom, setLazyBookroom] = useState(bookroom);

  const timeoutEvent = () => {
    setLazyBookroom(bookroom);
  };

  useEffect(() => {
    setTimeout(timeoutEvent, (LENS_CAPTURE_SECOND / 2) * 1000);
  }, [bookroom]);

  return (
    <Style.Container>
      {lazyBookroom ? (
        <>
          <Style.Address>{lazyBookroom.address}</Style.Address>
          <BookroomImage src={lazyBookroom.img} />
          <Style.Date>{lazyBookroom.date}</Style.Date>
          <Style.Book>{lazyBookroom.book}</Style.Book>
        </>
      ) : (
        <Style.Title>책방록</Style.Title>
      )}
    </Style.Container>
  );
}

export default BookroomCard;
