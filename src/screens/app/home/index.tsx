import { ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import Header from '../../../components/home/header';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { AppScreensStackParamList } from '../../../routes';
import ScanCard from '../../../components/home/scan_card';
import Plus from '../../../../assets/icons/plus.svg';

const Home = ({ navigation }: { navigation: BottomTabNavigationProp<AppScreensStackParamList, "home"> }) => {
  return (
    <View className={`flex-1 bg-white`}>
      <ScrollView contentContainerStyle={{ minHeight: "98.4%", position: "relative", paddingHorizontal: 18, paddingVertical: 26 }}>
        <Header />
        <ScanCard />
        <View className={`mt-4`}>
          <Text className={`font-sora-bold text-lg`}>
            List of Personal cars
          </Text>
        </View>

        <TouchableWithoutFeedback>
          <Text className={`p-5 bg-white rounded-full absolute shadow-md bottom-2.5 right-3`} style={{elevation: 6, shadowColor: "#8A8A8A64"}}>
            <Plus />
          </Text>
        </TouchableWithoutFeedback>
      </ScrollView>
    </View>
  )
}

export default Home;
