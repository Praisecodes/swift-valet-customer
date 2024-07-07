import { ScrollView, Text, View } from 'react-native';
import React from 'react';
import Header from '../../../../../components/common/header';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SupportScreensStackParamList } from '../../../../../routes';
import Email from '../../../../../../assets/icons/settings/support/contact.svg';
import Phone from '../../../../../../assets/icons/settings/support/phone.svg';
import Address from '../../../../../../assets/icons/settings/support/address.svg';

const Contact = ({ navigation }: { navigation: NativeStackNavigationProp<SupportScreensStackParamList, "contact"> }) => {
  return (
    <View className={`flex-1 bg-white`}>
      <Header title="Contact us" onBackPressed={() => { navigation.goBack(); }} />
      <View className={`flex-1`}>
        <ScrollView contentContainerStyle={{ minHeight: "100%", paddingTop: 14, paddingHorizontal: 16 }}>
          <View className={`bg-[#FAFAFA] rounded-lg px-5 py-7 mt-3`}>
            <View className={`flex flex-row`}>
              <Email />

              <View className={`ml-4`}>
                <Text className={`font-sora-medium text-base`}>
                  Email us
                </Text>
                <Text className={`font-sora text-sm text-[#3C7357] mt-1.5`}>
                  mail@swiftvalet.co
                </Text>
              </View>
            </View>

            <View className={`flex flex-row mt-7`}>
              <Phone />

              <View className={`ml-4`}>
                <Text className={`font-sora-medium text-base`}>
                  Mobile number
                </Text>
                <Text className={`font-sora text-sm text-[#3C7357] mt-2`}>
                  +234 803 056 5192
                </Text>
                <Text className={`font-sora text-sm text-[#3C7357] mt-2`}>
                  +234 807 718 0049
                </Text>
              </View>
            </View>

            <View className={`flex flex-row mt-7`}>
              <Address />

              <View className={`ml-4`}>
                <Text className={`font-sora-medium text-base`}>
                  Company address
                </Text>
                <Text className={`font-sora text-sm text-[#3C7357] mt-1.5`}>
                  Physically located at Abuja
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default Contact;
