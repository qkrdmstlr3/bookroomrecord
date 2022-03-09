import React from 'react';
import * as Style from './styled';

interface BookroomImageProps {
  src: string;
}

function BookroomImage({ src }: BookroomImageProps) {
  return (
    <Style.Container>
      <Style.Image src={src} />
    </Style.Container>
  );
}

export default BookroomImage;
