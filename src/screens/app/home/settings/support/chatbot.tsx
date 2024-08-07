import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import React from 'react';
import Header from '../../../../../components/common/header';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SupportScreensStackParamList } from '../../../../../routes';

const Chatbot = ({ navigation }: { navigation: NativeStackNavigationProp<SupportScreensStackParamList, "chatbot"> }) => {
  return (
    <View className={`flex-1 bg-white`}>
      <SafeAreaView className={`flex-1`}>
        <Header title="Chatbot/personnel" onBackPressed={() => { navigation.goBack(); }} />
        <View className={`flex-1`}>
          <ScrollView contentContainerStyle={{ minHeight: "100%", paddingTop: 14, paddingHorizontal: 16 }}>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default Chatbot;
