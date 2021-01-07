import React, { ReactNode } from 'react';
import { TapGestureHandler, State } from 'react-native-gesture-handler';
import Animated, {
  useCode,
  cond,
  eq,
  call,
  stopClock,
  startClock,
  set,
  greaterThan,
  add,
  clockRunning,
  and,
  not,
  neq,
} from 'react-native-reanimated';
import { useTapGestureHandler, useClock, useValue } from 'react-native-redash';

interface BorderlessTapProps {
  children: ReactNode;
  onPress: () => void;
}

const BorderlessTap = ({ children, onPress }: BorderlessTapProps) => {
  const clock = useClock();
  const start = useValue(0);
  const opacity = useValue(0);
  const { gestureHandler, state } = useTapGestureHandler();
  useCode(
    () => [
      cond(and(not(clockRunning(clock)), eq(state, State.BEGAN)), [
        startClock(clock),
        set(start, clock),
      ]),
      cond(neq(start, State.BEGAN), stopClock(clock)),
      cond(eq(state, State.END), [call([], onPress), stopClock(clock)]),
      set(
        opacity,
        cond(
          and(greaterThan(clock, add(start, 100)), clockRunning(clock)),
          0.5,
          1
        )
      ),
    ],
    []
  );
  return (
    <TapGestureHandler {...gestureHandler}>
      <Animated.View style={{ opacity }}>{children}</Animated.View>
    </TapGestureHandler>
  );
};

export default BorderlessTap;
