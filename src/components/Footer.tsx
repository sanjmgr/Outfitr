import React from 'react';
import SocialLogin from './SocialLogin';
import { Box, Text } from './Theme';
import { BorderlessButton } from 'react-native-gesture-handler';

interface FooterProps {
  onPress: () => void;
  label: string;
  action: string;
}
const Footer = ({ action, label, onPress }: FooterProps) => {
  return (
    <>
      <SocialLogin />
      <Box alignItems='center' marginTop='s'>
        <BorderlessButton onPress={onPress}>
          <Text variant='button' color='background'>
            <Text>{`${label} `}</Text>
            <Text color='primary'>{action}</Text>
          </Text>
        </BorderlessButton>
      </Box>
    </>
  );
};

export default Footer;
