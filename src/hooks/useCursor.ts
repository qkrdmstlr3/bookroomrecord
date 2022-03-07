import { useState } from 'react';

export interface CursorCoordinateType {
  x: number;
  y: number;
}

interface UseCursorType {
  cursorCoordinate?: CursorCoordinateType;
  currentClickCoordinate?: CursorCoordinateType;
  handleClickEvent: (event: React.MouseEvent<HTMLDivElement>) => void;
  handleMouseMoveEvent: (event: React.MouseEvent<HTMLDivElement>) => void;
}

function useCursor(): UseCursorType {
  const [cursorCoordinate, setCursorCoordinate] = useState<CursorCoordinateType>();
  const [currentClickCoordinate, setCurrentClickCoordinate] = useState<CursorCoordinateType>();

  const handleMouseMoveEvent = (event: React.MouseEvent<HTMLDivElement>) => {
    setCursorCoordinate({ x: event.clientX, y: event.clientY });
  };

  const handleClickEvent = (event: React.MouseEvent<HTMLDivElement>) => {
    setCurrentClickCoordinate({ x: event.clientX, y: event.clientY });
  };

  return {
    cursorCoordinate,
    currentClickCoordinate,
    handleMouseMoveEvent,
    handleClickEvent,
  };
}

export default useCursor;
