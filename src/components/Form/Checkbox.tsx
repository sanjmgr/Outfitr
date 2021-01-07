import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';

import { Box, Text } from '../Theme';
import { BorderlessButton } from 'react-native-gesture-handler';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}
const Checkbox = ({ label, onChange, checked }: CheckboxProps) => {
  return (
    <BorderlessButton onPress={() => onChange()}>
      <Box flexDirection='row'>
        <Box
          height={20}
          width={20}
          borderRadius='s'
          justifyContent='center'
          alignItems='center'
          borderColor='primary'
          borderWidth={1}
          marginRight='s'
          backgroundColor={checked ? 'primary' : 'background'}>
          <Icon name='check' color='#FFF'></Icon>
        </Box>
        <Text variant='button'>{label}</Text>
      </Box>
    </BorderlessButton>
  );
};

export default Checkbox;
