import React, { forwardRef, Ref } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';

import { Box, useTheme } from '../Theme';
import RoundedIcon from '../RoundedIcon';

interface TextInputProps extends RNTextInputProps {
  icon: string;
  touched?: boolean;
  error?: string;
}

const TextInput = forwardRef(
  (
    { icon, touched, error, ...props }: TextInputProps,
    ref: Ref<RNTextInput>
  ) => {
    const theme = useTheme();
    const SIZE = theme.borderRadii.m * 2;
    const reColor = !touched ? 'text' : !error ? 'primary' : 'danger';
    const color = theme.colors[reColor];

    return (
      <Box
        flexDirection='row'
        height={48}
        borderWidth={1}
        borderRadius='s'
        borderColor={reColor}
        alignItems='center'
        padding='s'>
        <Box padding='s'>
          <Icon name={icon} size={16} {...{ color }} />
        </Box>
        <Box flex={1}>
          <RNTextInput
            underlineColorAndroid='transparent'
            placeholderTextColor={color}
            {...props}
            {...{ ref }}
          />
        </Box>
        {touched && (
          <RoundedIcon
            name={!error ? 'check' : 'x'}
            backgroundColor={!error ? 'primary' : 'danger'}
            size={SIZE}
            color='background'
          />
        )}
      </Box>
    );
  }
);

export default TextInput;
