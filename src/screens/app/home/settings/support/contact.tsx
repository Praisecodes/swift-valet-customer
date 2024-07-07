import { ScrollView, Text, View } from 'react-native';
import React from 'react';
import Header from '../../../../../components/common/header';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SupportScreensStackParamList } from '../../../../../routes';

const Contact = ({ navigation }: { navigation: NativeStackNavigationProp<SupportScreensStackParamList, "contact"> }) => {
  return (
    <View className={`flex-1 bg-white`}>
      <Header title="Contact us" onBackPressed={() => { navigation.goBack(); }} />
      <View className={`flex-1`}>
        <ScrollView contentContainerStyle={{ minHeight: "100%", paddingTop: 14, paddingHorizontal: 16 }}>
        </ScrollView>
      </View>
    </View>
  )
}

export default Contact;
