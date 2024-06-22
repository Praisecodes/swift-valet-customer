import React from 'react';
import { RootStack } from '.';
import Auth from './auth';
import AppScreens from './app';
import useAppSettings from '../states/zustand/app_settings';

const Root = () => {
  const { Navigator, Screen } = RootStack;
  const { loggedIn } = useAppSettings(state => state);

  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName={loggedIn ? "appscreens" : "auth"}>
      <Screen name="auth" component={Auth} />
      <Screen name="appscreens" component={AppScreens} />
    </Navigator>
  )
}

export default Root;
