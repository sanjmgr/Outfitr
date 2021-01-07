import React, { useState } from 'react';
import { Box, RoundedIcon, BorderlessTap } from '../../components';
interface OutfitProps {
  outfit: { id: number; color: string; aspectRatio: number; selected: boolean };
  width: number;
}

const Outfit = ({ outfit, width }: OutfitProps) => {
  const [selected, setSelected] = useState(false);
  return (
    <BorderlessTap
      onPress={() => {
        setSelected(prev => !prev);
        outfit.selected = !outfit.selected;
      }}>
      <Box
        marginBottom='m'
        borderRadius='m'
        alignItems='flex-end'
        padding='m'
        style={{
          backgroundColor: outfit.color,
          width,
          height: width * outfit.aspectRatio,
        }}>
        {selected && (
          <RoundedIcon
            name='check'
            backgroundColor='primary'
            color='background'
            size={24}
          />
        )}
      </Box>
    </BorderlessTap>
  );
};

export default Outfit;
