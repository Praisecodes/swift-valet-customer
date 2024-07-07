import { BackHandler, ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import React, { useEffect } from 'react';
import Header from '../../../components/home/header';
import { HomeScreensStackParamList } from '../../../routes';
import ScanCard from '../../../components/home/scan_card';
import Plus from '../../../../assets/icons/plus.svg';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { useIsFocused } from '@react-navigation/native';

const Home = ({ navigation }: { navigation: NativeStackNavigationProp<HomeScreensStackParamList, "index"> }) => {
  const isFocused = useIsFocused();

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
      <ScrollView contentContainerStyle={{ minHeight: "98.4%", position: "relative", paddingHorizontal: 18, paddingVertical: 26 }}>
        <Header navigation={navigation} />
        <ScanCard />
        <View className={`mt-4`}>
          <Text className={`font-sora-bold text-lg`}>
            List of Personal cars
          </Text>
        </View>

        <TouchableWithoutFeedback>
          <View className={`p-5 bg-white rounded-full absolute shadow-md shadow-[#8A8A8A32] bottom-2.5 right-3`} style={{ elevation: 6 }}>
            <Plus />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </View>
  )
}

export default Home;
