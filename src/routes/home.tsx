import React from 'react';
import { HomeScreensStack } from '.';
import Home from '../screens/app/home';
import SettingScreens from './settings';
import Scan from '../screens/app/home/scan';

const HomeScreens = () => {
  const { Navigator, Screen } = HomeScreensStack;
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="index" component={Home} />
      <Screen name="settings" component={SettingScreens} />
      <Screen name="scan" component={Scan} />
    </Navigator>
  )
}

export default HomeScreens;
