import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { LoadAssets, ThemeProvider } from './src/components';
import { AuthenticationNavigator, assets } from './src/Authentication';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeNavigator } from './src/Home';
import { AppRoutes } from './src/components/Navigation';

const fonts = {
  'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
  'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
  'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
};

const Stack = createStackNavigator<AppRoutes>();

export default function App() {
  return (
    <ThemeProvider>
      <LoadAssets {...{ fonts, assets }}>
        <SafeAreaProvider>
          <Stack.Navigator headerMode='none'>
            <Stack.Screen
              name='Authentication'
              component={AuthenticationNavigator}
            />
            <Stack.Screen name='Home' component={HomeNavigator} />
          </Stack.Navigator>
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}
