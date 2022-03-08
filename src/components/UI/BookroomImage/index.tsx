import React, { useEffect, useState } from 'react';
import { BOOKROOM_IMG_CARD_HEIGHT } from '../../../common/variables';
import * as Style from './styled';

interface BookroomImageProps {
  src: string;
}

function BookroomImage({ src }: BookroomImageProps) {
  const [imgWidth, setImgWidth] = useState(0);

  const onLoadImg = (img: HTMLImageElement) => () => {
    const imgWidth = (BOOKROOM_IMG_CARD_HEIGHT * img.width) / img.height;
    setImgWidth(imgWidth);
  };

  const initImgWidth = () => {
    const img = new Image();
    img.src = src;
    img.onload = onLoadImg(img);
  };

  useEffect(() => {
    initImgWidth();
  }, []);

  return (
    <Style.Container width={imgWidth}>
      <Style.Image src={src} />
    </Style.Container>
  );
}

export default BookroomImage;
