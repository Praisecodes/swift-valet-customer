import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigatorScreenParams } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

type SingupStackParamList = {
  index: undefined;
  email_verification: undefined;
  profile_details: undefined;
  car_details: undefined;
}

type AuthStackParamList = {
  onboarding: undefined;
  login: undefined;
  signup: NavigatorScreenParams<SingupStackParamList>;
}

type AppScreensStackParamList = {
  home: undefined;
  transactions: undefined;
  notifications: undefined;
  account: undefined;
}

type RootStackParamList = {
  auth: NavigatorScreenParams<AuthStackParamList>;
  appscreens: NavigatorScreenParams<AppScreensStackParamList>;
}

const RootStack = createNativeStackNavigator<RootStackParamList>();
const SignupStack = createNativeStackNavigator<SingupStackParamList>();
const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const AppScreensTabs = createBottomTabNavigator<AppScreensStackParamList>();

export {
  RootStack,
  RootStackParamList,
  AuthStack,
  AuthStackParamList,
  SignupStack,
  SingupStackParamList,
  AppScreensTabs,
  AppScreensStackParamList,
}
