import React from 'react';
import GlobalStyle from '../style/GlobalStyle';
import Helmet from '../libs/Helmet';
import BookroomTemplate from '../components/templates/BookroomTemplate';

function bookroom() {
  return (
    <>
      <Helmet />
      <GlobalStyle />
      <BookroomTemplate />
    </>
  );
}

export default bookroom;
