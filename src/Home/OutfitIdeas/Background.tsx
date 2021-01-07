import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Box, useTheme, palette } from '../../components';

const assets = [require('./assets/background.png')];
const Background = () => {
  const theme = useTheme();
  return (
    <View style={StyleSheet.absoluteFillObject}>
      <Box flex={1 / 3} style={{ backgroundColor: palette.lightBlue }}>
        <Box
          flex={1}
          backgroundColor='background'
          borderBottomRightRadius='xl'
        />
      </Box>
      <Box flex={1 / 3}>
        <Box flex={1} backgroundColor='background' />
        <Box flex={1} backgroundColor='secondary' />
        <Image
          source={assets[0]}
          style={{
            ...StyleSheet.absoluteFillObject,
            width: undefined,
            height: undefined,
            borderTopLeftRadius: theme.borderRadii.xl,
            borderBottomRightRadius: theme.borderRadii.xl,
          }}
        />
      </Box>
      <Box flex={1 / 3} style={{ backgroundColor: palette.lightBlue }}>
        <Box flex={1} backgroundColor='secondary' borderTopLeftRadius='xl' />
      </Box>
    </View>
  );
};

export default Background;
