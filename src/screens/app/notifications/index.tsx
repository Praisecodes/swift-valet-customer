import { ScrollView, Text, View } from 'react-native';
import React from 'react';
import Header from '../../../components/common/header';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { AppScreensStackParamList } from '../../../routes';

const Notifications = ({ navigation }: { navigation: BottomTabNavigationProp<AppScreensStackParamList, "notifications"> }) => {
  return (
    <View className={`bg-white flex-1`}>
      <Header onBackPressed={() => { navigation.goBack() }} title='Notifications' />
      <View className={`flex-1`}>
        <ScrollView contentContainerStyle={{ minHeight: "100%", paddingHorizontal: 20, paddingTop: 16 }}>

        </ScrollView>
      </View>
    </View>
  )
}

export default Notifications;
