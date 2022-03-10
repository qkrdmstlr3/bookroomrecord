import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const LensWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
`;
export const ContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Noto Serif KR', serif;
`;

export const Address = styled.h2`
  font-size: 2.4rem;
  font-family: 'Noto Serif KR', serif;
`;

export const Date = styled.span`
  margin: 1rem 0;
  font-size: 1.8rem;
  font-family: 'Noto Serif KR', serif;
`;

export const Book = styled.span`
  font-family: 'Noto Serif KR', serif;
  font-size: 1.5rem;
`;
