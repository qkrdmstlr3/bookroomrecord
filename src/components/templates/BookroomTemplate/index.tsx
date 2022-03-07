import React, { useEffect, useState } from 'react';
import * as Style from './styled';
import useCursor from '../../../hooks/useCursor';
import { PAGE_BOOKROOM_LOADING_SECOND } from '../../../common/variables';

function BookroomTemplate() {
  const [onGuard, setOnGuard] = useState<boolean>(true);
  const { cursorCoordinate, handleMouseMoveEvent } = useCursor();

  const removeGuard = () => setOnGuard(false);

  useEffect(() => {
    setTimeout(removeGuard, PAGE_BOOKROOM_LOADING_SECOND * 1000);
  }, []);

  return (
    <Style.Container onMouseMove={handleMouseMoveEvent}>
      {cursorCoordinate && <Style.Cursor x={cursorCoordinate.x} y={cursorCoordinate.y} />}
      {onGuard && <Style.Guard />}
      bookroom
    </Style.Container>
  );
}

export default BookroomTemplate;
