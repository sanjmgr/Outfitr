import React from 'react';
import Svg, { Path, Defs, ClipPath, Rect, Circle } from 'react-native-svg';

import { useTheme, palette } from '../../../components';

interface TopCureveProps {
  footerHeight: number;
}
const TopCurve = ({ footerHeight }: TopCureveProps) => {
  const theme = useTheme();
  const size = theme.borderRadii.xl;
  return (
    <Svg
      height={size}
      width={size}
      style={{
        position: 'absolute',
        bottom: footerHeight,
        right: 0,
      }}
      viewBox='0 0 1 1'>
      <Defs>
        <ClipPath id='clip'>
          <Path
            d='M 0 1 A 0 0, 0, 0, 0, 1 0 L 1 1'
            fill={theme.colors.secondary}
          />
        </ClipPath>
      </Defs>
      <Rect clipPath='url(#clip)' height={1} width={1} fill={palette.green} />
      <Circle
        clipPath='url(#clip)'
        cx={0.4}
        cy={0.5}
        r={0.5}
        fill={palette.orange}
      />
    </Svg>
  );
};

export default TopCurve;
