import { Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Layout from './layout';
import OTPTextInput from 'react-native-otp-textinput';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SingupStackParamList } from '../../../routes';

const EmailVerification = ({ navigation }: { navigation: NativeStackNavigationProp<SingupStackParamList, "email_verification"> }) => {
  const [otp, setOtp] = useState<string>("");

  useEffect(() => {
    if (otp.length == 4) {
      navigation.navigate("profile_details");
    }
  }, [otp]);

  return (
    <Layout>
      <Text className={`font-cabinet-bold text-[28px] mt-4`}>
        Email Verification
      </Text>
      <Text className={`text-grey-400 font-sora mt-1.5 text-[15px]`}>
        Enter the 4 digit code sent to your email address
      </Text>

      <View className={`mt-10`}>
        <OTPTextInput
          inputCount={4}
          tintColor={"#DFDFDF"}
          defaultValue={otp}
          handleTextChange={(e) => { setOtp(e) }}
          containerStyle={{
            margin: 0,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          textInputStyle={{
            borderBottomWidth: 1,
            borderColor: "#DFDFDF",
            borderRadius: 10,
            borderWidth: 1,
            // @ts-ignore
            alignText: "center",
            width: 70,
            height: 70,
            fontFamily: "sora-medium"
          }}
        />
      </View>

      <Text className={`font-sora-medium text-grey-400 mt-5 text-[14.5px]`}>
        Didn't get any mail? <Text className={`text-primary-800`}>Resend code</Text>
      </Text>
    </Layout>
  )
}

export default EmailVerification;
