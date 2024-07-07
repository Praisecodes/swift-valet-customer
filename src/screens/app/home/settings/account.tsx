import { Image, ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import Header from '../../../../components/common/header';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SettingsScreensStackParamList } from '../../../../routes';
import ProfilePicture from '../../../../../assets/images/profile_picture.png';
import Camera from '../../../../../assets/icons/camera.svg';
import Input from '../../../../components/common/input';
import Plus from '../../../../../assets/icons/plus.svg';

const Account = ({ navigation }: { navigation: NativeStackNavigationProp<SettingsScreensStackParamList, "account"> }) => {
  return (
    <View className={`flex-1 bg-white`}>
      <Header title='Account Management' onBackPressed={() => { navigation.goBack(); }} />
      <View className={`flex-1`}>
        <ScrollView contentContainerStyle={{ minHeight: "100%", paddingTop: 14, paddingHorizontal: 16, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <View>
            <View>
              <Text className={`font-sora-medium text-lg`}>
                Personal account profile
              </Text>
              <Text className={`font-sora text-sm mt-1 text-[#A8A8A8]`}>
                Make changes to your personal account details
              </Text>
            </View>

            <View className={`relative rounded-full w-[127px] h-[127px] overflow-hidden mt-12`}>
              <Image
                source={ProfilePicture}
                className={`w-full h-full`}
                resizeMode="cover"
              />

              <TouchableWithoutFeedback>
                <View className={`bg-[#00000080] absolute flex items-center justify-center w-full h-full`}>
                  <Camera />
                </View>
              </TouchableWithoutFeedback>
            </View>

            <View className={`mt-7`}>
              <View className={`mt-0`}>
                <Input
                  placeholder='Name'
                />
              </View>

              <View className={`mt-4`}>
                <Input
                  placeholder='Email'
                  keyboardType="email-address"
                />
              </View>

              <View className={`mt-4`}>
                <Input
                  placeholder='Phone Number'
                  keyboardType="phone-pad"
                />
              </View>

              <TouchableWithoutFeedback onPress={() => { navigation.navigate("add_car") }}>
                <View className={`flex flex-row py-3.5 bg-[#00BE5D14] rounded-lg mt-7 items-center justify-center`}>
                  <Plus />
                  <Text className={`text-primary-900 font-sora-medium text-[16px] ml-2`}>
                    Add new car
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>

          <TouchableWithoutFeedback>
            <Text className={`bg-primary-900 text-white rounded-lg w-full py-4 text-base font-sora-medium text-center mt-6 mb-4`}>
              Save Changes
            </Text>
          </TouchableWithoutFeedback>
        </ScrollView>
      </View>
    </View>
  )
}

export default Account;
