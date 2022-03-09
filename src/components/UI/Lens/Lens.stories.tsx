import React from 'react';
import Lens from '.';

export default {
  title: 'UI/Lens',
  component: Lens,
};

const DUMMY_IMG =
  'https://user-images.githubusercontent.com/26402298/157157398-361cd3ee-6abc-43e0-afda-ee389cf06f39.jpg';

export const lens = () => <Lens src={DUMMY_IMG} />;
