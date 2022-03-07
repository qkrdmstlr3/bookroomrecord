import React from 'react';
import * as Icons from './svg';

type IconType = keyof typeof Icons;
interface IconProps {
  icon: IconType;
  color?: string;
}

function Icon({ icon, color = '#000' }: IconProps) {
  const SvgIcon = Icons[icon];

  return <SvgIcon color={color} />;
}

export default Icon;
