import { ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import Header from '../../../components/home/header';
import { HomeScreensStackParamList } from '../../../routes';
import ScanCard from '../../../components/home/scan_card';
import Plus from '../../../../assets/icons/plus.svg';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';

const Home = ({ navigation }: { navigation: NativeStackNavigationProp<HomeScreensStackParamList, "index"> }) => {
  return (
    <View className={`flex-1 bg-white`}>
      <ScrollView contentContainerStyle={{ minHeight: "98.4%", position: "relative", paddingHorizontal: 18, paddingVertical: 26 }}>
        <Header navigation={navigation} />
        <ScanCard />
        <View className={`mt-4`}>
          <Text className={`font-sora-bold text-lg`}>
            List of Personal cars
          </Text>
        </View>

        <TouchableWithoutFeedback>
          <Text className={`p-5 bg-white rounded-full absolute shadow-md bottom-2.5 right-3`} style={{ elevation: 6, shadowColor: "#8A8A8A64" }}>
            <Plus />
          </Text>
        </TouchableWithoutFeedback>
      </ScrollView>
    </View>
  )
}

export default Home;
