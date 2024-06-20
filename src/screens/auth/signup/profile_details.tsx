import { Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import Layout from './layout';
import Input from '../../../components/common/input';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SingupStackParamList } from '../../../routes';

const ProfileDetails = ({ navigation }: { navigation: NativeStackNavigationProp<SingupStackParamList, "profile_details"> }) => {
  return (
    <Layout>
      <Text className={`font-cabinet-bold text-[28px] mt-4`}>
        Profile Details
      </Text>
      <Text className={`text-grey-400 font-sora mt-1.5 text-[15px]`}>
        This is required please, in order to setup your profile
      </Text>

      <View className={`mt-10`}>
        <Input
          placeholder='What do we call you?'
        />
      </View>

      <View className={`mt-6`}>
        <Input
          keyboardType="phone-pad"
          placeholder='Mobile Number'
        />
      </View>

      <View className={`mt-6`}>
        <Input
          placeholder='Address'
        />
      </View>

      <TouchableWithoutFeedback onPress={() => { navigation.navigate("car_details") }}>
        <Text className={`mt-20 bg-primary-900 text-white font-sora-medium text-base py-4 rounded-lg text-center`}>
          Next
        </Text>
      </TouchableWithoutFeedback>
    </Layout>
  )
}

export default ProfileDetails;
