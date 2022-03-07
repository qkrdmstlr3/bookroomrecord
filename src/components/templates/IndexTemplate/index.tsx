import React, { useState } from 'react';
import { navigate } from 'gatsby';
import * as Style from './styled';
import useCursor from '../../../hooks/useCursor';
import { PAGE_MOVING_SECOND } from '../../../common/variables';

function IndexTemplate() {
  const [changingPage, setChangingPage] = useState<boolean>(false);
  const { cursorCoordinate, currentClickCoordinate, handleMouseMoveEvent, handleClickEvent } = useCursor();

  const movePage = () => navigate('/bookroom');

  const clickEvent = (event: React.MouseEvent<HTMLDivElement>) => {
    if (changingPage) return;

    setChangingPage(true);
    handleClickEvent(event);
    setTimeout(movePage, PAGE_MOVING_SECOND * 1000);
  };

  return (
    <Style.Container onClick={clickEvent} onMouseMove={handleMouseMoveEvent}>
      {cursorCoordinate && <Style.Cursor x={cursorCoordinate.x} y={cursorCoordinate.y} />}
      {currentClickCoordinate && <Style.Circle x={currentClickCoordinate.x} y={currentClickCoordinate.y} />}
      <Style.Title>冊房錄</Style.Title>
      <Style.Expression>전국의 책방을 여행하며</Style.Expression>
    </Style.Container>
  );
}

export default IndexTemplate;
