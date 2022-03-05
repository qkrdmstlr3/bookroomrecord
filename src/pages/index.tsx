import React from 'react';
import GlobalStyle from '../style/GlobalStyle';
import Helmet from '../libs/Helmet';
import IndexTemplate from '../components/templates/IndexTemplate';

function IndexPage() {
  return (
    <>
      <Helmet />
      <GlobalStyle />
      <IndexTemplate />
    </>
  );
}

export default IndexPage;
