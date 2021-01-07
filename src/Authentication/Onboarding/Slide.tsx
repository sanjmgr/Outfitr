import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ImageRequireSource,
} from 'react-native';

interface SlideProps {
  title: string;
  right?: boolean;
  picture: {
    src: ImageRequireSource;
    width: number;
    height: number;
  };
}
const { width, height } = Dimensions.get('window');
export const SLIDE_HEIGHT = height * 0.61;
export const BORDER_RADIUS = 75;
const styles = StyleSheet.create({
  container: {
    width,
  },
  titleContainer: {
    height: 100,
  },
  title: {
    fontSize: 80,
    lineHeight: 80,
    fontFamily: 'Roboto-Bold',
    color: '#FFF',
    textAlign: 'center',
  },
});
const Slide = ({ title, right }: SlideProps) => {
  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: right ? '-90deg' : '90deg' },
  ];
  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, { transform }]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default Slide;
