import React from 'react';
import { RootStack } from '.';
import Auth from './auth';
import AppScreens from './app';

const Root = () => {
  const { Navigator, Screen } = RootStack;

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="auth" component={Auth} />
      <Screen name="appscreens" component={AppScreens} />
    </Navigator>
  )
}

export default Root;
