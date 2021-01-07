import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { Theme, Box, Text } from './Theme';

export interface RoundedIconProps {
  name: string;
  size: number;
  backgroundColor: keyof Theme['colors'] | undefined;
  color: keyof Theme['colors'];
  iconRatio: number;
}
const RoundedIcon = ({
  name,
  size,
  backgroundColor,
  color,
  iconRatio,
}: RoundedIconProps) => {
  const iconSize = size * iconRatio;
  return (
    <Box
      height={size}
      width={size}
      style={{ borderRadius: size / 2 }}
      justifyContent='center'
      alignItems='center'
      {...{ backgroundColor }}>
      <Text
        style={{ height: iconSize, width: iconSize }}
        {...{ color }}
        textAlign='center'>
        <Icon {...{ name }} size={iconSize} />
      </Text>
    </Box>
  );
};

RoundedIcon.defaultProps = {
  iconRatio: 0.7,
};

export default RoundedIcon;
