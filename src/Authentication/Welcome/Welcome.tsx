import React from 'react';
import { Image, Dimensions } from 'react-native';
import { Button, AuthNavigationProps } from '../../components';
import { Box, Text, useTheme } from '../../components';
import { BorderlessButton } from 'react-native-gesture-handler';

const picture = {
  src: require('../assets/images/6.png'),
  width: 3183,
  height: 3574,
};

export const assets = [picture.src];
const { width } = Dimensions.get('window');
const Welcome = ({ navigation }: AuthNavigationProps<'Welcome'>) => {
  const theme = useTheme();
  return (
    <Box flex={1} backgroundColor='background'>
      <Box
        flex={1}
        borderBottomRightRadius='xl'
        backgroundColor='background2'
        justifyContent='flex-end'
        alignItems='center'>
        <Image
          source={picture.src}
          style={{
            width: width - theme.borderRadii.xl,
            height:
              ((width - theme.borderRadii.xl) * picture.height) / picture.width,
          }}
        />
      </Box>
      <Box flex={1} borderTopLeftRadius='xl'>
        <Box
          position='absolute'
          top={0}
          right={0}
          bottom={0}
          left={0}
          backgroundColor='background2'
        />
        <Box
          backgroundColor='background'
          borderTopLeftRadius='xl'
          flex={1}
          justifyContent='space-evenly'
          alignItems='center'
          padding='xl'>
          <Text variant='title2'>Let's get started</Text>
          <Text variant='body' textAlign='center'>
            Login to your accounts below or signup for an amazing experience
          </Text>
          <Button
            variant='primary'
            label='Have an account? Login'
            onPress={() => navigation.navigate('Login')}
          />
          <Button
            variant='default'
            label="Join us, it's free"
            onPress={() => navigation.navigate('SignUp')}
          />
          <BorderlessButton
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text variant='button' color='secondary'>
              Forget password?
            </Text>
          </BorderlessButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
