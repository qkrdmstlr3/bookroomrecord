import React from 'react';
import BookroomImage from '.';

export default {
  title: 'UI/BookroomImage',
  component: BookroomImage,
};

const DUMMY_ROW_IMG =
  'https://user-images.githubusercontent.com/26402298/157157398-361cd3ee-6abc-43e0-afda-ee389cf06f39.jpg';
const DUMMY_COL_IMG =
  'https://user-images.githubusercontent.com/26402298/157157404-8325301d-cffd-48f4-a583-66e15a95d8e2.jpg';

export const rowImage = () => <BookroomImage src={DUMMY_ROW_IMG} />;
export const columnImage = () => <BookroomImage src={DUMMY_COL_IMG} />;
