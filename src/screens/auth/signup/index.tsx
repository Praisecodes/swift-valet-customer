import { Text, TouchableWithoutFeedback, View, KeyboardAvoidingView, ScrollView } from 'react-native';
import React from 'react';
import Logo from '../../../../assets/images/logo.svg';
import Input from '../../../components/common/input';
import Google from '../../../../assets/icons/google.svg';
import Apple from '../../../../assets/icons/apple.svg';

const Index = () => {
  return (
    <View className={`flex-1 bg-white`}>
      <ScrollView contentContainerStyle={{ minHeight: "100%", paddingHorizontal: 20, paddingTop: 32 }}>
        <View className={`flex-1`}>
          <View className={`mx-auto`}>
            <Logo />
          </View>

          <View className={`mt-8`}>
            <Text className={`font-cabinet-bold mx-auto text-2xl`}>
              Sign up to create account
            </Text>
            <Text className={`font-sora text-base mt-1.5 text-grey-400 text-center`}>
              We are here to solve your parking problem
            </Text>
          </View>

          <View className={`mt-10`}>
            <Input
              placeholder='Email'
              keyboardType="email-address"
            />
          </View>

          <View className={`mt-8`}>
            <Input
              placeholder='Password'
              secureTextEntry
            />
          </View>

          <TouchableWithoutFeedback>
            <Text className={`bg-primary-900 text-[15px] py-4 my-10 text-center text-white font-sora-bold rounded-lg`}>
              Create Account
            </Text>
          </TouchableWithoutFeedback>

          <View className={`flex flex-row items-center gap-x-5`}>
            <View className={`flex-1 w-[1px] h-[1px] bg-grey-200`} />
            <Text className={`font-sora-medium text-grey-600`}>Or</Text>
            <View className={`flex-1 w-[1px] h-[1px] bg-grey-200`} />
          </View>

          <TouchableWithoutFeedback>
            <View className={`flex flex-row items-center justify-center w-full bg-grey-100 py-3.5 mt-8 rounded-lg`}>
              <Google />
              <Text className={`font-sora text-[15px] ml-2.5`}>
                Sign in with Google
              </Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback>
            <View className={`flex flex-row items-center justify-center w-full bg-grey-100 py-3.5 mt-5 rounded-lg`}>
              <Apple />
              <Text className={`font-sora text-[15px] ml-2.5`}>
                Sign in with Apple
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

        <Text className={`text-grey-500 text-[14.6px] font-sora-medium text-center py-6`}>
          Already have an account? <Text className={`text-primary-800 font-sora-bold`}>Sign in</Text>
        </Text>
      </ScrollView>
    </View>
  )
}

export default Index;
