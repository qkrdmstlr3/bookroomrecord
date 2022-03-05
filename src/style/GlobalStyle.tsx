import React from 'react';
import { Global, css } from '@emotion/react';

function GlobalStyle() {
  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          font-family: Roboto;
        }
        html,
        body {
          margin: 0;
          font-size: 62.5%;
        }
        a {
          text-decoration: none;
          color: inherit;
        }
        button {
          outline: none;
          cursor: pointer;
        }
        li {
          list-style: none;
        }
      `}
    />
  );
}

export default GlobalStyle;
