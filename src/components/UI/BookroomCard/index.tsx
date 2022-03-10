import React from 'react';
import { BookroomType } from '../../templates/BookroomTemplate';
import BookroomImage from '../BookroomImage';
import * as Style from './styled';

interface BookroomCardProps {
  bookroom: BookroomType;
}

function BookroomCard({ bookroom }: BookroomCardProps) {
  return (
    <Style.Container>
      <Style.Address>{bookroom.address}</Style.Address>
      <BookroomImage src={bookroom.img} />
      <Style.Date>{bookroom.date}</Style.Date>
      <Style.Book>{bookroom.book}</Style.Book>
    </Style.Container>
  );
}

export default BookroomCard;
