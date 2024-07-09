import { SafeAreaView, ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import Header from '../../../../components/common/header';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList, SettingsScreensStackParamList } from '../../../../routes';
import AccountIcon from '../../../../../assets/icons/settings/account.svg';
import SecurityIcon from '../../../../../assets/icons/settings/security.svg';
import SupportIcon from '../../../../../assets/icons/settings/support.svg';
import TermsIcon from '../../../../../assets/icons/settings/terms.svg';
import ReportIcon from '../../../../../assets/icons/settings/report.svg';
import LogoutIcon from '../../../../../assets/icons/settings/logout.svg';
import { removeData } from '../../../../states/async_storage';
import useAppSettings from '../../../../states/zustand/app_settings';
import { useNavigation } from '@react-navigation/native';

const Settings = ({ navigation }: { navigation: NativeStackNavigationProp<SettingsScreensStackParamList, "index"> }) => {
  const { setLoggedIn } = useAppSettings(state => state);
  const rootNavigation = useNavigation<NativeStackNavigationProp<RootStackParamList, "appscreens">>();
  const options = [
    {
      title: "Account Management",
      text: "Make changes to your account",
      icon: <AccountIcon />,
      onPress: () => { navigation.navigate("account") },
    },
    {
      title: "Security",
      text: "Reset your password",
      icon: <SecurityIcon />,
      onPress: () => { navigation.navigate("security") },
    },
    {
      title: "Support",
      text: "FAQ, Chat bot/personnel, Contact Us",
      icon: <SupportIcon />,
      onPress: () => { navigation.navigate("support", { screen: "index" }) },
    },
    {
      title: "Terms and condition",
      text: "Review our Terms and Conditions",
      icon: <TermsIcon />,
      onPress: () => { navigation.navigate("terms") },
    },
    {
      title: "Report",
      text: "Report whatever you find demeaning",
      icon: <ReportIcon />,
      onPress: () => { navigation.navigate("report") },
    },
    {
      title: "Log Out",
      icon: <LogoutIcon />,
      onPress: async () => {
        if (await removeData("loggedIn")) {
          setLoggedIn(false);
          rootNavigation.navigate("auth", { screen: "login" });
        }
      },
    },
  ];

  return (
    <View className={`flex-1 bg-white`}>
      <SafeAreaView className={`flex-1`}>
        <Header title='Settings' onBackPressed={() => { navigation.goBack(); }} />
        <View className={`flex-1`}>
          <ScrollView contentContainerStyle={{ minHeight: "100%", paddingTop: 14, paddingHorizontal: 16 }}>
            {options.map((option, index) => (
              <TouchableWithoutFeedback key={index} onPress={option.onPress}>
                <View className={`flex flex-row items-center mt-2.5 border-b border-b-[#F1EFEF] py-2.5`}>
                  {option.icon}

                  <View className={`ml-3`}>
                    <Text className={`font-sora-medium text-[17px]`}>
                      {option.title}
                    </Text>

                    {option.text && (
                      <Text className={`text-grey-300 font-sora text-xs mt-1.5`}>
                        {option.text}
                      </Text>
                    )}
                  </View>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default Settings;
