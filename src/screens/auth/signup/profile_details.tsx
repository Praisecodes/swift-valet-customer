import { Text, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import Layout from './layout';
import Input from '../../../components/common/input';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SingupStackParamList } from '../../../routes';
import { object, string } from 'yup';
import { useFormik } from 'formik';

const validationSchema = object({
  name: string().required(),
  mobile: string().required(),
  address: string().required(),
});

const ProfileDetails = ({ navigation }: { navigation: NativeStackNavigationProp<SingupStackParamList, "profile_details"> }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      address: ""
    },
    onSubmit: ({ name, mobile, address }) => {
      console.log(name, mobile, address);
      navigation.navigate("car_details");
    },
    validationSchema
  });

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
          value={formik.values.name}
          onChangeText={formik.handleChange("name")}
        />
      </View>

      <View className={`mt-6`}>
        <Input
          keyboardType="phone-pad"
          value={formik.values.mobile}
          onChangeText={formik.handleChange("mobile")}
          placeholder='Mobile Number'
        />
      </View>

      <View className={`mt-6`}>
        <Input
          value={formik.values.address}
          onChangeText={formik.handleChange('address')}
          placeholder='Address'
        />
      </View>

      <TouchableWithoutFeedback onPress={() => { formik.handleSubmit(); }}>
        <Text className={`mt-20 bg-primary-900 text-white font-sora-medium text-base py-4 rounded-lg text-center`}>
          Next
        </Text>
      </TouchableWithoutFeedback>
    </Layout>
  )
}

export default ProfileDetails;
