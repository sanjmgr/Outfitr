import React, { useState, useRef } from 'react';
import { Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

import { HomeNavigationProps, Box, Header, useTheme } from '../../components';
import Footer from './Footer';
import Outfit from './Outfit';
import {
  Transition,
  TransitioningView,
  Transitioning,
} from 'react-native-reanimated';
import TopCurve from './TopCurve';

const defaultOutfits = [
  {
    id: 1,
    color: '#BFEAF5',
    aspectRatio: 1,
    selected: false,
  },
  {
    id: 2,
    color: '#BEECC4',
    aspectRatio: 200 / 145,
    selected: false,
  },
  {
    id: 3,
    color: '#FFE4D9',
    aspectRatio: 180 / 145,
    selected: false,
  },
  {
    id: 4,
    color: '#FFDDDD',
    aspectRatio: 180 / 145,
    selected: false,
  },
  {
    id: 5,
    color: '#BFEAF5',
    aspectRatio: 1,
    selected: false,
  },
  {
    id: 6,
    color: '#F3F0EF',
    aspectRatio: 120 / 145,
    selected: false,
  },
  {
    id: 7,
    color: '#D5C3BB',
    aspectRatio: 210 / 145,
    selected: false,
  },
  {
    id: 8,
    color: '#DEEFC4',
    aspectRatio: 180 / 145,
    selected: false,
  },
];

const { width: wWidth } = Dimensions.get('window');
const transition = (
  <Transition.Together>
    <Transition.In type='fade' />
    <Transition.Out type='fade' />
  </Transition.Together>
);

const FavouriteOutfits = ({
  navigation,
}: HomeNavigationProps<'FavouriteOutfits'>) => {
  const [footerHeight, setFooterHeight] = useState(0);
  const [outfits, setOutfits] = useState(defaultOutfits);
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const width = (wWidth - theme.spacing.m * 3) / 2;
  const ref = useRef<TransitioningView>(null);

  return (
    <Box
      flex={1}
      backgroundColor='background'
      style={{ paddingBottom: insets.bottom }}>
      <Header
        left={{ icon: 'menu', onPress: () => navigation.openDrawer() }}
        right={{ icon: 'shopping-bag', onPress: () => true }}
        title='Outfit Ideas'
      />
      <Box flex={1}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: theme.spacing.m,
            paddingBottom: footerHeight,
          }}>
          <Transitioning.View {...{ transition, ref }}>
            <Box flexDirection='row'>
              <Box marginRight='m'>
                {outfits
                  .filter((_, i) => i % 2 !== 0)
                  .map(outfit => (
                    <Outfit key={outfit.id} {...{ outfit, width }} />
                  ))}
              </Box>
              <Box>
                {outfits
                  .filter((_, i) => i % 2 === 0)
                  .map(outfit => (
                    <Outfit key={outfit.id} {...{ outfit, width }} />
                  ))}
              </Box>
            </Box>
          </Transitioning.View>
        </ScrollView>
      </Box>
      <Box
        position='absolute'
        bottom={0}
        left={0}
        right={0}
        onLayout={({
          nativeEvent: {
            layout: { height },
          },
        }) => setFooterHeight(height)}>
        <TopCurve {...{ footerHeight }} />
        <Footer
          label='Add to Favorites'
          onPress={() => {
            ref.current?.animateNextTransition();
            setOutfits(outfits.filter(outfit => !outfit.selected));
          }}
        />
      </Box>
    </Box>
  );
};

export default FavouriteOutfits;
