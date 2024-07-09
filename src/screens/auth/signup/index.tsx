import { Text, TouchableWithoutFeedback, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
import Logo from '../../../../assets/images/logo.svg';
import Input from '../../../components/common/input';
import Google from '../../../../assets/icons/google.svg';
import Apple from '../../../../assets/icons/apple.svg';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../../routes';
import { object, string } from 'yup';
import { useFormik } from 'formik';

const validationSchema = object({
  email: string().email("Please enter a valid email").required(),
  password: string().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,}$/, {
    message: "Your password needs to be strong enough",
  }).required()
});

const Index = ({ navigation }: { navigation: NativeStackNavigationProp<AuthStackParamList, "signup"> }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: ({ email, password }) => {
      console.log(email, password);
      navigation.navigate("signup", { screen: "email_verification" });
    },
    validationSchema
  });

  return (
    <View className={`flex-1 bg-white`}>
      <SafeAreaView className={`flex-1`}>
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
                value={formik.values.email}
                onChangeText={formik.handleChange('email')}
              />
            </View>

            <View className={`mt-8`}>
              <Input
                placeholder='Password'
                secureTextEntry
                value={formik.values.password}
                onChangeText={formik.handleChange('password')}
              />
            </View>

            <TouchableWithoutFeedback onPress={() => { formik.handleSubmit(); }}>
              <View className={`rounded-lg bg-primary-900 my-10`}>
                <Text className={`text-[15px] py-4 text-center text-white font-sora-bold`}>
                  Create Account
                </Text>
              </View>
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
            Already have an account?{" "}
            <TouchableWithoutFeedback onPress={() => { navigation.navigate("login") }}>
              <Text className={`text-primary-800 font-sora-bold`}>
                Sign in
              </Text>
            </TouchableWithoutFeedback>
          </Text>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default Index;
