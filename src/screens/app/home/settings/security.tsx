import { ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SettingsScreensStackParamList } from '../../../../routes';
import Header from '../../../../components/common/header';
import SecurityIcon from '../../../../../assets/icons/settings/security.svg';
import Input from '../../../../components/common/input';

const Security = ({ navigation }: { navigation: NativeStackNavigationProp<SettingsScreensStackParamList, "security"> }) => {
  return (
    <View className={`flex-1 bg-white`}>
      <Header title='Security' onBackPressed={() => { navigation.goBack() }} />

      <ScrollView contentContainerStyle={{ paddingTop: 16, paddingHorizontal: 16 }}>
        <View>
          <SecurityIcon />
          <Text className={`font-sora-bold text-lg leading-10`}>
            Security
          </Text>
          <Text className={`font-sora text-[#A8A8A8]`}>
            reset your password, for security for purposes.
          </Text>
        </View>

        <View className={`mt-9`}>
          <View className={`mb-7`}>
            <Input
              placeholder='Current password'
              secureTextEntry={true}
            />
          </View>

          <View className={`mb-7`}>
            <Input
              placeholder='Changed password'
              secureTextEntry={true}
            />
          </View>

          <View className={`mb-7`}>
            <Input
              placeholder='Confirm changed password'
              secureTextEntry={true}
            />
          </View>

          <TouchableWithoutFeedback>
            <Text className={`bg-primary-900 text-white font-sora-medium text-base py-4 text-center rounded-lg mt-5 w-full`}>
              Submit
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </View>
  )
}

export default Security;
