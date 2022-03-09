import React, { useEffect, useState } from 'react';
import * as Style from './styled';
import Icon from '../../UI/Icon';
import { PAGE_BOOKROOM_LOADING_SECOND } from '../../../common/variables';

function BookroomTemplate() {
  const [onGuard, setOnGuard] = useState<boolean>(true);

  const removeGuard = () => setOnGuard(false);

  useEffect(() => {
    setTimeout(removeGuard, PAGE_BOOKROOM_LOADING_SECOND * 1000);
  }, []);

  return (
    <Style.Container onCursor={!onGuard}>
      {onGuard && (
        <Style.Guard>
          <Style.IconWrapper>
            <Icon icon="book" color="#fff" />
          </Style.IconWrapper>
        </Style.Guard>
      )}
      bookroom
    </Style.Container>
  );
}

export default BookroomTemplate;
