import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  HomeNavigationProps,
  Box,
  Header,
  Text,
  makeStyles,
  Theme,
} from '../../components';
import Graph, { Transaction, DataPoint, TopCurve } from './Graph';

const startDate = new Date('2019-09-01').getTime();
const numberOfMonths = 6;
const aspectRatio = 4.5;
const footerHeight = Dimensions.get('window').width / aspectRatio;

const data: DataPoint[] = [
  {
    date: new Date('2019-09-01').getTime(),
    value: 120,
    color: 'info',
    id: 245672,
  },
  {
    date: new Date('2019-10-01').getTime(),
    value: 139.42,
    color: 'primary',
    id: 245673,
  },
  {
    date: new Date('2019-11-01').getTime(),
    value: 50,
    color: 'secondary',
    id: 245674,
  },
  {
    date: new Date('2019-12-01').getTime(),
    value: 198.54,
    color: 'graph1',
    id: 245675,
  },
  {
    date: new Date('2020-01-01').getTime(),
    value: 100,
    color: 'drawer4',
    id: 245676,
  },

  {
    date: new Date('2020-02-01').getTime(),
    value: 150,
    color: 'graph2',
    id: 245677,
  },
];

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    ...StyleSheet.absoluteFillObject,
    height: undefined,
    width: undefined,
    borderTopLeftRadius: theme.borderRadii.xl,
  },
  scrollview: {
    paddingBottom: footerHeight,
  },
}));

const TransactionHistory = ({
  navigation,
}: HomeNavigationProps<'TransactionHistory'>) => {
  const insets = useSafeAreaInsets();
  const styles = useStyles();
  return (
    <Box
      flex={1}
      backgroundColor='background'
      style={{ paddingBottom: insets.bottom }}>
      <Header
        left={{ icon: 'menu', onPress: () => navigation.openDrawer() }}
        right={{ icon: 'share', onPress: () => true }}
        title='Transaction History'
      />
      <Box padding='m' flex={1}>
        <Box
          flexDirection='row'
          justifyContent='space-between'
          alignItems='flex-end'>
          <Box>
            <Text variant='header' opacity={0.3}>
              TOTAL SPENT
            </Text>
            <Text variant='title1'>$629,19</Text>
          </Box>
          <Box backgroundColor='primaryLight' padding='s' borderRadius='m'>
            <Text color='primary'>All Time</Text>
          </Box>
        </Box>
        <Graph {...{ data, startDate, numberOfMonths }} />
        <ScrollView
          style={{ paddingBottom: footerHeight }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollview}>
          {data.map(transaction => (
            <Transaction key={transaction.id} {...{ transaction }} />
          ))}
        </ScrollView>
        <Box
          position='absolute'
          right={0}
          bottom={0}
          left={0}
          aspectRatio={aspectRatio}>
          <TopCurve {...{ footerHeight }} />
          <Image
            source={require('../../Authentication/assets/images/Pattern.png')}
            style={styles.footer}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default TransactionHistory;
