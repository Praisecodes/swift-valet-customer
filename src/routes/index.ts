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

type SupportScreensStackParamList = {
  index: undefined;
  faqs: undefined;
  chatbot: undefined;
  contact: undefined;
}

type SettingsScreensStackParamList = {
  index: undefined;
  account: undefined;
  security: undefined;
  support: NavigatorScreenParams<SupportScreensStackParamList>;
  terms: undefined;
  report: undefined;
  add_car: undefined;
}

type HomeScreensStackParamList = {
  index: undefined;
  settings: NavigatorScreenParams<SettingsScreensStackParamList>;
  scan: undefined;
}

type AppScreensStackParamList = {
  home: NavigatorScreenParams<HomeScreensStackParamList>;
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
const HomeScreensStack = createNativeStackNavigator<HomeScreensStackParamList>();
const SettingsScreensStack = createNativeStackNavigator<SettingsScreensStackParamList>();
const SupportScreensStack = createNativeStackNavigator<SupportScreensStackParamList>();

export {
  RootStack,
  RootStackParamList,
  AuthStack,
  AuthStackParamList,
  SignupStack,
  SingupStackParamList,
  AppScreensTabs,
  AppScreensStackParamList,
  HomeScreensStack,
  HomeScreensStackParamList,
  SettingsScreensStack,
  SettingsScreensStackParamList,
  SupportScreensStack,
  SupportScreensStackParamList,
}
