import React, { useEffect, useState } from 'react';
import * as Style from './styled';
import { PAGE_BOOKROOM_LOADING_SECOND } from '../../../common/variables';

function BookroomTemplate() {
  const [onGuard, setOnGuard] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setOnGuard(false);
    }, PAGE_BOOKROOM_LOADING_SECOND * 1000);
  }, []);

  return (
    <Style.Container>
      {onGuard && <Style.Guard />}
      bookroom
    </Style.Container>
  );
}

export default BookroomTemplate;
