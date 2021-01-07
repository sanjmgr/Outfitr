import React from 'react';
import { Box, Text } from './Theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import RoundedIconButton from './RoundedIconButton';

interface HeaderProps {
  left: {
    icon: string;
    onPress: () => void;
  };
  right: {
    icon: string;
    onPress: () => void;
  };
  title: string;
  dark: boolean;
}
const Header = ({ left, right, title, dark }: HeaderProps) => {
  const insects = useSafeAreaInsets();
  const color = dark ? 'background' : 'secondary';
  const backgroundColor = dark ? 'secondary' : undefined;
  return (
    <Box
      flexDirection='row'
      style={{ marginTop: insects.top }}
      alignItems='center'
      paddingHorizontal='m'
      justifyContent='space-between'>
      <RoundedIconButton
        name={left.icon}
        size={44}
        onPress={left.onPress}
        iconRatio={0.4}
        {...{ color, backgroundColor }}
      />
      <Text variant='header' {...{ color }}>
        {title.toUpperCase()}
      </Text>
      <RoundedIconButton
        name={right.icon}
        size={44}
        onPress={right.onPress}
        iconRatio={0.4}
        {...{ color, backgroundColor }}
      />
    </Box>
  );
};

Header.defaultProps = {
  dark: false,
};

export default Header;
