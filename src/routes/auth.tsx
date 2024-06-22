import React from 'react';
import { AuthStack } from '.';
import Onboarding from '../screens/auth/onboarding';
import Login from '../screens/auth/login';
import Signup from './signup';
import useAppSettings from '../states/zustand/app_settings';

const Auth = () => {
  const { Navigator, Screen } = AuthStack;
  const { onboarded } = useAppSettings(state => state);

  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName={onboarded ? "login" : "onboarding"}>
      <Screen name="onboarding" component={Onboarding} />
      <Screen name="login" component={Login} />
      <Screen name="signup" component={Signup} />
    </Navigator>
  )
}

export default Auth;
