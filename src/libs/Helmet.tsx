import React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';

function Helmet() {
  return (
    <ReactHelmet title="책방록">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR&display=swap" rel="stylesheet" />
    </ReactHelmet>
  );
}

export default Helmet;
