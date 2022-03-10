import styled from '@emotion/styled';
import mq from '../../../style/mq';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
  width: min(40vw, 40vh);
  height: min(40vw, 40vh);
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-family: 'Noto Serif KR', serif;
`;

export const Address = styled.h2`
  font-size: 2.4rem;
  font-family: 'Noto Serif KR', serif;

  ${mq('md')} {
    margin: 0.2rem 0;
    font-size: 1.8rem;
  }
`;

export const Date = styled.span`
  margin: 1rem 0;
  font-size: 1.8rem;
  font-family: 'Noto Serif KR', serif;

  ${mq('md')} {
    font-size: 1.5rem;
    margin: 0.2rem 0;
  }
`;

export const Book = styled.span`
  text-align: center;
  display: inline-block;
  width: 100%;
  word-break: keep-all;
  font-family: 'Noto Serif KR', serif;
  font-size: 1.5rem;

  ${mq('md')} {
    font-size: 1rem;
  }
`;
