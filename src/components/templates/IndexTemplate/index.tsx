import React, { useState } from 'react';
import * as Style from './styled';

interface CursorCoordinateType {
  x: number;
  y: number;
}

function IndexTemplate() {
  const [changingPage, setChangingPage] = useState<boolean>(false);
  const [cursorCoordinate, setCursorCoordinate] = useState<CursorCoordinateType>();
  const [currentCoordinate, setCurrentCoordinate] = useState<CursorCoordinateType>();

  const clickEvent = (event: React.MouseEvent<HTMLDivElement>) => {
    if (changingPage) return;

    setChangingPage(true);
    setCurrentCoordinate({ x: event.clientX, y: event.clientY });
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
