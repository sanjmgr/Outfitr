import React, { useState } from 'react';
import { Box, Button } from '../../components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface FooterProps {
  label: string;
  onPress: () => void;
}

const Footer = ({ label, onPress }: FooterProps) => {
  const insets = useSafeAreaInsets();
  return (
    <Box backgroundColor='secondary' padding='l' borderTopLeftRadius='xl'>
      <Box style={{ paddingBottom: insets.bottom }} alignItems='center'>
        <Button variant='primary' {...{ label, onPress }} />
      </Box>
    </Box>
  );
};

export default Footer;
