import styled from '@emotion/styled';
import { BOOKROOM_IMG_CARD_HEIGHT } from '../../../common/variables';

interface ContainerProps {
  width: number;
}

export const Container = styled.div<ContainerProps>`
  width: ${(props) => props.width}px;
  height: ${BOOKROOM_IMG_CARD_HEIGHT}px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
