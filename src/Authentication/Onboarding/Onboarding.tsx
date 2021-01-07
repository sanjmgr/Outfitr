import React, { useRef } from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import Animated, {
  multiply,
  divide,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import { interpolateColor, useScrollHandler } from 'react-native-redash';

import Slide, { SLIDE_HEIGHT } from './Slide';
import Subslide from './Subslide';
import {
  Dot,
  Theme,
  useTheme,
  makeStyles,
  AuthNavigationProps,
} from '../../components';

const { width } = Dimensions.get('window');

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomRightRadius: theme.borderRadii.xl,
    overflow: 'hidden',
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: theme.borderRadii.xl,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: theme.colors.background,
    borderTopLeftRadius: theme.borderRadii.xl,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: theme.borderRadii.xl,
    width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slideContent: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 60,
  },
}));

const slides = [
  {
    title: 'Relaxed',
    subtitle: 'Find Your Outfits',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing',
    color: '#BFEAF5',
    picture: {
      src: require('../assets/images/1.png'),
      width: 1457,
      height: 1957,
    },
  },
  {
    title: 'Playful',
    subtitle: 'Hear it first, Wear it first',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    color: '#BEECC4',
    picture: {
      src: require('../assets/images/2.png'),
      width: 1757,
      height: 2100,
    },
  },
  {
    title: 'Excentric',
    subtitle: 'Your style, Your way',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    color: '#FFE4D9',
    picture: {
      src: require('../assets/images/3.png'),
      width: 1457,
      height: 2000,
    },
  },
  {
    title: 'Funky',
    subtitle: 'Look good, Feel good',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    color: '#FFDDDD',
    picture: {
      src: require('../assets/images/4.png'),
      width: 2057,
      height: 2553,
    },
  },
];

export const assets = slides.map(slide => slide.picture.src);

const Onboarding = ({ navigation }: AuthNavigationProps<'Onboarding'>) => {
  const { scrollHandler, x } = useScrollHandler();
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map(slide => slide.color),
  });
  const styles = useStyles();
  const scroll = useRef<Animated.ScrollView>(null);
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        {slides.map(({ picture }, index) => {
          const opacity = interpolate(x, {
            inputRange: [
              (index - 1) * width,
              index * width,
              (index + 1) * width,
            ],
            outputRange: [0, 1, 0],
            extrapolate: Extrapolate.CLAMP,
          });
          return (
            <Animated.View style={[styles.underlay, { opacity }]} key={index}>
              <Image
                source={picture.src}
                style={{
                  width: width - theme.borderRadii.xl,
                  height:
                    ((width - theme.borderRadii.xl) * picture.height) /
                    picture.width,
                }}
              />
            </Animated.View>
          );
        })}
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate='fast'
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...scrollHandler}>
          {slides.map(({ title, picture }, index) => (
            <Slide key={index} {...{ title, picture }} right={!!(index % 2)} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor,
          }}
        />
        <Animated.View style={styles.footerContent}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot key={index} currentIndex={divide(x, width)} {...{ index }} />
            ))}
          </View>
          <Animated.View
            style={[
              styles.slideContent,
              {
                width: width * slides.length,
                transform: [{ translateX: multiply(x, -1) }],
              },
            ]}>
            {slides.map(({ subtitle, description }, index) => {
              const last = index === slides.length - 1;
              return (
                <Subslide
                  key={index}
                  {...{ subtitle, description, last }}
                  onPress={() => {
                    if (last) {
                      navigation.navigate('Welcome');
                    } else {
                      scroll.current
                        ?.getNode()
                        .scrollTo({ x: width * (index + 1), animated: true });
                    }
                  }}
                />
              );
            })}
          </Animated.View>
        </Animated.View>
      </View>
    </View>
  );
};

export default Onboarding;
