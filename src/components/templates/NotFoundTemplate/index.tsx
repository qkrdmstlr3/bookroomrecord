import React from 'react';
import { Link } from 'gatsby';
import * as Style from './styled';

function NotFoundTemplate() {
  return (
    <Style.Container>
      <Link to="/bookroom">
        <Style.Title>책방록</Style.Title>으로 돌아가기
      </Link>
    </Style.Container>
  );
}

export default NotFoundTemplate;
