import React from 'react';
import {
  Box,
  Text,
  Theme,
  RoundedIcon,
  useTheme,
  HomeRoutes,
} from '../../components';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

interface BaseDrawerItem {
  icon: string;
  label: string;
  color: keyof Theme['colors'];
}

interface ScreenDrawerItem extends BaseDrawerItem {
  screen: keyof HomeRoutes;
}

interface OnPressDrawerItem extends BaseDrawerItem {
  onPress: (navigation: ReturnType<typeof useNavigation>) => void;
}

export type DrawerItemProps = ScreenDrawerItem | OnPressDrawerItem;
// export interface DrawerProps {
//   icon: string;
//   label: string;
//   screen: keyof HomeRoutes;
//   color: keyof Theme['colors'];
// }

const DrawerItem = ({ icon, label, color, ...props }: DrawerItemProps) => {
  const theme = useTheme();
  const navigation = useNavigation<
    DrawerNavigationProp<HomeRoutes, 'OutfitIdeas'>
  >();
  return (
    <RectButton
      style={{ borderRadius: theme.borderRadii.xl }}
      onPress={() =>
        'screen' in props
          ? navigation.navigate(props.screen)
          : props.onPress(navigation)
      }>
      <Box flexDirection='row' alignItems='center' padding='s'>
        <RoundedIcon
          backgroundColor={color}
          name={icon}
          color='background'
          size={36}
        />
        <Text variant='button' color='text' marginLeft='m'>
          {label}
        </Text>
      </Box>
    </RectButton>
  );
};

export default DrawerItem;
