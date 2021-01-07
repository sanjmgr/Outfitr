import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Box, Text } from '../../components';
import BorderlessTap from '../../components/BorderlessTap';

const INNER_RADIUS = 30;
const OUTER_RADIUS = 34;

interface CategoryProps {
  category: {
    id: string;
    title: string;
    color: string;
  };
}

const Category = ({
  category: { title, color: backgroundColor },
}: CategoryProps) => {
  const [selected, setSelected] = useState(false);
  return (
    <BorderlessTap onPress={() => setSelected(prev => !prev)}>
      <Box marginLeft='m' marginTop='s' alignItems='center'>
        <Box
          height={OUTER_RADIUS * 2}
          width={OUTER_RADIUS * 2}
          justifyContent='center'
          alignItems='center'>
          {selected && (
            <View
              style={{
                ...StyleSheet.absoluteFillObject,
                borderWidth: 1,
                borderColor: backgroundColor,
                borderRadius: OUTER_RADIUS,
              }}
            />
          )}
          <View
            style={{
              height: INNER_RADIUS * 2,
              width: INNER_RADIUS * 2,
              borderRadius: INNER_RADIUS,
              backgroundColor,
            }}
          />
        </Box>
        <Text textAlign='center' marginTop='s'>
          {title}
        </Text>
      </Box>
    </BorderlessTap>
  );
};

export default Category;
