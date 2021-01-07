import React, { ReactNode } from 'react';
import { Image, Dimensions, StyleSheet, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Constants from 'expo-constants';

import { Box, useTheme } from './Theme';

interface ContainerProps {
  children: ReactNode;
  footer?: ReactNode;
  pattern: 0 | 1 | 2;
}

export const assets = [
  require('../Authentication/assets/images/Pattern.png'),
  require('../Authentication/assets/images/Pattern.png'),
  require('../Authentication/assets/images/Pattern.png'),
]; // Use different pattern image
const { width, height: wHeight } = Dimensions.get('window');
const aspectRatio = 792 / 1563;
const height = width * aspectRatio;
const Container = ({ children, footer, pattern }: ContainerProps) => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const asset = assets[pattern];
  return (
    <KeyboardAwareScrollView
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}>
      <Box
        height={
          wHeight + (Platform.OS === 'android' ? Constants.statusBarHeight : 0)
        }
        backgroundColor='secondary'>
        <Box backgroundColor='background'>
          <Box
            borderBottomLeftRadius='xl'
            overflow='hidden'
            height={height * 0.61}>
            <Image
              source={asset}
              style={{
                width,
                height,
                borderBottomLeftRadius: theme.borderRadii.xl,
              }}
            />
          </Box>
        </Box>
        <Box flex={1} overflow='hidden'>
          <Image
            source={asset}
            style={{
              ...StyleSheet.absoluteFillObject,
              width,
              height,
              borderBottomLeftRadius: theme.borderRadii.xl,
              top: -height * 0.61,
            }}
          />
          <Box
            flex={1}
            borderRadius='xl'
            backgroundColor='background'
            justifyContent='center'
            padding='l'>
            {children}
          </Box>
        </Box>
        <Box height={150} backgroundColor='secondary' paddingTop='m'>
          {footer}
          <Box height={insets.bottom} />
        </Box>
      </Box>
    </KeyboardAwareScrollView>
  );
};

export default Container;
