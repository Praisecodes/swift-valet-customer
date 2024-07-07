import { KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import Header from '../../../../components/common/header';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SettingsScreensStackParamList } from '../../../../routes';
import ReportIcon from '../../../../../assets/icons/settings/report.svg';

const Report = ({ navigation }: { navigation: NativeStackNavigationProp<SettingsScreensStackParamList, "report"> }) => {
  return (
    <View className={`flex-1 bg-white`}>
      <Header title='Report' onBackPressed={() => { navigation.goBack(); }} />
      <KeyboardAvoidingView className={`flex-1`} behavior='padding'>
        <ScrollView contentContainerStyle={{ minHeight: "100%", paddingTop: 14, paddingHorizontal: 16, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <View>
            <ReportIcon width={35} />
            <Text className={`text-error-600 font-sora-medium text-lg -mt-1`}>
              Report your Issues.
            </Text>
            <Text className={`text-[#344054] font-sora text-base mt-2`}>
              Tell us what you find demeaning  and we will respond immediately, Thank you!!
            </Text>
            <TextInput
              multiline
              style={{ textAlignVertical: "top" }}
              className={`w-full h-80 p-3 rounded-lg border-2 border-[#1018280D] mt-2.5`}
            />
            <Text className={`mt-1 font-sora-medium text-error-600`}>
              Not more than 500 words
            </Text>
          </View>

          <TouchableWithoutFeedback>
            <View className={`w-full rounded-lg bg-primary-900 my-5`}>
              <Text className={`py-4 text-center w-full text-white font-sora-medium text-base`}>
                Report
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  )
}

export default Report;
