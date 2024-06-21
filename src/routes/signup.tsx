import React from 'react';
import { SignupStack } from '.';
import Index from '../screens/auth/signup';
import EmailVerification from '../screens/auth/signup/email_verification';
import ProfileDetails from '../screens/auth/signup/profile_details';
import CarDetails from '../screens/auth/signup/car_details';

const Signup = () => {
  const { Navigator, Screen } = SignupStack;

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="index" component={Index} />
      <Screen name="email_verification" component={EmailVerification} />
      <Screen name="profile_details" component={ProfileDetails} />
      <Screen name="car_details" component={CarDetails} />
    </Navigator>
  )
}

export default Signup;
