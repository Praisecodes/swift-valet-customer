import React from 'react';
import { SettingsScreensStack } from '.';
import Account from '../screens/app/home/settings/account';
import Settings from '../screens/app/home/settings';
import SupportScreens from './support';
import Terms from '../screens/app/home/settings/terms';
import Report from '../screens/app/home/settings/report';
import Security from '../screens/app/home/settings/security';

const SettingScreens = () => {
  const { Navigator, Screen } = SettingsScreensStack;
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="index" component={Settings} />
      <Screen name="security" component={Security} />
      <Screen name="account" component={Account} />
      <Screen name="support" component={SupportScreens} />
      <Screen name="terms" component={Terms} />
      <Screen name="report" component={Report} />
    </Navigator>
  )
}

export default SettingScreens;
