import React, { ReactNode } from 'react';
import Svg, { Path } from 'react-native-svg';

import { Box, useTheme } from './Theme';

const Apple = () => (
  <Svg viewBox='0 0 24 24' width={24} height={24}>
    <Path
      d='M16.125 1c-1.153.067-2.477.71-3.264 1.527-.71.744-1.272 1.85-1.043 2.918 1.253.033 2.511-.626 3.264-1.459.703-.779 1.236-1.866 1.043-2.986zm.068 4.443c-1.809 0-2.565 1.112-3.818 1.112-1.289 0-2.467-1.041-4.027-1.041C6.226 5.514 3 7.48 3 12.11 3 16.324 6.818 21 8.973 21c1.309.013 1.626-.823 3.402-.832 1.778-.013 2.162.843 3.473.832 1.476-.011 2.628-1.633 3.47-2.918.604-.92.853-1.39 1.32-2.43-3.472-.88-4.163-6.48 0-7.638-.785-1.341-3.08-2.57-4.445-2.57z'
      fill='#333333'
    />
  </Svg>
);

const Google = () => (
  <Svg width={24} height={24} viewBox='0 0 24 24'>
    <Path
      d='M21.805 10.043H21V10h-9v4h5.652A5.997 5.997 0 016 12c0-3.313 2.688-6 6-6 1.531 0 2.922.578 3.98 1.52L18.81 4.69A9.956 9.956 0 0012 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-.672-.07-1.324-.195-1.957zm0 0'
      fill='#ffc107'
    />
    <Path
      d='M3.152 7.344l3.285 2.41A6.002 6.002 0 0112 6c1.531 0 2.922.578 3.98 1.52L18.81 4.69A9.956 9.956 0 0012 2a9.998 9.998 0 00-8.848 5.344zm0 0'
      fill='#ff3d00'
    />
    <Path
      d='M12 22c2.582 0 4.93-.988 6.703-2.598l-3.094-2.617A5.942 5.942 0 0112 18a5.998 5.998 0 01-5.64-3.973L3.097 16.54C4.754 19.777 8.113 22 12 22zm0 0'
      fill='#4caf50'
    />
    <Path
      d='M21.805 10.043H21V10h-9v4h5.652a6.06 6.06 0 01-2.043 2.785l3.094 2.617C18.484 19.602 22 17 22 12c0-.672-.07-1.324-.195-1.957zm0 0'
      fill='#1976d2'
    />
  </Svg>
);

const Facebook = () => (
  <Svg width={24} height={24} viewBox='0 0 24 24'>
    <Path
      d='M17.523 9H14V7c0-1.031.086-1.684 1.563-1.684h1.867v-3.18c-.907-.093-1.82-.14-2.739-.136C11.981 2 10 3.656 10 6.7V9H7v4h3v9h4v-9.004h3.066zm0 0'
      fill='#4267B2'
    />
  </Svg>
);

interface SocialIconProps {
  children: ReactNode;
}

const SocialIcon = ({ children }: SocialIconProps) => {
  const theme = useTheme();
  const SIZE = theme.borderRadii.l * 2;
  return (
    <Box
      marginHorizontal='s'
      backgroundColor='background'
      height={SIZE}
      width={SIZE}
      borderRadius='l'
      justifyContent='center'
      alignItems='center'>
      {children}
    </Box>
  );
};

const SocialLogin = () => {
  return (
    <Box flexDirection='row' justifyContent='center' marginHorizontal='s'>
      <SocialIcon>
        <Google />
      </SocialIcon>
      <SocialIcon>
        <Facebook />
      </SocialIcon>
      <SocialIcon>
        <Apple />
      </SocialIcon>
    </Box>
  );
};

export default SocialLogin;
