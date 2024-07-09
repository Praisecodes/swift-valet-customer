import { ImageBackground, Text, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import Background from '../../../assets/images/background.png';
import ScanIcon from '../../../assets/images/scan.svg';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeScreensStackParamList } from '../../routes';

const ScanCard = () => {
  const navigation = useNavigation<NativeStackNavigationProp<HomeScreensStackParamList>>();

  return (
    <View className={`rounded-xl -z-30 mt-8 overflow-hidden`}>
      <ImageBackground
        source={Background}
        className={`py-5 rounded-lg min-h-[209px] px-4 flex items-center justify-center`}
      >
        <View className={`mb-5`}>
          <ScanIcon />
        </View>
        <TouchableWithoutFeedback onPress={() => { navigation.navigate("scan") }}>
          <View className={` rounded-lg bg-primary-900`}>
            <Text className={`text-white font-sora-medium py-2.5 px-3 text-xs`}>
              Scan Valet QR Code
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </View>
  )
}

export default ScanCard;
