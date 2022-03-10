import React, { useEffect, useState } from 'react';
import * as Style from './styled';
import Icon from '../../UI/Icon';
import Lens from '../../UI/Lens';
import { PAGE_BOOKROOM_LOADING_SECOND } from '../../../common/variables';

export interface BookroomType {
  title: string;
  date: string;
  img: string;
}

interface BookroomTemplateProps {
  bookroomList: BookroomType[];
}

function BookroomTemplate({ bookroomList }: BookroomTemplateProps) {
  const [onGuard, setOnGuard] = useState<boolean>(true);
  const [selectedBookroom, setSelectedBookroom] = useState<BookroomType>();

  const removeGuard = () => setOnGuard(false);

  useEffect(() => {
    setTimeout(removeGuard, PAGE_BOOKROOM_LOADING_SECOND * 1000);
  }, []);

  const selectBookroom = (selectedTitle: string) => () => {
    if (selectedTitle === selectedBookroom?.title) {
      setSelectedBookroom(undefined);
      return;
    }
    const bookroom = bookroomList.find(({ title }) => title === selectedTitle);
    setSelectedBookroom(bookroom);
  };

  return (
    <Style.Container isCursorNone={onGuard}>
      <Style.LensWrapper>
        <Lens bookroom={selectedBookroom} />
      </Style.LensWrapper>
      <Style.BookroomNameList>
        {bookroomList.map(({ title }) => (
          <Style.BookroomNameItem selected={title === selectedBookroom?.title} onClick={selectBookroom(title)}>
            {title}
          </Style.BookroomNameItem>
        ))}
      </Style.BookroomNameList>
      {onGuard && (
        <Style.Guard>
          <Style.IconWrapper>
            <Icon icon="book" color="#fff" />
          </Style.IconWrapper>
        </Style.Guard>
      )}
    </Style.Container>
  );
}

export default BookroomTemplate;
