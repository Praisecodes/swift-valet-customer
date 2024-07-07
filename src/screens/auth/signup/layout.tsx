import { KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import AngleLeft from '../../../../assets/icons/angle-left.svg';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SingupStackParamList } from '../../../routes';

const Layout = ({ children }: { children: React.ReactNode; }) => {
  const navigation = useNavigation<NativeStackNavigationProp<SingupStackParamList>>();

  return (
    <KeyboardAvoidingView className={`flex-1`} behavior='padding'>
      <ScrollView contentContainerStyle={{ minHeight: "100%", backgroundColor: "#FFFFFF", paddingHorizontal: 20, paddingTop: 32 }}>
        <TouchableWithoutFeedback onPress={() => { navigation.goBack() }}>
          <View className={`w-[50px] h-[50px] bg-grey-100 rounded-full flex items-center justify-center mb-5`}>
            <AngleLeft />
          </View>
        </TouchableWithoutFeedback>

        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Layout;
