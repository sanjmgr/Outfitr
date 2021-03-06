import React from 'react';
import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Text, useTheme } from './Theme';

interface ButtonProps {
  label?: string;
  variant: 'default' | 'primary';
  onPress: () => void;
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    width: 245,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Button = ({ label, variant, onPress }: ButtonProps) => {
  const theme = useTheme();
  const backgroundColor =
    variant === 'primary' ? theme.colors.primary : theme.colors.background2;
  const color =
    variant === 'primary' ? theme.colors.background : theme.colors.secondary;
  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}>
      <Text variant='button' style={{ color }}>
        {label}
      </Text>
    </RectButton>
  );
};

Button.defaultProps = { variant: 'default' };
export default Button;
