import React, { useRef, useLayoutEffect } from 'react';
import moment from 'moment';
import { Dimensions } from 'react-native';

import { useTheme, Box, Theme } from '../../../components';
import Underlay, { MARGIN } from './Underlay';
import { lerp } from './Helpers';
import {
  Transition,
  Transitioning,
  TransitioningView,
} from 'react-native-reanimated';

const { width: wWidth } = Dimensions.get('window');
const aspectRatio = 195 / 305;

const transition = (
  <Transition.Together>
    <Transition.In
      type='slide-bottom'
      durationMs={1000}
      interpolation='easeInOut'
    />
  </Transition.Together>
);

export interface DataPoint {
  date: number;
  value: number;
  color: keyof Theme['colors'];
  id: number;
}
interface GraphProps {
  data: DataPoint[];
  startDate: number;
  numberOfMonths: number;
}

const Graph = ({ data, startDate, numberOfMonths }: GraphProps) => {
  const theme = useTheme();
  const canvasWidth = wWidth - theme.spacing.m * 2;
  const canvasHeight = canvasWidth * aspectRatio;
  const width = canvasWidth - theme.spacing.l;
  const height = canvasHeight - theme.spacing.xl;
  const step = width / numberOfMonths;
  const dates = data.map(datum => datum.date);
  const values = data.map(datum => datum.value);
  const [minX, maxX] = [Math.min(...dates), Math.max(...dates)];
  const [minY, maxY] = [Math.min(...values), Math.max(...values)];

  const ref = useRef<TransitioningView>(null);

  useLayoutEffect(() => {
    ref.current?.animateNextTransition();
  }, []);

  return (
    <Box marginTop='xl' paddingLeft={MARGIN} paddingBottom={MARGIN}>
      <Underlay {...{ maxY, step, startDate, numberOfMonths }} />
      <Transitioning.View
        {...{ transition, ref }}
        style={{
          height,
          width,
          overflow: 'hidden',
        }}>
        {data.map(point => {
          // Get total number of months
          const i = Math.round(
            moment
              .duration(moment(point.date).diff(moment(startDate)))
              .asMonths()
          );
          return (
            <Box
              key={point.id}
              position='absolute'
              left={i * step}
              bottom={0}
              width={step}
              height={lerp(0, height, point.value / maxY)}>
              <Box
                backgroundColor={point.color}
                opacity={0.3}
                position='absolute'
                top={0}
                right={theme.spacing.m}
                bottom={0}
                left={theme.spacing.m}
                borderTopLeftRadius='m'
                borderTopRightRadius='m'
              />
              <Box
                backgroundColor={point.color}
                position='absolute'
                height={32}
                top={0}
                bottom={0}
                right={theme.spacing.m}
                left={theme.spacing.m}
                borderRadius='m'
              />
            </Box>
          );
        })}
      </Transitioning.View>
    </Box>
  );
};

export default Graph;
