import styled from '@emotion/styled';

export const Container = styled.div`
  cursor: none;
  display: flex;
  padding: 3rem;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
`;

export const Title = styled.h1`
  margin: 0;

  font-size: 8rem;
  writing-mode: tb-rl;
  letter-spacing: 20px;
  text-orientation: upright;
  font-family: 'Noto Serif KR', serif;
`;

export const Expression = styled.h2`
  margin: 0;
  align-self: flex-end;

  font-size: 3rem;
  writing-mode: tb-rl;
  letter-spacing: 10px;
  text-orientation: upright;
  font-family: 'Noto Serif KR', serif;
`;
