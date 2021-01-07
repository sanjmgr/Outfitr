import React from 'react';
import { Box, useTheme, Text, Header } from '../../components';
import { Dimensions, Image } from 'react-native';
import DrawerItem, { DrawerItemProps } from './DrawerItem';
import {
  useNavigation,
  DrawerActions,
  CommonActions,
} from '@react-navigation/native';

const { width } = Dimensions.get('window');
export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = 0.35;
const height = width * aspectRatio;

const items: DrawerItemProps[] = [
  {
    icon: 'zap',
    label: 'Outfit Ideas',
    screen: 'OutfitIdeas',
    color: 'primary',
  },
  {
    icon: 'heart',
    label: 'Favourite Outfits',
    screen: 'FavouriteOutfits',
    color: 'drawer1',
  },
  {
    icon: 'user',
    label: 'Edit Profile',
    screen: 'EditProfile',
    color: 'drawer2',
  },
  {
    icon: 'clock',
    label: 'Transaction History',
    screen: 'TransactionHistory',
    color: 'drawer3',
  },
  {
    icon: 'settings',
    label: 'Notification Settings',
    screen: 'NotificationSettings',
    color: 'drawer4',
  },
  {
    icon: 'log-out',
    label: 'Logout',
    color: 'secondary',
    onPress: navigation =>
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Authentication' }],
        })
      ),
  },
];

export const assets = [require('./assets/drawer.png')];

const Drawer = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  return (
    <Box flex={1}>
      <Box flex={0.2} backgroundColor='background'>
        <Box
          position='absolute'
          top={0}
          right={0}
          bottom={0}
          left={0}
          borderBottomRightRadius='xl'
          backgroundColor='secondary'>
          <Header
            left={{
              icon: 'x',
              onPress: () => navigation.dispatch(DrawerActions.closeDrawer()),
            }}
            right={{ icon: 'shopping-bag', onPress: () => true }}
            title='Menu'
            dark
          />
        </Box>
      </Box>
      <Box flex={0.8}>
        <Box flex={1} backgroundColor='secondary'></Box>
        <Box flex={1} backgroundColor='primary'></Box>
        <Box
          position='absolute'
          top={0}
          right={0}
          bottom={0}
          left={0}
          borderTopLeftRadius='xl'
          borderBottomRightRadius='xl'
          backgroundColor='background'
          justifyContent='center'
          padding='xl'>
          <Box
            position='absolute'
            top={-50}
            left={DRAWER_WIDTH / 2 - 50}
            backgroundColor='primary'
            height={100}
            width={100}
            style={{ borderRadius: 50 }}
            alignSelf='center'></Box>
          <Box marginVertical='l'>
            <Text variant='title1' textAlign='center'>
              Sanjay Magar
            </Text>
            <Text variant='body' textAlign='center'>
              sanjmgr05@gmail.com
            </Text>
          </Box>
          {items.map(item => (
            <DrawerItem key={item.icon} {...item} />
          ))}
        </Box>
      </Box>
      <Box
        backgroundColor='background'
        height={height * 0.61}
        width={DRAWER_WIDTH}
        overflow='hidden'>
        <Image
          source={assets[0]}
          style={{
            height,
            width: DRAWER_WIDTH,
            borderTopLeftRadius: theme.borderRadii.xl,
          }}
        />
      </Box>
    </Box>
  );
};

export default Drawer;
