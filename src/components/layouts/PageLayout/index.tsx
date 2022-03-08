import React from 'react';
import GlobalStyle from '../../../style/GlobalStyle';
import Helmet from '../../../libs/Helmet';

interface PageLayoutProps {
  children: React.ReactElement;
}

function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <GlobalStyle />
      <Helmet />
      {children}
    </>
  );
}

export default PageLayout;
