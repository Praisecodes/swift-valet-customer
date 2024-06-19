import React from 'react';
import { AuthStack } from '.';
import Onboarding from '../screens/auth/onboarding';
import Login from '../screens/auth/login';
import Signup from './signup';

const Auth = () => {
  const { Navigator, Screen } = AuthStack;

  return (
    <Navigator>
      <Screen name="onboarding" component={Onboarding} />
      <Screen name="login" component={Login} />
      <Screen name="signup" component={Signup} />
    </Navigator>
  )
}

export default Auth;
