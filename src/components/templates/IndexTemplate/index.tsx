import React, { useState } from 'react';
import { navigate } from 'gatsby';
import * as Style from './styled';

export interface CursorCoordinateType {
  x: number;
  y: number;
}

export const PAGE_MOVING_SECOND = 3;

function IndexTemplate() {
  const [changingPage, setChangingPage] = useState<boolean>(false);
  const [cursorCoordinate, setCursorCoordinate] = useState<CursorCoordinateType>();
  const [currentCoordinate, setCurrentCoordinate] = useState<CursorCoordinateType>();

  const movePage = () => navigate('/bookroom');

  const clickEvent = (event: React.MouseEvent<HTMLDivElement>) => {
    if (changingPage) return;

    setChangingPage(true);
    setCurrentCoordinate({ x: event.clientX, y: event.clientY });
    setTimeout(movePage, PAGE_MOVING_SECOND * 1000);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    setCursorCoordinate({ x: event.clientX, y: event.clientY });
  };

  return (
    <Style.Container onClick={clickEvent} onMouseMove={handleMouseMove}>
      {cursorCoordinate && <Style.Cursor x={cursorCoordinate.x} y={cursorCoordinate.y} />}
      {currentCoordinate && <Style.Circle x={currentCoordinate.x} y={currentCoordinate.y} />}
      <Style.Title>冊房錄</Style.Title>
      <Style.Expression>전국의 책방을 여행하며</Style.Expression>
    </Style.Container>
  );
}

export default IndexTemplate;
