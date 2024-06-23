import { Text, TouchableWithoutFeedback, View, ScrollView, BackHandler } from 'react-native';
import React, { useEffect } from 'react';
import Logo from '../../../assets/images/logo.svg';
import Input from '../../components/common/input';
import Google from '../../../assets/icons/google.svg';
import Apple from '../../../assets/icons/apple.svg';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes';
import { object, string } from 'yup';
import { useFormik } from 'formik';
import { storeData } from '../../states/async_storage';
import useAppSettings from '../../states/zustand/app_settings';
import { useIsFocused } from '@react-navigation/native';

const validationSchema = object({
  email: string().email().required(),
  password: string().min(3).required()
});

const Login = ({ navigation }: { navigation: NativeStackNavigationProp<RootStackParamList, "appscreens"> }) => {
  const { setLoggedIn } = useAppSettings(state => state);
  const isFocused = useIsFocused();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: async ({ email, password }) => {
      console.log(email, password);
      if (await storeData("loggedIn", "true")) {
        setLoggedIn(true);
        navigation.navigate("appscreens", { screen: "home", params: { screen: "index" } });
      }
    },
    validationSchema
  });

  useEffect(() => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
      if (isFocused) {
        BackHandler.exitApp();
      }
      return true;
    });

    return () => backHandler.remove();
  }, []);

  return (
    <View className={`flex-1 bg-white`}>
      <ScrollView contentContainerStyle={{ minHeight: "100%", paddingHorizontal: 20, paddingTop: 32 }}>
        <View className={`flex-1`}>
          <View className={`mx-auto`}>
            <Logo />
          </View>

          <View className={`mt-8`}>
            <Text className={`font-cabinet-bold mx-auto text-2xl`}>
              Welcome back!!
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

          <TouchableWithoutFeedback onPress={() => { formik.handleSubmit() }}>
            <Text className={`bg-primary-900 text-[15px] py-4 my-10 text-center text-white font-sora-bold rounded-lg`}>
              Sign In
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
          Don't have an account? <Text onPress={() => { navigation.navigate("auth", { screen: "signup", params: { screen: "index" } }) }} className={`text-primary-800 font-sora-bold`}>Create account</Text>
        </Text>
      </ScrollView>
    </View>
  )
}

export default Login;
