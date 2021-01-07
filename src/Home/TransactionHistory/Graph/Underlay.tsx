import React from 'react';
import { StyleSheet } from 'react-native';
import moment from 'moment';

import { Box, Text, useTheme } from '../../../components';
import { lerp } from './Helpers';

export const MARGIN = 'xl';
const ROW_HEIGHT = 16;

interface UnderlayProps {
  maxY: number;
  step: number;
  startDate: number;
  numberOfMonths: number;
}

const Underlay = ({ maxY, step, startDate, numberOfMonths }: UnderlayProps) => {
  const theme = useTheme();
  const minDate = moment(startDate);
  return (
    <Box style={{ ...StyleSheet.absoluteFillObject }}>
      <Box flex={1} justifyContent='space-between'>
        {[1, 0.66, 0.33, 0].map(t => (
          <Box
            key={t}
            flexDirection='row'
            alignItems='center'
            height={ROW_HEIGHT}
            style={{
              top: t === 0 ? ROW_HEIGHT / 2 : t === 1 ? -ROW_HEIGHT : 0,
            }}>
            <Box width={theme.spacing[MARGIN]} paddingRight='s'>
              <Text color='info' textAlign='right'>
                {`$${Math.round(lerp(0, maxY, t))}`}
              </Text>
            </Box>
            <Box flex={1} height={1} backgroundColor='background2' />
          </Box>
        ))}
      </Box>
      <Box
        flexDirection='row'
        height={theme.spacing[MARGIN]}
        marginLeft={MARGIN}
        alignItems='center'>
        {new Array(numberOfMonths)
          .fill(0)
          .map((_, i) => minDate.clone().add(i, 'month'))
          .map((date, index) => (
            <Box key={index} width={step}>
              <Text textAlign='center' color='info'>
                {date.format('MMM')}
              </Text>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default Underlay;
